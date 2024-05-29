export const sale = book => {
    return { type: 'books/ordered', payload: book };
};

export const addQuantity = book => {
    return { type: 'books/addQuantity', payload: book };
};

export const subtractQuantity = book => {
    return { type: 'books/subtractQuantity', payload: book };
};

export const saleBooksReducer = (state = { buyBook: [] }, action) => {
    const savedBooks = localStorage.getItem('ordered-books');
    const getLocalStor = savedBooks !== null ? JSON.parse(savedBooks) : [];

    switch (action.type) {
        case 'books/ordered': {
            const findById = getLocalStor.find(book => book.id === action.payload.id);

            if (findById) {
                const setLocalStor = [...getLocalStor];
                localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));
                return { ...state, buyBook: [...setLocalStor] };
            }

            const setLocalStor = [...getLocalStor, action.payload];
            localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));

            return { ...state, buyBook: [...setLocalStor] };
        }
        case 'books/addQuantity': {
            const findById = getLocalStor.find(book => book.id === action.payload.id);

            findById.quantity = findById.quantity + 1;
            findById.totalScore = findById.price * findById.quantity;

            const setLocalStor = [...getLocalStor];

            localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));

            return { ...state, buyBook: [...setLocalStor] };
        }
        case 'books/subtractQuantity': {
            const findById = getLocalStor.find(book => book.id === action.payload.id);

            findById.totalScore = findById.totalScore - findById.price;

            findById.quantity = findById.quantity - 1;

            if (findById.quantity === 0) {
                const subtractQuantity = getLocalStor.filter(book => book.id !== action.payload.id);

                const setLocalStor = [...subtractQuantity];
                localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));
                return { ...state, buyBook: [...setLocalStor] };
            }

            const setLocalStor = [...getLocalStor];

            localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));

            return { ...state, buyBook: [...setLocalStor] };
        }

        default:
            return (state = { buyBook: getLocalStor });
    }
};

export const selectAddBook = state => state.sale.buyBook;
