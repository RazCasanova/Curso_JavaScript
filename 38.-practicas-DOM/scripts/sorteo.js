export default function sorteo(lista,btn_generar_sorteo) {
    const $lista = document.querySelector(lista);
    const arregloLista = [];
    let numeroGanador;
    for (const iterator of $lista.children) {
        arregloLista.push(iterator.textContent);
    }
    document.addEventListener('click',(evt)=>{
        if(evt.target.matches(btn_generar_sorteo)){
            let resultado = obtenerGanador(arregloLista);
            alert(resultado);
            console.log(resultado);
        }
    });

    const obtenerGanador = (arregloLista) =>{
        numeroGanador = Math.floor(Math.random() * arregloLista.length);
        return `El ganador del sorteo es: ${arregloLista[numeroGanador]}, con la posición: ${numeroGanador}`;
    }
}