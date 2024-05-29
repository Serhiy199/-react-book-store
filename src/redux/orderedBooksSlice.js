export const ordered = book => {
    return { type: 'books/ordered', payload: book };
};

export const addQuantity = book => {
    return { type: 'books/addQuantity', payload: book };
};

export const subtractQuantity = book => {
    return { type: 'books/subtractQuantity', payload: book };
};

export const orderedBooksReducer = (state = { buyBook: [] }, action) => {
    const savedBooks = localStorage.getItem('ordered-books');
    const getLocalStor = savedBooks !== null ? JSON.parse(savedBooks) : [];

    switch (action.type) {
        case 'books/ordered': {
            // console.log(action.payload);
            const findById = getLocalStor.find(book => book.id === action.payload.id);
            // console.log(findById);
            if (findById) {
                // findById.quantity = findById.quantity + 1;
                // console.log(findById.quantity);
                const setLocalStor = [...getLocalStor];
                localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));
                return { ...state, buyBook: [...setLocalStor] };
            }
            const setLocalStor = [...getLocalStor, action.payload];
            localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));
            // getLocalStor.findIndex()

            return { ...state, buyBook: [...setLocalStor] };
        }
        case 'books/addQuantity': {
            const findById = getLocalStor.find(book => book.id === action.payload.id);

            findById.quantity = findById.quantity + 1;
            findById.totalScore = findById.price * findById.quantity;
            console.log(findById.totalScore);

            const setLocalStor = [...getLocalStor];

            localStorage.setItem('ordered-books', JSON.stringify(setLocalStor));

            return { ...state, buyBook: [...setLocalStor] };
        }
        case 'books/subtractQuantity': {
            const findById = getLocalStor.find(book => book.id === action.payload.id);

            findById.totalScore = findById.totalScore - findById.price;

            findById.quantity = findById.quantity - 1;

            console.log(findById.totalScore);
            if (findById.quantity === 0) {
                console.log('yes');

                const subtractQuantity = getLocalStor.filter(book => book.id !== action.payload.id);
                // console.log(a);
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

export const selectAddBook = state => state.ordered.buyBook;

// 1. При додаванні взяти ід товару який додається і по ід шукати товар у корзині, якщо тру то оновити обєкт в масив і інкрементувати поле яке буде показувати скальки товарів у корзині
// Якщо не знайдено потрібно додати новий обєкт в масив
