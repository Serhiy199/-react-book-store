import Book from '../Book/Book';
import { arrBooks } from '../../assets/arrBooks';
import { list } from './ListBooks.module.css';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';

export default function ListBooks() {
    const value = useSelector(selectFilter);
    const visibleBooks = arrBooks.filter(book =>
        book.title.toLowerCase().includes(value.toLowerCase())
    );
    return (
        <ul className={list}>
            {visibleBooks.map(listBook => (
                <Book key={listBook.id} listBook={listBook} />
            ))}
        </ul>
    );
}
