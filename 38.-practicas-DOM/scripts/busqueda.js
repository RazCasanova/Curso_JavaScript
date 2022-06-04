export default function filtroBusqueda(contenedor, filtro) {
    document.addEventListener('keyup',(evt)=>{
        if (evt.target.matches(filtro)) {
            document.querySelectorAll(contenedor).forEach(element =>{
                element.textContent.toLowerCase().includes(evt.target.value) 
                ? element.classList.remove('filter')
                : element.classList.add('filter');
            })
        }
    });
}
