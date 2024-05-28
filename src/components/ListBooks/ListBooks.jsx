import Book from '../Book/Book';

import { list } from './ListBooks.module.css';
export default function ListBooks({ onListBooks, onBooksId }) {
    return (
        <ul className={list}>
            {onListBooks.map(list => (
                <Book key={list.id} list={list} onBookId={onBooksId} />
            ))}
        </ul>
    );
}
