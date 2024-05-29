import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useSelector } from 'react-redux';
import { selectAddBook } from '../../redux/saleBooksSlice';

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    surname: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    address: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
});

const initialValues = {
    name: '',
    surname: '',
    address: '',
    number: '',
};

export default function ContactForm() {
    const userNameId = useId();
    const surnameId = useId();
    const addressId = useId();
    const numberId = useId();

    const arrSaleBooks = useSelector(selectAddBook);
    const totalScore = arrSaleBooks.reduce((total, book) => {
        return total + book.totalScore;
    }, 0);

    const handleSubmit = ({ name, surname, address, number }, actions) => {
        const form = {
            id: nanoid(),
            name,
            surname,
            address,
            number,
            totalScore: totalScore,
            ...arrSaleBooks,
        };
        localStorage.setItem('sale-books', JSON.stringify(form));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <div className={css.box}>
                    <label htmlFor={userNameId} className={css.label}>
                        Name
                    </label>
                    <Field name="name" id={userNameId} className={css.field} />
                    <ErrorMessage name="name" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={surnameId} className={css.label}>
                        Surname
                    </label>
                    <Field name="surname" id={surnameId} className={css.field} />
                    <ErrorMessage name="surname" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={addressId} className={css.label}>
                        Address
                    </label>
                    <Field name="address" id={addressId} className={css.field} />
                    <ErrorMessage name="address" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={numberId} className={css.label}>
                        Phone
                    </label>
                    <Field type="number" name="number" id={numberId} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <button className={css.button} type="submit">
                    ORDER
                </button>
            </Form>
        </Formik>
    );
}
