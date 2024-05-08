// utils/localStorage.js
const setLocalStorageItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting local storage item:', error);
    }
};

const getLocalStorageItem = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error getting local storage item:', error);
        return null;
    }
};

export { setLocalStorageItem, getLocalStorageItem };
