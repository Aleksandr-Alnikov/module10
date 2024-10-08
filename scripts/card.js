import {API_URL, fetchData, fetchDataFilter, fetchDataRemove, fetchEditGoods, fetchSubmitGoods} from "./api.js";
import {openModalCard, closeModal, handleScroll, showProducts, resizeSelect} from "./utulities.js";
import {modal, modalEdit, cardList, filterBtn, showBtn, formEdit, formAdd, select, title} from "./variables.js";


export let data = await fetchData(API_URL);


const creatCardGoods = ({image, title, description, price, id}) => {
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
            <div class="best__control">
                <p class="best__price">$${discount.toFixed(2)}<s>$${price}</s></p>
                <button class="edit__btn" data-id="${id}" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="mdi-square-edit-outline" width="36" height="36"
                     viewBox="0 0 24 24"><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 
                     21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
                     </svg>
                </button>
                <button id="${id}" type="button" class="remove__btn">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="10px" y="10px"
                    \t viewBox="0 0 32.001 32" style="enable-background:new 0 0 32.001 32;" xml:space="preserve">
                    \t<path style="fill:#95CC29;" d="M17.757,19.757c1.168-1.167,2.697-1.753,4.243-1.754c3.327,0,5.996,2.684,5.996,5.996
                    \t\tc0,0.28-0.019,0.565-0.059,0.855l1.982,0.271c0.052-0.379,0.077-0.755,0.077-1.126c0.001-2.203-0.892-4.209-2.336-5.653
                    \t\tc-1.442-1.446-3.449-2.344-5.66-2.343c-2.05-0.001-4.103,0.785-5.657,2.34L17.757,19.757L17.757,19.757z"/>
                    \t<path style="fill:#95CC29;" d="M26.242,28.243c-1.168,1.167-2.697,1.753-4.243,1.754c-3.327,0-5.996-2.684-5.997-5.996
                    \t\tc0-0.28,0.019-0.565,0.059-0.855l-1.982-0.271c-0.052,0.379-0.077,0.755-0.077,1.126c-0.001,2.203,0.892,4.209,2.336,5.653
                    \t\tc1.442,1.446,3.449,2.344,5.66,2.343c2.05,0.001,4.103-0.785,5.657-2.34L26.242,28.243L26.242,28.243z"/>
                    \t<path style="fill:#95CC29;" d="M26.292,23.707l2,2C28.478,25.893,28.736,26,28.999,26c0.263,0,0.521-0.107,0.707-0.293l2-2
                    \t\tc0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-1.293,1.293l-1.293-1.293c-0.391-0.391-1.024-0.391-1.414,0
                    \t\tC25.902,22.683,25.902,23.317,26.292,23.707L26.292,23.707z"/>
                    \t<path style="fill:#95CC29;" d="M13.706,25.707l1.293-1.293l1.293,1.293c0.391,0.391,1.024,0.391,1.414,0
                    \t\tc0.391-0.391,0.391-1.024,0-1.414l-2-2c-0.391-0.391-1.024-0.391-1.414,0l-2,2c-0.391,0.391-0.391,1.024,0,1.414
                    \t\tC12.683,26.098,13.316,26.098,13.706,25.707L13.706,25.707z"/>
                    \t<polygon style="fill:#95CC29;" points="17.757,19.757 17.757,19.757 17.757,19.757 \t"/>
                    \t<path style="fill:#666666;" d="M22.999,4H18V3c0-1.657-1.344-2.999-3.001-3h-4C9.342,0.001,8,1.343,8,3v1H2.999
                    \t\tC1.342,4.001,0,5.343,0,7c0,1.305,0,2.403,2,2.816V29c0,1.657,1.342,2.999,2.999,3H14v-2H4.999C4.447,29.999,4,29.552,4,29V10h18v4
                    \t\th2V9.816C26,9.403,25.999,8.305,26,7C25.999,5.343,24.656,4.001,22.999,4z M10,3c0-0.552,0.447-0.999,0.999-1h4
                    \t\tC15.551,2.001,16,2.448,16,3v1h-6V3z M22.999,8h-20C2.447,7.999,2,7.552,1.999,7c0.001-0.552,0.448-0.999,1-1h5h10h5
                    \t\tc0.552,0.001,0.999,0.448,1,1C23.998,7.552,23.551,7.999,22.999,8z"/>
                    \t<rect x="12" y="14" style="fill:#666666;" width="2" height="6"/>
                    \t<rect x="6" y="14" style="fill:#666666;" width="2" height="12"/>
                    \t<rect x="0.001" style="fill:none;" width="32" height="32"/>
                    </svg>
                </button>
            </div>
            <button type="button" class="best__btn">Add to Cart</button>
        </article>
    `;

    return cardGoods;
};


export const renderCard = (data) => {
    data.forEach(itemGoods => {
        const product = creatCardGoods(itemGoods);
        cardList.append(product);
        showProducts();
    });
};


export const removeGoods =  async () => {
    const btn = document.querySelectorAll('.remove__btn');

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


export const editorGoods =  async () => {
    const editBtn = document.querySelectorAll('.edit__btn');

    editBtn.forEach(editBtn => {
        editBtn.addEventListener('click', ({target}) => {
            modalEdit.style.inset = '0';

            const dataAttributeBtn = +editBtn.getAttribute('data-id');

            data.forEach(i => {
                if (dataAttributeBtn === i.id) {
                    formEdit.category.value = i.category;
                    formEdit.name.value = i.title;
                    formEdit.price.value = i.price;
                    formEdit.description.value = i.description;
                }
            });

            formEdit.addEventListener('submit', (e) => {
                e.preventDefault();

                const newGoods = new FormData(formEdit);
                const newEditGoodsObject = Object.fromEntries(newGoods);

                data.forEach(itemId => {
                    if (dataAttributeBtn === itemId.id) {
                        fetchEditGoods(newEditGoodsObject, itemId.id);
                    }
                    formEdit.reset();
                });
            });
        });
    });
    closeModal(modalEdit);
};


export const addGoods = async () => {
    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();
        const newGoods = new FormData(formAdd);
        const newGoodsObject = Object.fromEntries(newGoods);

        fetchSubmitGoods(newGoodsObject);
        formAdd.reset();
    });
    closeModal(modal);
};


export const filterGoods = (length) => {
    filterBtn.forEach(categoryBtn  => {
        categoryBtn.addEventListener ('click', async ({target}) => {

            select.value = target.textContent

            cardList.innerHTML ='';
            title.textContent = target.textContent;

            const category = target.textContent.toLowerCase();

            const newData = await fetchDataFilter(category);

            data = newData;
                data.forEach(item => {
                    const newList = creatCardGoods(item);

                    cardList.append(newList);

                    (newData.length === length) ? showBtn.style.display = 'none' : showBtn.style.display = 'block';


                    showProducts();
                });
            resizeSelect(target);
            await removeGoods();
            openModalCard();
            await editorGoods();
        });
    });
};


export const filterSelectGoods = (length) => {
    if (select.select !== select.value) {
        handleScroll();
    }

    select.addEventListener ('change', async ({target}) => {
        cardList.innerHTML ='';
        title.textContent = select.value;

        const category = select.value.toLowerCase();

        let newData =  await fetchDataFilter(category);

        if (select.value === 'Shop') {
            newData = await fetchData(API_URL);
        }

        data = newData;
        data.forEach(item => {
            const newList = creatCardGoods(item);

            cardList.append(newList);

            (newData.length === length) ? showBtn.style.display = 'none' : showBtn.style.display = 'block';

            showProducts();
            resizeSelect(target);
        });
        await removeGoods();
        openModalCard();
        await editorGoods();
    });
};







