export function shortcuts(evt) {
    // console.log(evt);
    // console.log(evt.key);
    // console.log(evt.keyCode);
    // console.log(evt.altKey);
    // console.log(evt.ctrlKey);

    if (evt.key === 'a' && evt.altKey) {
        alert("Se ha lanzado una alerta con el teclado");
    }
    if (evt.key === 'c' && evt.altKey) {
        confirm("Se ha lanzado una confirmación con el teclado");
    }
    if (evt.key === 'p' && evt.altKey) {
        prompt("Se ha lanzado un aviso con el teclado");
    }
}


let x = 0, 
    y = 0;

export function moverPelota(evt, pelota, panel) {
    const $pelota = document.querySelector(pelota),
        $panel = document.querySelector(panel);
    let limitePelota = $pelota.getBoundingClientRect(),
        limitePanel = $panel.getBoundingClientRect();
        switch (evt.keyCode) {
            case 37:
                // Izquierda
                evt.preventDefault();
                if (limitePelota.left > limitePanel.left) {
                    x--;
                }
                break;
            case 38:
                // Arriba 
                evt.preventDefault();
                if (limitePelota.top > limitePanel.top) {
                    y--;
                }
                break;
            case 39:
                // Derecha
                evt.preventDefault();
                if (limitePelota.right < limitePanel.right) {
                    x++;
                }
                break;
            case 40:
                // Abajo
                evt.preventDefault();
                if (limitePelota.bottom < limitePanel.bottom) {
                    y++;
                }
                break;
        
            default:
                break;
            }
        $pelota.style.transform = `translate(${x*10}px, ${y*10}px)`;
}