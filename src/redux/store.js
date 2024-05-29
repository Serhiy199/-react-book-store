import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { filterReducer } from './filterSlice';
import { orderedBooksReducer } from './orderedBooksSlice';
import { amountBasketReducer } from './amountBasketSlice';

const rootReducer = combineReducers({
    filter: filterReducer,
    ordered: orderedBooksReducer,
    amount: amountBasketReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
