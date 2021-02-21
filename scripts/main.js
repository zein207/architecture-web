const btnMenu = document.getElementById('btnMenu');
const navbarList = document.getElementById('navbarList');
const navbarTitle = document.getElementById('navbarTitle');
const btnIcon = document.getElementById('btnIcon');

btnMenu.addEventListener('click', () => {
    
    navbarList.classList.toggle('menu__transform');
    navbarTitle.classList.toggle('no-display');

    if (navbarList.className.includes('menu__transform')) {
        btnIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        btnIcon.classList.replace('fa-times', 'fa-bars');
    }

});

navbarList.addEventListener('click', () => {
    navbarList.classList.remove('menu__transform');
    navbarTitle.classList.remove('no-display');
    btnIcon.classList.replace('fa-times', 'fa-bars');
})
