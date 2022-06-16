document.addEventListener("DOMContentLoaded", (evt)=>{
    const includeHTMl = (element, url) =>{
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange',(evt)=>{
            if (xhr.readyState !== 4) { return; }

            if (xhr.status >= 200 && xhr.status < 300) {
                /* outerHTML reemplaza el contenido html */
                element.outerHTML = xhr.responseText;
            }else{
                let message = xhr.statusText || "Error al cargar el archivo HTML";
                element.outerHTML = `<div>${message}</div>`
            }
        });

        xhr.open("GET", url);
        xhr.setRequestHeader('Content-type','text/html; charset=utf-8');
        xhr.send();
    }
    document.querySelectorAll('[data-include]').forEach((element)=>{
        includeHTMl(element, element.getAttribute('data-include'));
    })
});
