import { useSelector } from 'react-redux';
import { title } from './BasketPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import ListBooksOnSale from '../../components/ListBooksOnSale/ListBooksOnSale';
import { selectAddBook } from '../../redux/saleBooksSlice';
import NotFoundBooksOnSale from '../../components/NotFoundBooksOnSale/NotFoundBooksOnSale';

export default function BasketPage() {
    const arrSaleBooks = useSelector(selectAddBook);

    return (
        <>
            {arrSaleBooks.length > 0 ? (
                <>
                    <ListBooksOnSale />
                    <h2 className={title}>Fill out the form to get in touch with you</h2>
                    <ContactForm />
                </>
            ) : (
                <NotFoundBooksOnSale />
            )}
        </>
    );
}
