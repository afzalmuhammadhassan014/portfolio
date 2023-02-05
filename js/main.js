const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
let showmenu = false;
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

menuBtn.addEventListener('click',() => {
    if(!showmenu){
        hamburger.classList.add('open');
        showmenu = true;
        nav.classList.add('open');
        menuNav.classList.add('open')
        navItems.forEach(item => item.classList.add('open'));
    }
    else{
        hamburger.classList.remove('open');
        menuNav.classList.remove('open')
        nav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showmenu = false;
    }
});
