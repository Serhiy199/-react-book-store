import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { filterReducer } from './filterSlice';
import { saleBooksReducer } from './saleBooksSlice';

const rootReducer = combineReducers({
    filter: filterReducer,
    sale: saleBooksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
