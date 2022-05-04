function menu($menu, $icon) {
    $menu.classList.toggle("translate-n-100");
    if (!$menu.classList.contains("translate-n-100")) {
        $icon[0].style.width = "0%";
        $icon[1].style.transform = "rotateZ(140deg)";
        $icon[2].style.transform = "translate(0, -8px) rotateZ(-140deg)";
    }else{
        $icon[0].style.width = "50%";
        $icon[1].style.transform = "rotateZ(0deg)";
        $icon[2].style.transform = "translate(0, 0) rotateZ(0deg)";

    }   
}

export const burger_menu = {
    menu
}