import { useSelector } from 'react-redux';
import { selectAddBook } from '../../redux/saleBooksSlice';
import { useEffect, useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ListBookInBasket from '../../components/ListBooksOnSale/ListBooksOnSale';

export default function BasketPage() {
    return (
        <>
            <ListBookInBasket />;
            <ContactForm />
        </>
    );
}
