import { list, title } from './ListBooksOnSale.module.css';
import { useSelector } from 'react-redux';

import { selectAddBook } from '../../redux/saleBooksSlice';
import BookSale from '../../components/BookSale/BookSale';

export default function ListBooks() {
    const arrSaleBooks = useSelector(selectAddBook);
    return (
        <>
            {' '}
            <h2 className={title}>Books you have added to the cart</h2>
            <ul className={list}>
                {arrSaleBooks.map(listBook => (
                    <BookSale key={listBook.orderId} listBook={listBook} />
                ))}
            </ul>
        </>
    );
}
