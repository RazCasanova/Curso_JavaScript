export default function countDown(panelcount, fechaLimite, mensaje) {
    const $panelcountdown = document.querySelector(panelcount);
    const dateLimit = new Date(fechaLimite).getTime();

    let intervaloTiempo = setInterval(() => {
        let now = new Date().getTime();
        let timeLimit = dateLimit - now;

        let dias = Math.floor((timeLimit) / (1000*60*60*24));

        let horas = ("0" + Math.floor(((timeLimit) % (1000*60*60*24)) / (1000*60*60))).slice(-2);
        
        let minutos = ("0" + Math.floor(((timeLimit) % (1000*60*60)) / (1000*60))).slice(-2);
        
        let segundos = ("0" + Math.floor(((timeLimit) % (1000*60)) / (1000))).slice(-2);

        $panelcountdown.innerHTML = `${dias} dias  ${horas} horas  ${minutos} minutos  ${segundos} segundos`;

        if (timeLimit < 0) {
            $panelcountdown.innerHTML = `<h3>${mensaje}</h3>`;
        }
    }, 1000);
}