export const API_URL = 'https://fakestoreapi.com/products';
console.log(API_URL)

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

        return await response.json();
    } catch (error) {
        console.error(`${error}`);
    }
};

export const fetchDataFilter = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
        if (!response.ok) {
            throw new Error(response.status);
        }

        return await response.json();
    } catch (error) {
        console.error(`${error}`);
    }
};



