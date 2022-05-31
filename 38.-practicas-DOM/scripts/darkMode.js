export default function modoOscuro(btn_dark_mode, classDark) {
    const $btn_dark_mode = document.querySelector(btn_dark_mode),
    $selectores = document.querySelectorAll('[data-dark]');
    let sol = "🌞",
        luna = "🌙";


    const lightMode = () =>{
        $selectores.forEach(element => {
            element.classList.remove(classDark);
        });
        $btn_dark_mode.children[0].textContent = luna;
        localStorage.setItem('theme','light');
    };

    const darkMode = () =>{
        $selectores.forEach(element => {
            element.classList.add(classDark);
        });
        $btn_dark_mode.children[0].textContent = sol;
        localStorage.setItem('theme','dark');
    };
    document.addEventListener('click', (evt) =>{
        if (evt.target.matches('.btn-dark-mode') || evt.target.matches('.btn-dark-mode *')) {
            if ($btn_dark_mode.children[0].textContent === luna) {
                darkMode();
            }else{
                lightMode();
            }
        }
    });
/* No es posible invocar un evento de un mismo tipo detro de otro, por lo que es necesario mover la invocación de la función fuera del evento */
    document.addEventListener('DOMContentLoaded', (evt)=>{
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme','light');
        }
        if (localStorage.getItem('theme') === 'light') {
            lightMode();
        }
        if (localStorage.getItem('theme') === 'dark') {
            darkMode();
        }
    });
}