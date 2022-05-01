if (window.innerWidth <= 991) {
    let menuDefault = document.querySelector('.section-menu-default');
    let menuMobile = document.querySelector('.section-menu-mobile');

    menuDefault.classList.remove('d-flex')
    menuDefault.classList.add('d-none')

    menuMobile.classList.remove('d-none')
    menuMobile.classList.add('d-flex')
}