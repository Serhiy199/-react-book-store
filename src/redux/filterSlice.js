export const filter = value => {
    return { type: 'books/filter', payload: value };
};

export const filterReducer = (state = { value: '' }, action) => {
    switch (action.type) {
        case 'books/filter':
            return { ...state, value: action.payload };
        default:
            return state;
    }
};

export const selectFilter = state => state.filter.value;
