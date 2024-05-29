export const addBook = book => {
    // console.log(book);
    return { type: 'book/buy', payload: book };
};

export const orderedBooksReducer = (state = { buyBook: [] }, action) => {
    switch (action.type) {
        case 'book/buy':
            // console.log(action.payload);
            // console.log(state.buyBook);
            return { ...state, buyBook: [state.buyBook, action.payload] };
        default:
            // console.log(state.buyBook);
            return state;
    }
};

export const selectAddBook = state => {
    state.ordered.buyBook;
};
