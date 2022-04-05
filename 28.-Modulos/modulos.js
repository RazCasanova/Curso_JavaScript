import saludar, {Saludos, PI, usuario, contrasenia} from "./constantes.js";
// import {sumar, restar} from "./aritmetica.js";
import {aritmetica as calculos} from "./aritmetica.js";
console.log("Modulos");
console.log(PI);
console.log(usuario);
console.log(contrasenia);

// console.log(sumar(9,9));
// console.log(restar(9,9));

// console.log(aritmetica.sumar(9,9));
// console.log(aritmetica.restar(9,9));
console.log(calculos.sumar(9,9));
console.log(calculos.restar(9,9));
saludar();

let saludo = new Saludos();
saludo;