import {burger_menu as bm} from './burger_menu.js';
import alarma from './alarma.js';
import {shortcuts,moverPelota} from './teclado.js';

const $btn_menu = document.querySelector('.burger-menu')
const $menu = document.querySelector('.menu');
const $reloj = document.querySelector('.reloj');
const $sonido = document.querySelector('.alarma');

const $circulo = document.querySelector('.circulo');

document.addEventListener('DOMContentLoaded',(evt)=>{
    bm.menu($menu,$btn_menu,'.menu a');
    alarma($reloj, $sonido);
});

document.addEventListener('keydown', (evt)=>{
    shortcuts(evt);
    moverPelota(evt, '.circulo', '.panel-teclado');
})