import bgImage from './Home-page-background.jpg';
import fsbIcon from './Facebook_Logo.png';
import instgIcon from './Instagram-icon.jpg';
import './index.css';

function initial_page_load(){
    //creat the container div
    const container = document.createElement('div');
    container.classList.add('container');
    // append bgImg inside the container
    const body = document.querySelector('body')
    const bgImg = new Image();
    bgImg.src = bgImage;
    bgImg.classList.add('bg-body');
    body.appendChild(bgImg);
    // creat page header 
    const pgheader = document.createElement('div');
    pgheader.classList.add('home-header');
    const pgheaderTxt = document.createElement('h2');
    pgheaderTxt.innerHTML = "Welcome to Freshwater's Restauran"
    pgheader.appendChild(pgheaderTxt);
    container.appendChild(pgheader);

    //creat header text:
    const header = document.createElement('div');
    header.classList.add('header');
    const headerTxt = text();
    headerTxt.innerHTML = "Fresh water's atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    header.appendChild(headerTxt);
    container.appendChild(header);
    // create p text tags
    const txtSection = document.createElement('section');
    txtSection.classList.add('schedule');

    ////// methode to creat p tag:
    function text() {
        return document.createElement('p');
     }
    const text1 = text();
    text1.innerHTML = 'We are open for Indoor Dining, Takeout & Delivery';
    txtSection.appendChild(text1);
    //---------
    const text2 = text();
    text2.innerHTML = 'CLOSED SUNDAYS';
    txtSection.appendChild(text2);
    //-------
    const text3 = text();
    text3.innerHTML = 'Monday - Thursday 12pm - 10pm'
    txtSection.appendChild(text3);
    //-------
    const text4 = text();
    text4.innerHTML = 'Friday & Saturday 12pm - 11pm'
    txtSection.appendChild(text4);

    // append txtsection in the container div
    container.appendChild(txtSection);
   
    // creat the button
    const btn = document.createElement('button');
    btn.innerHTML = 'Welcom to fresh water'
    btn.classList.add('button');
    container.appendChild(btn);

    // add facebook Icon link

    const footer = document.createElement('div');
    footer.classList.add('icons');
    const facebookLink = document.createElement('a');
    const fbIcon = new Image();
    fbIcon.src = fsbIcon;
    fbIcon.classList.add('ic2');
    facebookLink.appendChild(fbIcon);

    // add instagram Icon link
    const instagramLink = document.createElement('a');
    const instIcon = new Image();
    instIcon.src = instgIcon;
    instIcon.classList.add('ic1');
    instagramLink.appendChild(instIcon);
    // append two a tag in footer

    footer.appendChild(facebookLink);
    footer.appendChild(instagramLink);

    container.appendChild(footer);

    // append container in the body

  // const body = document.createElement('body');

   document.body.appendChild(container);
}

function home_tab() {
    const menu = document.querySelector('.menu');
    const home = document.querySelector('.container');
    home.classList.remove('hide');
    menu.classList.add('hide');

}

export {
    initial_page_load, 
    home_tab
}