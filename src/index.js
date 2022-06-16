// import metode from initial-page-load.js
import {initial_page_load, home_tab } from './initial-page-load.js'

import { menu_tab } from './menu-module.js'

window.onload = initial_page_load();

const homebtn = document.querySelector('#homebtn')
const menubtn = document.querySelector('#menubtn')


homebtn.addEventListener('click', () =>{
    home_tab()
})

menubtn.addEventListener('click', () =>{
    menu_tab()
})