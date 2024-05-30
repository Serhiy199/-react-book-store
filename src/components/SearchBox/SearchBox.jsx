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
            <input
                className={css.input}
                type="text"
                value={value}
                onChange={e => dispatch(filter(e.target.value))}
                id={searchBoxId}
                placeholder="Find book by title"
            />
        </div>
    );
}
