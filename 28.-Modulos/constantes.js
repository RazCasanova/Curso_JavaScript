export const PI = Math.PI;

export let usuario = "Raziel",
    contrasenia = 1234;

//Exportaciónes por defecto
// Solo se puede exportar por defecto una vez
// Cuando es una constante o variable, y si se desea exportar por defecto, es necesario colocar export default después de declarar la constante o variable

// let user = "raz";
// export default user;

const hello = () =>{
    console.log("Hola");
}

export default function saludar() {
    console.log("Hola módulos");
}

export class Saludos {
    constructor() {
        console.log("Hola Clases");
    }
}