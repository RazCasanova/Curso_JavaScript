export function moverPelota($circulo) {
    let aux = 0;
    document.addEventListener('keydown',(evt)=>{
        if (evt.key == 'ArrowRight') {
            aux++;
            movimientoDerecha($circulo, aux);
        }
        if (evt.key == 'ArrowLeft') {
            aux--;
            movimientoIzquierda($circulo, aux);
        }
        if (evt.key == 'ArrowUp') {
            aux--;
            movimientoArriba($circulo, aux);
        }
        if (evt.key == 'ArrowDown') {
            aux++;
            movimientoAbajo($circulo, aux);
        }
    });  
}

const movimientoDerecha = ($circulo, aux) =>{
    $circulo.style.transform = `translateX(${aux}px)`;
}
const movimientoIzquierda = ($circulo, aux) =>{
    $circulo.style.transform = `translateX(${aux}px)`;
}
const movimientoArriba = ($circulo, aux) =>{
    $circulo.style.transform = `translateY(${aux}px)`;
}
const movimientoAbajo = ($circulo, aux) =>{
    $circulo.style.transform = `translateY(${aux}px)`;
}