import {burger_menu as bm} from './burger_menu.js';
import alarma from './alarma.js';
import {shortcuts,moverPelota} from './teclado.js';
import countDown from './cuentaRegresiva.js';

const $btn_menu = document.querySelector('.burger-menu')
const $menu = document.querySelector('.menu');
const $reloj = document.querySelector('.reloj');
const $sonido = document.querySelector('.alarma');

const $circulo = document.querySelector('.circulo');

document.addEventListener('DOMContentLoaded',(evt)=>{
    bm.menu($menu,$btn_menu,'.menu a');
    alarma($reloj, $sonido);
    countDown('.countdown', 'Nov 15, 2022 00:00:00', 'Felicidades');
});

document.addEventListener('keydown', (evt)=>{
    shortcuts(evt);
    moverPelota(evt, '.circulo', '.panel-teclado');
})