import {statusMessage} from "./utulities.js";


export const API_URL = 'https://fakestoreapi.com/products';

export const fetchData = async (url) => {
    try {
        const response = await fetch(`${url}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    } catch (error) {
        console.error(`${error}`);
    }
};


export const fetchDataRemove = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(response.status);
        }
        statusMessage('Товар успешно удален.');

        return await response.json();
    } catch (error) {
        console.error(`${error}`);
        statusMessage('Что-то пошло не так.');
    }
};


export const fetchDataFilter = async (filter) => fetchData(`https://fakestoreapi.com/products/category/${filter}`);

export const fetchSubmitGoods = async (newGoodsObject) => {
    try {
        const response = await fetch(`${API_URL}/`, {
            method: 'POST',
            body: JSON.stringify(newGoodsObject),
        });
        if (!response.ok) {
            throw new Error(response.status);
        }
        statusMessage('Товар успешно добавлен.');

        return await response.json();
    } catch (error) {
        console.error(`${error}`);
        statusMessage('Что-то пошло не так.');
    }
};


export const fetchEditGoods = async (editGoodsObject, id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(editGoodsObject),
        });
        if (!response.ok) {
            throw new Error(response.status);
        }
        statusMessage('Товар успешно отредактирован.');

        return await response.json();
    } catch (error) {
        console.error(`${error}`);
        statusMessage('Что-то пошло не так.');
    }
};






