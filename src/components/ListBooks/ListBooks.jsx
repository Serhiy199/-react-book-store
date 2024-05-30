import Book from '../Book/Book';
import { arrBooks } from '../../assets/arrBooks';
import { list, title, section } from './ListBooks.module.css';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';

export default function ListBooks() {
    const value = useSelector(selectFilter);
    const visibleBooks = arrBooks.filter(book =>
        book.title.toLowerCase().includes(value.toLowerCase())
    );
    return (
        <section className={section}>
            <h2 className={title}>Popular series of foreign academic literature</h2>
            <ul className={list}>
                {visibleBooks.map(listBook => (
                    <Book key={listBook.id} listBook={listBook} />
                ))}
            </ul>
        </section>
    );
}
