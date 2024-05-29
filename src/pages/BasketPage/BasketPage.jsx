import { useSelector } from 'react-redux';
import { selectAddBook } from '../../redux/orderedBooksSlice';
import { useEffect, useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ListBookInBasket from '../../components/ListBooksOnSale/ListBooksOnSale';

export default function BasketPage() {
    // const arrBooksInBasket = useSelector(selectAddBook);
    // console.log(arrBooksInBasket);

    // const [arrOrderedBooks, setArrOrderedBooks] = useState(() => {
    //     const orderedBooks = window.localStorage.getItem('ordered-books');
    //     return JSON.parse(orderedBooks);
    // });
    // console.log(arrOrderedBooks);
    // useEffect(() => {
    //     localStorage.setItem('ordered-books', JSON.stringify(arrBooksInBasket));
    // }, [arrBooksInBasket]);
    return (
        <>
            <ListBookInBasket />;
            <ContactForm />
        </>
    );
}
