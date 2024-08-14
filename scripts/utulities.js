import {data} from "./card.js";
import {modal, select, cardList, showBtn} from "./variables.js";


export const statusMessage = (message) => {
    const body = document.querySelector('main');

    const bodyMessage = document.createElement('div');
    bodyMessage.classList.add('bodyMessage');

    const textMessage = document.createElement('p');
    textMessage.classList.add('textMessage');
    textMessage.textContent = message;

    bodyMessage.append(textMessage);
    body.append(bodyMessage);

    setTimeout(() => {
        bodyMessage.remove();
    }, 2500);
};


export const openModalCard = () => {
    const openBtn = document.querySelector('.best__btn-add');

    openBtn.addEventListener('click', () => {
        modal.style.inset = '0';
    });
};


export const closeModal = (modals) => {
    modals.addEventListener('click', ({target}) => {
        if (target === modals || target.closest('.close__btn') || target.closest('.add__btn')) {
            modals.style.inset = 'auto';
        }
    });
};


export const handleScroll = () => {
    const section = document.querySelector('.best');

   select.addEventListener('change', () => {
        section.scrollIntoView({ block: "start", behavior: "smooth" });
    });
};


export const showProducts = () => {
    const items = Array.from(cardList.children);
    const productsLength = data.length;
    let goods = 4;

    showBtn.addEventListener('click', () => {
        goods += 4;
        const goodsActive = items.slice(0, goods);

        (productsLength === goodsActive.length) ? showBtn.style.display = 'none' :  showBtn.style.display = 'block';

        goodsActive.forEach(item => {
            item.classList.add('active');
        });
    });
};


export const resizeSelect = (target) => {
    const items = document.querySelectorAll('.categories__item');

    items.forEach(item => {
        (target.closest('.categories__item') === item || item.lastElementChild.lastElementChild.textContent === select.value ) ? item.classList.add('item-active') : item.classList.remove('item-active');
    });

    switch (select.value) {
        case select.value = 'Electronics':
            select.style.width = '100px';
            return;
        case select.value = 'Jewelery':
            select.style.width = '80px';
            return;
        case select.value = 'Men\'s clothing':
            select.style.width = '125px';
            return;
        case select.value = 'Women\'s clothing':
            select.style.width = '140px';
            return;
    }
};









