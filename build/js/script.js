const navButton = document.querySelector('.header__button');
const navList = document.querySelector('.header__nav');
const itemDrop = document.querySelector('.header__item--drop');
const linkDrop = document.querySelector('.header__link--drop');
const listDrop = document.querySelector('.header__sub-list');

const toggleDrop = () => {
  linkDrop.classList.toggle('header__link--drop--opened');
  listDrop.classList.toggle('header__sub-list--opened');
}

const removeDrop = () => {
  linkDrop.classList.remove('header__link--drop--opened');
  listDrop.classList.remove('header__sub-list--opened');
}

const toggle = () => {
  navButton.classList.toggle('header__button--closed');
  navList.classList.toggle('header__nav--opened');
  itemDrop.addEventListener('click', function(evt) {
    evt.preventDefault();
    toggleDrop();
  });
  removeDrop();
}

const close = () => {
  navButton.classList.add('header__button--closed');
  if (navList.classList.contains('header__nav--opened')) {
    itemDrop.addEventListener('click', function(evt) {
      evt.preventDefault();
      toggleDrop();
    });
  }
  navList.classList.remove('header__nav--opened');
  removeDrop();
}

navList.addEventListener('click', function(evt) {
  evt.stopPropagation();
});

document.addEventListener('click', function(evt) {
  const target = evt.target;

  target === navButton ? toggle() : target !== navList ? close() : false;
});
