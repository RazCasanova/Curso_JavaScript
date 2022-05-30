import {burger_menu as bm} from './burger_menu.js';
import alarma from './alarma.js';
import {shortcuts,moverPelota} from './teclado.js';
import countDown from './cuentaRegresiva.js';
import scroll from './scroll.js';
import modoOscuro from './darkMode.js';

const $btn_menu = document.querySelector('.burger-menu')
const $menu = document.querySelector('.menu');
const $reloj = document.querySelector('.reloj');
const $sonido = document.querySelector('.alarma');
 
document.addEventListener('DOMContentLoaded',(evt)=>{
    bm.menu($menu,$btn_menu,'.menu a');
    alarma($reloj, $sonido);
    countDown('.countdown', 'Nov 15, 2022 00:00:00', 'Felicidades');
    scroll('.btn-scroll-top');
    modoOscuro('.btn-dark-mode', 'dark-mode');
});

document.addEventListener('keydown', (evt)=>{
    shortcuts(evt);
    moverPelota(evt, '.circulo', '.panel-teclado');
})