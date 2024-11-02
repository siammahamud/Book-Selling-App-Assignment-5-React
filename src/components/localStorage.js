export const getBookFromLocalStorage = () => {
     const bookinfo = localStorage.getItem('books');
     return JSON.parse(bookinfo);
}

export const getThemeFromLocalStorage = () => {
     const theme = localStorage.getItem('theme');
     return theme || "dark"
}