export default function scrollspy() {
    const $sections = document.querySelectorAll("section[data-scroll-spy]");
    const callback = (entries) =>{
        // console.log("Entries:" ,entries);
        entries.forEach(entry =>{
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting) {
                document.querySelector(`a[href="#${id}"]`).classList.add('active');
            }else{
                document.querySelector(`a[href="#${id}"]`).classList.remove('active');
            }
        })
    }
    const observer = new IntersectionObserver(callback,{
        // root, toma por defecto document
        // rootMargin : '-250px'
        //threshold : visibilidad entre el 50% y el 75%
        threshold : [0.5, 0.75]
    });

    $sections.forEach(element =>{
        observer.observe(element);
    });
}
