export default function narrar(texto) {

    const $selection = document.querySelector('.voces');
    const $texto = document.querySelector(texto);
    let voces = [];
    let utterance = new SpeechSynthesisUtterance();
    speechSynthesis.addEventListener('voiceschanged', (evt)=>{
        // console.log(speechSynthesis.getVoices());
        voces = speechSynthesis.getVoices();

        for (let i = 0; i < voces.length; i++) {
            const $option = document.createElement('option');
            $option.setAttribute('lang', `${voces[i].lang}`);
            $option.setAttribute('value', `${voces[i].name}`);
            $option.textContent = `${voces[i].name}`;
            $selection.appendChild($option);
        }
    });

    document.addEventListener('click',(evt)=>{
        if (evt.target.matches('.btn_narrador')) {
            for (let i = 0; i < voces.length; i++) {
                if ($selection.value === voces[i].name) {
                    utterance.voice = voces[i];
                }   
            }
            utterance.text = `${$texto.value}`;
            speechSynthesis.speak(utterance);   
        }
    });
}