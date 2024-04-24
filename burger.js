const BURGER_OPENED_CLASSNAME_2 = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME_2 = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed';

const bodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')

burgerBtnNode2.addEventListener('click', toggleBurger);

burgerNode2.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME_2);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME_2);
}

