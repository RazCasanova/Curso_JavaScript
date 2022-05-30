export default function modoOscuro(btn_dark_mode, classDark) {
    const $btn_dark_mode = document.querySelector(btn_dark_mode),
    $selectores = document.querySelectorAll('[data-dark]');
    let sol = "🌞",
        luna = "🌙";
    document.addEventListener('click', (evt) =>{
        if (evt.target.matches('.btn-dark-mode') || evt.target.matches('.btn-dark-mode *')) {
            if (!document.documentElement.classList.contains('dark-mode')) {
                $selectores.forEach(element => {
                    element.classList.add(classDark);
                });
                $btn_dark_mode.children[0].textContent = sol;
            }else{
                $btn_dark_mode.children[0].textContent = luna;
                $selectores.forEach(element => {
                    element.classList.remove(classDark);
                });
            }
        }
    });
}