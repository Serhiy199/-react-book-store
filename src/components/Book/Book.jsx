import css from './Book.module.css';
import { Link, useLocation } from 'react-router-dom';
export default function Book({ list: { id, title, author, price }, onBookId }) {
    const location = useLocation();
    return (
        <li className={css.contactBox}>
            <div className={css.info}>
                <h3 className={css.text}>{title}</h3>
                <h4>author: {author}</h4>
                <p>price: {price}</p>
                <Link to={`/book/${id}`} state={location}>
                    <button className={css.button} onClick={() => onBookId(id)}>
                        About book
                    </button>
                </Link>
                <button className={css.button} onClick={() => onBookId(id)}>
                    Add
                </button>
            </div>
        </li>
    );
}
