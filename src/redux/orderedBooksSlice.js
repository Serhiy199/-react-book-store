export const ordered = book => {
    // console.log(book);
    return { type: 'books/ordered', payload: book };
};

export const orderedBooksReducer = (state = { buyBook: [] }, action) => {
    switch (action.type) {
        case 'books/ordered': {
            const savedBooks = localStorage.getItem('ordered-books');
            const getLocalStor = savedBooks !== null ? JSON.parse(savedBooks) : [];
            const setLocalStor = [...getLocalStor, action.payload];
            localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));

            return { ...state, buyBook: [...setLocalStor] };
        }
        default:
            return state;
    }
};

export const selectAddBook = state => state.ordered.buyBook;
