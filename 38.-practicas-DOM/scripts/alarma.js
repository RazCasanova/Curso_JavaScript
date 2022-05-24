export default function alarma($reloj, $sonido){
    const $btn_iniciar_reloj = document.querySelector('.iniciar-reloj'),
            $btn_detener_reloj = document.querySelector('.detener-reloj'),
            $btn_iniciar_alarma = document.querySelector('.iniciar-alarma'), 
            $btn_detener_alarma = document.querySelector('.detener-alarma'); 
    let tiempo;
    document.addEventListener('click',(evt)=>{
        if (evt.target.classList === $btn_iniciar_reloj.classList) {
            tiempo = setInterval(() => {
                $reloj.textContent = `${new Date().toLocaleTimeString()}`;
            }, 1000);
            $btn_iniciar_reloj.disabled = true;
        }
        if (evt.target.classList === $btn_detener_reloj.classList) {
            clearInterval(tiempo);
            $reloj.textContent = ``;
            $btn_iniciar_reloj.disabled = false;
        }

        if (evt.target.classList === $btn_iniciar_alarma.classList) {
            $sonido.volume='0.1'
            $sonido.play();
            $btn_iniciar_alarma.disabled = true;
        }

        if (evt.target.classList === $btn_detener_alarma.classList) {
            $sonido.pause();
            $btn_iniciar_alarma.disabled = false;
        }
    });
}

