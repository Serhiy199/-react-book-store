import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ value, onSetFilterBooks }) {
    const searchBoxId = useId();
    return (
        <div className={css.box}>
            <label htmlFor={searchBoxId} className={css.text}>
                Find quiz by title
            </label>
            <input
                className={css.input}
                type="text"
                value={value}
                onChange={e => onSetFilterBooks(e.target.value)}
                id={searchBoxId}
            />
        </div>
    );
}
