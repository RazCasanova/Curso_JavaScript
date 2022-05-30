export default function scroll(btn_scroll) {
    const $btn_scroll = document.querySelector(btn_scroll);
    document.addEventListener('scroll', (evt) =>{
        if (evt.path[1].scrollY >= 250) {
            $btn_scroll.style.opacity = 1;
            $btn_scroll.style.pointerEvents = 'auto';
        }else{
            $btn_scroll.style.opacity = 0;
            $btn_scroll.style.pointerEvents = 'none';
        }
    });

    document.addEventListener('click', (evt)=>{
        if (evt.target.matches('.btn-scroll-top') || evt.target.matches('.btn-scroll-top *')) {
            window.scroll({
                top : 0,
                behavior: 'smooth'
            })
        }
    });
}