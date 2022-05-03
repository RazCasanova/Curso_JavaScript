// console.log("*** Elementos del documento ***");

// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

// document.write("<h2>Hola mundo</h2>");

// Obtener elementos por el nombre de la etiqueta
console.log(document.getElementsByTagName('li'));

// Obtener elementos por el atributo class
console.log(document.getElementsByClassName('card'));

// Obtener elementos por el atributo name
console.log(document.getElementsByName('nombre'));

// Obtener elementos por el atributo id
console.log(document.getElementById('menu'));

// Obtener elementos por consulta de selectores (solo el primer elemento que encuentre)

/*
    Es necesario colocar # si queremos obtener un elemento por el atributo id, . si queremos obtener el elemento por el atributo class
*/
/* A nivel de rendimiento, getElementById es más rápido que querySelector */

console.log(document.querySelector('#menu'));
console.log(document.querySelector('a'));

// Obtener elementos por consulta de selectores (todos los elementos que encuentre)
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('a').length);
document.querySelectorAll('a').forEach(el=>console.log(el));

console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelectorAll('#menu li'));

console.clear();

/* Acceder a los atributos de los elementos */
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));

/* Con la notación del punto puede variar a la notación de getAttribute */
console.log(document.querySelector('.link-dom').href);
console.log(document.querySelector('.link-dom').getAttribute('href'));

document.documentElement.lang = "es";
console.log(document.documentElement.getAttribute('lang'));

document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.getAttribute('lang'));

const $linkDOM =  document.querySelector('.link-dom');

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
console.log($linkDOM.hasAttribute('rel'));
$linkDOM.removeAttribute('rel');
console.log($linkDOM.hasAttribute('rel'));

// Data - Attributes

console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.getAttribute('data-description'));
$linkDOM.dataset.description = "Hola mundo";
console.log($linkDOM.getAttribute('data-description'));

console.log($linkDOM.hasAttribute('data-id'));
$linkDOM.removeAttribute("data-id")
console.log($linkDOM.hasAttribute('data-id'));

console.clear();

/* Acceder a los estilos de las etiquetas */
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");

$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));

/* Variables CSS - Custom Properties CSS */

const $html = document.documentElement,
    $body = document.body;

    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor);
console.log(varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","blue");
// Para aplicar los nuevos colores de las variables es necesario reasignarle el valor a la variable
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color",varDarkColor);

console.clear();

const $card = document.querySelector('.card');

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);

$card.classList.remove("rotate-45");
console.log($card.className);
console.log($card.classList);

$card.classList.toggle("rotate-45");
console.log($card.className);
console.log($card.classList);
$card.classList.toggle("rotate-45");
console.log($card.className);
console.log($card.classList);
$card.classList.toggle("rotate-45");

$card.classList.replace("rotate-45","rotate-135");
console.log($card.className);
console.log($card.classList);

// Para agregar o eliminar más de una clase a un elemento debe ser separado por comas 
$card.classList.add("opaciti-80","sepia");
console.log($card.className);
console.log($card.classList);

$card.classList.remove("opaciti-80","sepia");
console.log($card.className);
console.log($card.classList);

$card.classList.toggle("rotate-135");

console.clear();

const $whatIsDOM = document.getElementById('que-es');

let text = `
<p>
    El DOM (Document Object Model en español Modelo de Objetos del Documento) es una API definida para representar e interactuar con cualquier documento HTML o XML. El DOM es un modelo de documento que se carga en el navegador web y que representa el documento como un árbol de nodos, en donde cada nodo representa una parte del documento (puede tratarse de un elemento, una cadena de texto o un comentario). 
</p>
<p>
    El DOM surgió a partir de la implementación de JavaScript en los navegadores. A esta primera versión también se la conoce como DOM 0 o "Legacy DOM". Hoy en día el grupo WHATWG es el encargado de actualizar el estándar de DOM.
</p>
`;

// innerText respeta las tabulaciones del contenido a agregar sin embargo no reconoce las etiquetas HTML
// innerText no es el estandar
$whatIsDOM.innerText = text;

// textContent quita las tabulaciones del contenido a agregar sin embargo no reconoce las etiquetas HTML
// textContent es el estandar
$whatIsDOM.textContent = text;

// innerHTML renderiza el contenido html
// innerHTML encapsula el contenido que se desea mostrar
$whatIsDOM.innerHTML = text;

// outerHTML renderiza el contenido html
// outerHTML reemplaza el contenido por el que se desa mostrar
$whatIsDOM.outerHTML = text; 

console.clear();

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);

// firstChild es el primer nodo (incluyendo las tabulaciones)
// console.log($cards.firstChild);

// firstElementChild es el primer elemento HTML
console.log($cards.firstElementChild);

// lastElementChild es el último elemento HTML
console.log($cards.lastElementChild);

// previousElementSibling es el elementro previo al referenciado
console.log($cards.previousElementSibling);
// nextElementSibling es el elemento siguiente al referenciado
console.log($cards.nextElementSibling);

// closest busca el elemento más cercano de la etiqueta referenciada
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));

console.clear();

const $figure = document.createElement('figure'),
    $image = document.createElement('img'),
    $figcaption = document.createElement('figcaption'),
    $figcaptionText = document.createTextNode("animals"),
    $figure2 = document.createElement('figure');

$image.setAttribute("src","https://placeimg.com/200/200/animals");
$image.setAttribute("alt","animals");

$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($image);
$figure.appendChild($figcaption);
$cards.appendChild($figure);



$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/tech" alt="tech">
    <figcaption>tech</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera","Verano","Otoño","Invierno"],
        $ul = document.createElement('ul');

document.write("<h3>Estaciones del año</h3>");

document.body.appendChild($ul);

estaciones.forEach(element =>{
    const $li = document.createElement('li');
    $li.textContent = element;
    $ul.appendChild($li); 
});

const continentes = ["Africa","America","Asia","Europa","Oceania"],
    $ul2 = document.createElement('ul');

    document.write("<h3>Continentes</h3>");
    document.body.appendChild($ul2);
    $ul2.innerHTML = '';
    continentes.forEach(element => {
        $ul2.innerHTML += `<li>${element}</li>`;
    });


/* 
Los fragmentos son utilizados para realizar una sola inserción al DOM y optimiza la demanda de recursos al navegador
*/

const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

const $ul3 = document.createElement('ul'),
    $fragmento = document.createDocumentFragment();

dias.forEach(element => {
    const $li = document.createElement('li');
    $li.textContent = element;
    $fragmento.appendChild($li);
});

document.write("<h3>Días</h3>");
$ul3.appendChild($fragmento);
document.body.appendChild($ul3);


console.clear();

const $template = document.getElementById('template-card').content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title : "Tecnología",
            img : "https://placeimg.com/200/200/tech" 
        },
        {
            title : "Animales",
            img : "https://placeimg.com/200/200/animals" 
        },
        {
            title : "Personas",
            img : "https://placeimg.com/200/200/people" 
        },
        {
            title : "Arquitectura",
            img : "https://placeimg.com/200/200/arch" 
        },
        {
            title : "Naturaleza",
            img : "https://placeimg.com/200/200/nature" 
        }
    ]
    ;

    
    cardContent.forEach(element => {
        $template.querySelector("img").setAttribute("src",element.img);
        $template.querySelector("img").setAttribute("alt",element.title);
        $template.querySelector("figcaption").textContent = element.title;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $cards.appendChild($fragment);


    console.clear();

    const $newCard = document.createElement('figure'),
    // Clonar elementos
        $cloneCards = $cards.cloneNode(true);

    $newCard.innerHTML = `
        <img src="https://placeimg.com/200/200/any" alt="any">
        <figcaption>any</figcaption>
    `;

    $newCard.classList.add("card");
    // Reemplazar un elemento
    // $cards.replaceChild($newCard,$cards.children[2]);

    // insertar antes de un elemento
    // $cards.insertBefore($newCard,$cards.firstElementChild);

    // Eliminar un elemento
    // $cards.removeChild($cards.lastElementChild);

    document.body.appendChild($cloneCards);

    console.clear();

    /*
    insertAdjacent
        .insertAdjacentElement(position, element)
        .insertAdjacentHTML(position, html)
        .insertAdjacentText(position, text)

    Posiciones
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(ultimo hijo)
        afteredn(hermano siguiente)
    */

    $newCard.innerHTML = `
        <img src="https://placeimg.com/200/200/any" alt="any">
        <figcaption>any</figcaption>    
    `;

    $newCard.classList.add("card");

    $cards.insertAdjacentElement("beforebegin",$newCard);
    $cards.insertAdjacentElement("afterbegin",$newCard);
    $cards.insertAdjacentElement("beforeend",$newCard);
    $cards.insertAdjacentElement("afterend",$newCard);

    // let $contentCard = `
    //     <img src="https://placeimg.com/200/200/any" alt="any">
    //     <figcaption></figcaption>
    // `;
    
    // $newCard.insertAdjacentHTML("beforeend",$contentCard);
    // $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","ANY")
    // $cards.insertAdjacentElement("afterbegin",$newCard);

    $cards.prepend($newCard);
    $cards.before($newCard);
    $cards.append($newCard);
    $cards.after($newCard);


    /* Eventos */
    function holaMundo(){
        alert("Hola mundo");
        console.log(event);
    }

    const $eventoSemantico = document.getElementById('evento-semantico');
    
    // En los eventos semánticos no es necesario colocar los parentesis de las funciones
    // En los eventos semánticos, por cada evento solo se puede asignar una función, y solos se pueden recibir el parametro event
    $eventoSemantico.onclick = holaMundo;
    $eventoSemantico.onclick = function(e) {
        alert("Manejador de eventos semánticos");
        console.log(e);
    };


    const $eventoMultiple = document.getElementById('evento-multiple');

    $eventoMultiple.addEventListener('click',holaMundo); 
    $eventoMultiple.addEventListener('click',(e)=>{
        alert("Manejador de eventos multiples");
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(event);
    }); 






    function saludar (nombre = "Desconocido"){
        alert(`Hola ${nombre}`);
        console.log(event);
    }

    $eventoMultiple.addEventListener('click',saludar);
    $eventoMultiple.addEventListener('click',()=>{
        saludar();
        saludar("Raziel");
    });


    const $eventoRemover = document.getElementById('evento-remover');


    const removerDobleClick = (evt) => {
        alert(`Removiendo el evento de tipo ${evt.type}`);
        console.log(evt);
        $eventoRemover.removeEventListener('dblclick',removerDobleClick);
        $eventoRemover.disabled = true;
    }

    $eventoRemover.addEventListener('dblclick',removerDobleClick);


    // Flujo de eventos
    /* Fase de burbuja */


    function flujoEventos(evt){
        console.log(`Hola te saluda ${this}, el clic lo originó ${evt.target.className}`);
    }

    // const $divsEventos = document.querySelectorAll('.eventos-flujo div');
    // console.log($divsEventos);

    document.addEventListener('click',(evt)=>{
        console.log(`Click en ${evt.target}`);

        if (evt.target.matches(".eventos-flujo div")) {
            flujoEventos(evt);    
        }

        if (evt.target.matches('.eventos-flujo a')) {
            alert("Hola mundo");
            evt.preventDefault();   
        }
    });

/*

    $divsEventos.forEach(div => {
        // Fase de burbuja
        div.addEventListener('click',flujoEventos);
        // div.addEventListener('click',flujoEventos, false );
        
        // Fase de captura
        // div.addEventListener('click',flujoEventos, true );
        
        // div.addEventListener('click',flujoEventos,{
        //     capture : false,
        //     once : true
        // });
    });
*/
/*
    const $linkEventos = document.querySelector('.eventos-flujo a');
*/
/*
    $linkEventos.addEventListener('click',evt=>{
        alert("Hola mundo");
        evt.preventDefault();
        evt.stopPropagation();
    })
*/


/* BOM */

window.addEventListener('resize',evt => {
    // console.clear();
    console.log("Evento resize");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
});

window.addEventListener('scroll', (evt) =>{
    // console.clear();
    // console.log("Evento scroll");
    // console.log(window.scrollX);
    // console.log(window.scrollY);    
});

/*

Es más eficiente "DOMContentLoaded" que "load"

*/

window.addEventListener('load',evt =>{
    // console.log("Evento load");
    // console.log(window.screenX);
    // console.log(window.screenY);
});

document.addEventListener('DOMContentLoaded', (evt)=>{
    // console.log("Evento DOMContentLoaded");
    // console.log(window.screenX);
    // console.log(window.screenY);
});



const $btnAbrir = document.getElementById('abrir-ventana'),
    $btnCerrar = document.getElementById('cerrar-ventana'),
    $btnImprimir = document.getElementById('imprimir-ventana');

    let ventana;

    $btnAbrir.addEventListener('click',(evt)=>{
        ventana = open("https://www.google.com");
    });
    $btnCerrar.addEventListener('click',(evt)=>{
        // close();
        ventana.close();
    });
    $btnImprimir.addEventListener('click',(evt)=>{
        print();
    });



    console.clear();

    console.log("Objeto URL (location)");
    console.log(location);
    console.log(location.origin);
    console.log(location.protocol);
    console.log(location.host);
    console.log(location.hostname);
    console.log(location.port);
    console.log(location.href);
    console.log(location.hash); //Detecta el valor de la URL después de un #
    console.log(location.search); //Muestra los valores que se envian por la URL
    console.log(location.pathname);
    // location.reload();

    console.log("Objeto historial (history");
    console.log(history);
    console.log(history.length);
    // console.log(history.back(2)); no lleva a la página anterior (visitadas)
    // console.log(history.forward(3)); no lleva a la página anterior (visitadas)


    /*
    Nos lleva a la página que deseamos (dependiendo del historial de navegación)
        console.log(history.go(3));
        console.log(history.go(-2));
    */

    console.log("Objeto navegador (navigator");
    console.log(navigator);
    console.log(navigator.connection);
    console.log(navigator.geolocation);
    console.log(navigator.mediaDevices);
    console.log(navigator.mimeTypes);
    console.log(navigator.onLine);
    console.log(navigator.serviceWorker);
    console.log(navigator.storage);
    console.log(navigator.usb);
    console.log(navigator.userAgent);
