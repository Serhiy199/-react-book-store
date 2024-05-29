import Book from '../Book/Book';
import { arrBooks } from '../../assets/arrBooks';
import { list } from './ListBooks.module.css';
import { useSelector } from 'react-redux';
export default function ListBooks(
    {
        // onBooksId,
    }
) {
    const value = useSelector(state => state.filter.value);
    const visibleBooks = arrBooks.filter(book =>
        book.title.toLowerCase().includes(value.toLowerCase())
    );
    return (
        <ul className={list}>
            {visibleBooks.map(list => (
                <Book
                    key={list.id}
                    list={list}
                    // onBookId={onBooksId}
                />
            ))}
        </ul>
    );
}
