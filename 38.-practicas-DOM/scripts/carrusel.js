export default function slider() {
    const $btn_next = document.querySelector('.slider-btns .next'), 
        $btn_prev = document.querySelector('.slider-btns .prev'), 
        $slides = document.querySelectorAll('.slider-slide');

    let i = 0;
    document.addEventListener('click',(evt)=>{
        if (evt.target === $btn_prev) {
            evt.preventDefault();
            $slides[i].classList.remove('active');
            i--;

            if (i < 0) {
                i = $slides.length-1;
            }

            $slides[i].classList.add('active');
        }

        if (evt.target === $btn_next) {
            evt.preventDefault();
            $slides[i].classList.remove('active');
            i++;

            if (i >= $slides.length) {
                i = 0;
            }

            $slides[i].classList.add('active');
        }
    });
}