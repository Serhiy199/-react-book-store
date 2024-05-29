export const amount = value => {
    return { type: 'books/amount', payload: value };
};

export const amountBasketReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'books/amount':
            // console.log(state.sumValue);
            // console.log(action.payload);
            return { ...state, value: state.value + action.payload };
        default:
            return state;
    }
};

// export const selectAmountValue = state => state.amount.value;
