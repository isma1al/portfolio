const emptyMenu = document.querySelector('.empty__menu');
const burgerMenu = document.querySelector('.burger__menu');
const burgerBtn = document.querySelector('.burger-menu__btn');
const title = document.querySelector('.header__title');

burgerBtn.addEventListener('click', function(){
    emptyMenu.classList.toggle('empty__menu--active');
    burgerMenu.classList.toggle('burger__menu--active')
})

const date = new Date();
const hours = date.getHours();

if(hours >= 6 && hours < 12){
    title.innerHTML = 'Good morning';
} else if(hours >= 12 && hours < 18){
    title.innerHTML = 'Good afternoon';
} else if(hours >= 18 && hours < 24) {
    title.innerHTML = 'Good evening';
} else {
    title.innerHTML = 'Good night';
}
