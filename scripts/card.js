import {API_URL, fetchData, fetchDataFilter, fetchDataRemove} from "./api.js";


export const data = await fetchData(API_URL);
const cardList = document.querySelector('.best__list');
const filterBtn = document.querySelectorAll('.categories__link');

const data2 = await fetchDataFilter()
console.log(data2)



const creatCardGoods = ({image, title,description, price, id}) => {
    const subTitle = title.slice(0, 25) + '...';
    const subDescription = description.slice(0, 30) + '...';
    const discount = price - (price * (33 / 100));


    const cardGoods = document.createElement('li');
    cardGoods.classList.add('best__item');

    cardGoods.innerHTML = `
        <article>
            <img title="${title}" src="${image}" alt="Товар" class="best__image">
            <h3 title="${title}" class="best__title-goods" >${subTitle}</h3>
            <p title="${description}" class="best__text">${subDescription}</p>
            <p class="best__price">$${discount.toFixed(2)}<s>$${price}</s></p>
            <button id="${id}" type="button" class="best__btn">Add to Cart</button>
        </article>
    `;

    return cardGoods;
};


export const renderCard = async () => {
    // const cardList = document.querySelector('.best__list');

    data.forEach(itemGoods => {
        const product = creatCardGoods(itemGoods);
        cardList.append(product);
    });
};


export const removeCard =  async () => {
    const btn = document.querySelectorAll('.best__btn');

    btn.forEach((btnId,index) => {
        btnId.addEventListener('click', () => {

            data.forEach(itemId => {
                if (itemId.id === +btnId.id) {
                    fetchDataRemove(itemId.id);
                }
            });
        });
    });
};
