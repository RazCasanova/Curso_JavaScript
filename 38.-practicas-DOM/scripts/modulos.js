import {burger_menu as bm} from './burger_menu.js';

const $btn_menu = document.querySelector('.burger-menu');
const $menu = document.querySelector('.menu');

// console.log($btn_menu.querySelectorAll('span')[0]);

$btn_menu.addEventListener('click',(evt)=>{
    bm.menu($menu, $btn_menu.querySelectorAll('span'));
});
