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
                {arrSaleBooks.length > 0
                    ? arrSaleBooks.map(listBook => (
                          <BookSale key={listBook.orderId} listBook={listBook} />
                      ))
                    : "Looks like you haven't added any items to your cart yet. To get started, you can add the product you like and order it by clicking on the cart."}
            </ul>
        </>
    );
}
