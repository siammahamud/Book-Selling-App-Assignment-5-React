export const getBookFromLocalStorage = () => {
     const bookinfo = localStorage.getItem('books');
     return JSON.parse(bookinfo);
}