import {burger_menu as bm} from './burger_menu.js';
import alarma from './alarma.js';
import {shortcuts,moverPelota} from './teclado.js';
import countDown from './cuentaRegresiva.js';
import scroll from './scroll.js';
import modoOscuro from './darkMode.js';
import responsiveMedia from './objeto_responsive.js';
import responsiveTester from './responsive_tester.js';

const $btn_menu = document.querySelector('.burger-menu')
const $menu = document.querySelector('.menu');
const $reloj = document.querySelector('.reloj');
const $sonido = document.querySelector('.alarma');
 
document.addEventListener('DOMContentLoaded',(evt)=>{
    bm.menu($menu,$btn_menu,'.menu a');
    alarma($reloj, $sonido);
    countDown('.countdown', 'Nov 15, 2022 00:00:00', 'Felicidades');
    scroll('.btn-scroll-top');
    responsiveMedia('youtube','(min-width: 1024px)',`<a href="https://www.youtube.com/watch?v=kKzYKb-KTcI" target="_blank" >Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/kKzYKb-KTcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia('map','(min-width: 1024px)',`<a href="https://goo.gl/maps/dGSyrxph2EDyUA9CA" target="_blank" >Ver mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.330786056553!2d-99.16869369204348!3d19.42702312622348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1654024524216!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester('formularioTester');
});
/* No es posible invocar un evento de un mismo tipo detro de otro, por lo que es necesario mover la invocación de la función fuera del evento */
modoOscuro('.btn-dark-mode', 'dark-mode');

document.addEventListener('keydown', (evt)=>{
    shortcuts(evt);
    moverPelota(evt, '.circulo', '.panel-teclado');
})