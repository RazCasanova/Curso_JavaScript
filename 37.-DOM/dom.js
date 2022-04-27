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