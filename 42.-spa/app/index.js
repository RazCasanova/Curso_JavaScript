import {App} from './App.js';
import wp_api from './helpers/wp_api.js';

document.addEventListener('DOMContentLoaded',(evt)=>{ App(); });
window.addEventListener('hashchange',(evt)=>{ 
    wp_api.page = 1;
    App(); 

});