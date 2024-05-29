import Book from '../Book/Book';
import { arrBooks } from '../../assets/arrBooks';
import { list } from './ListBooksOnSale.module.css';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';
import { selectAddBook } from '../../redux/orderedBooksSlice';
import BookSale from '../../components/BookSale/BookSale';

export default function ListBooks() {
    const arrBooksInBasket = useSelector(selectAddBook);

    // const value = useSelector(selectFilter);
    // const visibleBooks = arrBooks.filter(book =>
    //     book.title.toLowerCase().includes(value.toLowerCase())
    // );
    return (
        <ul className={list}>
            {arrBooksInBasket.map(listBook => (
                <BookSale key={listBook.orderId} listBook={listBook} />
            ))}
        </ul>
    );
}
