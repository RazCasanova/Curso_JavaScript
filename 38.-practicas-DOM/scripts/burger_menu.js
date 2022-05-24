function menu($menu,$btn_menu,$menuLink) {
    const $icon = $btn_menu.children;

    document.addEventListener('click',(evt)=>{
        if (evt.target.matches('.burger-menu') || evt.target.matches('.burger-menu *')) {
            $menu.classList.toggle("translate-n-100");
            $icon[0].style.width = "0%";
            $icon[1].style.transform = "rotateZ(140deg)";
            $icon[2].style.transform = "translate(0, -8px) rotateZ(-140deg)";
        }
        if ($menu.classList.contains("translate-n-100")) {   
            $icon[0].style.width = "50%";
            $icon[1].style.transform = "rotateZ(0deg)";
            $icon[2].style.transform = "translate(0, 0) rotateZ(0deg)";            
        }

        if (evt.target.matches($menuLink)) {
            $menu.classList.toggle("translate-n-100");
            $icon[0].style.width = "50%";
            $icon[1].style.transform = "rotateZ(0deg)";
            $icon[2].style.transform = "translate(0, 0) rotateZ(0deg)";
        }
    });
}

export const burger_menu = {
    menu
}