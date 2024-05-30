import { title } from './BasketPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import ListBooksOnSale from '../../components/ListBooksOnSale/ListBooksOnSale';

export default function BasketPage() {
    return (
        <>
            <ListBooksOnSale />
            <h2 className={title}>Fill out the form to get in touch with you</h2>
            <ContactForm />
        </>
    );
}
