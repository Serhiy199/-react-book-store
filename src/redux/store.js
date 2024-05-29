import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { filterReducer } from './filterSlice';

// const initialState = {
//     filter: {
//         value: '',
//     },
// };

export const filter = value => {
    return { type: 'books/filter', payload: value };
};

const rootReducer = combineReducers({ filter: filterReducer });

export const store = createStore(rootReducer, composeWithDevTools());
