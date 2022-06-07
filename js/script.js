const emptyMenu = document.querySelector('.empty__menu');
const burgerMenu = document.querySelector('.burger__menu');
const burgerBtn = document.querySelector('.burger-menu__btn');

burgerBtn.addEventListener('click', function(){
    emptyMenu.classList.toggle('empty__menu--active');
    burgerMenu.classList.toggle('burger__menu--active')
})