export default function responsiveTester(formulario) {
    const $formulario = document.getElementById(formulario);
    let url, ancho, alto, ventana;
    document.addEventListener('submit', (evt)=>{
        if (evt.target === $formulario) {
            evt.preventDefault();
            url = $formulario.url.value;
            ancho = $formulario.ancho.value;
            alto = $formulario.alto.value;
            
            ventana = open(url, 'Ventana de prueba',`width = ${ancho}, height=${alto}`);
        }
    });
    document.addEventListener('reset',(evt)=>{
        if (ventana) {
            ventana.close();
        }
    })
}