import stripeKeys from "./stripe-keys.js";
import  STRIPE_KEYS from "./stripe-keys.js";

// console.log(STRIPE_KEYS);

const $cartas = document.getElementById('cartas'),
        $template = document.getElementById('carta-template').content,
        $fragment = document.createDocumentFragment(),
        fetchOptions = {
            headers : {Authorization : `Bearer ${STRIPE_KEYS.secret}`},
            method : "GET"
        };

let prices, products;
const moneyFormat = (num) =>`$ ${num.slice(0, -2)}. ${num.slice(-2)}`;

/* Uso de Promise.all para realizar dos o más peticiones a endpoitns */
Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
.then((respuestas)=> Promise.all(respuestas.map((respuesta) => respuesta.json())))
.then((json)=>{
    products = json[0].data;
    prices = json[1].data;

    prices.forEach(element => {
        console.log(element);
        let productData = products.filter(product => product.id === element.product);
        $template.querySelector('.carta').setAttribute('data-price',element.id);
        $template.querySelector('img').setAttribute('src',productData[0].images[0]);
        $template.querySelector('img').setAttribute('alt',productData[0].name);
        $template.querySelector('figcaption').innerHTML = `${productData[0].name} <br> ${moneyFormat(element.unit_amount_decimal)} ${element.currency}`;

        let $clone = document.importNode($template,true);
        $fragment.appendChild($clone);
    });
    $cartas.appendChild($fragment);
})
.catch((error)=>{
    console.error(error);
})

document.addEventListener('click',(evt)=>{
    if (evt.target.matches('.carta *')) {
        let priceid = evt.target.parentElement.getAttribute('data-price');
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems : [{ price : priceid, quantity : 1 }],
            mode : "subscription",
            successUrl : "http://127.0.0.1:5500/41.-Practicas-AJAX/pagos-en-linea/stripe-success.html",
            cancelUrl : "http://127.0.0.1:5500/41.-Practicas-AJAX/pagos-en-linea/stripe-cancel.html",
        })
        .then((res)=>{
            console.log(res);
            if (res.error) {
                $cartas.insertAdjacentHTML = ('afterend',res.error.message);
            }
        })
    }
});