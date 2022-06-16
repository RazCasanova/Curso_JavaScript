const $seccion = document.querySelector('.section');

document.addEventListener('DOMContentLoaded',()=>{ ajax({
    method : "GET",
    url : "http://127.0.0.1:5500/41.-Practicas-AJAX/sitioweb/home.html",
    succes : (respuesta)=>{
        $seccion.innerHTML = `${respuesta}`;
    },
    error : (error)=>{
        $seccion.innerHTML = `${error}`;
    }
}) });


document.addEventListener('click',(evt)=>{
    evt.preventDefault();
    if (evt.target.matches('.content-menu a')) {
        ajax({
            method : "GET",
            url : evt.target.href,
            succes : (respuesta)=>{
                $seccion.innerHTML = `${respuesta}`;
            },
            error : (error)=>{
                $seccion.innerHTML = `${error}`;
            }
        })
    }
});


const xhr = new XMLHttpRequest();

const ajax = (opciones) =>{
    let {method, url, succes, error} = opciones;

    xhr.addEventListener('readystatechange',(evt)=>{
        if (xhr.readyState !== 4) { return; }

        if (xhr.status >= 200 && xhr.status < 300) {
            succes(xhr.responseText);
        }else{
            let message = `Error ${xhr.status} : ${xhr.statusText || "Ocurrio un error"}`;
            error(message);
        }
    });
    
    xhr.open(method, url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
}