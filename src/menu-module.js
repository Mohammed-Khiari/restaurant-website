function menu_tab() {
    
    const menu = document.querySelector('.menu');

    const home = document.querySelector('.container');
    menu.classList.remove('hide');
    home.classList.add('hide');
}

export {
    menu_tab 
}