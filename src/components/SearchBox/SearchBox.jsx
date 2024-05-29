import { useId } from 'react';
import css from './SearchBox.module.css';
import { filter, selectFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBox() {
    const searchBoxId = useId();
    const dispatch = useDispatch();
    const value = useSelector(selectFilter);

    return (
        <div className={css.box}>
            <label htmlFor={searchBoxId} className={css.text}>
                Find book by title
            </label>
            <input
                className={css.input}
                type="text"
                value={value}
                onChange={e => dispatch(filter(e.target.value))}
                id={searchBoxId}
            />
        </div>
    );
}
