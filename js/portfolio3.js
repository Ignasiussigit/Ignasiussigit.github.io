// FOR MENUBAR

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header2');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}