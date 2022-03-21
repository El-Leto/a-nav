// const orders = document.querySelectorAll('.order');
// const modalArea = document.querySelector('.modal');
// const modalClose = document.querySelector('.modal__close');
// const page = document.querySelector('.page');
// const toggle = document.querySelector('.button__toggle')
// const nav = document.querySelector('.nav__list');
// const main = document.querySelector('.main__page');
// const phonesList = document.querySelector('.header__phones');
// const orderButton = document.querySelector('.header__button');

// //modal
// for (let i = 0; i < orders.length; i++) {
//   orders[i].addEventListener ('click', function(evt) {
//     evt.preventDefault();
//     modalArea.classList.add('modal--open');
//     page.classList.add('page-modal');
//   });
// }

// //closeModal
// modalArea.onmousedown = function (evt) {
//   let target = evt.target;
//   let modalWrapper = modalArea.getElementsByClassName('modal__wrapper')[0];
//   if (target.closest('.' + modalWrapper.className) === null) {
//     this.classList.remove('modal--open');
//     page.classList.remove('page-modal');
//   }
// };

// document.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Escape') {
//     modalArea.classList.remove('modal--open');
//     page.classList.remove('page-modal');
//   }
// });

// modalClose.addEventListener('click', (evt) => {
//   modalArea.classList.remove('modal--open');
//   page.classList.remove('page-modal');
// });

// //menu
// toggle.addEventListener('click', function() {
//   if (toggle.classList.contains('button__toggle--closed')) {
//     toggle.classList.remove('button__toggle--closed');
//     toggle.classList.add('button__toggle--opened');
//     nav.classList.remove('nav__list--closed');
//     nav.classList.add('nav__list--opened');
//     main.classList.add('main-nav');
//     phonesList.classList.remove('header__phones--closed');
//     phonesList.classList.add('header__phones--opened');
//     orderButton.classList.remove('header__button--closed');
//     orderButton.classList.add('header__button--opened');
//     page.style.overflowY = 'hidden';
//   } else {
//     toggle.classList.add('button__toggle--closed');
//     toggle.classList.remove('button__toggle--opened');
//     nav.classList.add('nav__list--closed');
//     nav.classList.remove('nav__list--opened');
//     main.classList.remove('main-nav');
//     phonesList.classList.add('header__phones--closed');
//     phonesList.classList.remove('header__phones--opened');
//     orderButton.classList.add('header__button--closed');
//     orderButton.classList.remove('header__button--opened');
//     page.style.overflowY = 'scroll';
//   }
// });

const technologys = Array.from(document.querySelectorAll('.technology__link'));
const descriptions = Array.from(document.querySelectorAll('.description'));

for (let i = 0; i < technologys.length; i++) {
  technologys[i].addEventListener ('click', function(evt) {
    technologys.map((item) => technologys[i].id === item.id ? item.classList.add("technology__link--active") : item.classList.remove("technology__link--active"));
    descriptions.map((item) => technologys[i].id === item.id ? item.classList.remove("description_show") : item.classList.add("description_show"));
    
  });
}



