import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().min(9, 'Too short!').max(12, 'Too long!').required('Required'),
});

const initialValues = {
    name: '',
    number: '',
};

export default function ContactForm({ onContact }) {
    const usernNameId = useId();
    const numberId = useId();

    const handleSubmit = ({ name, number }, actions) => {
        onContact({ id: nanoid(), name, number });
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
                    <label htmlFor={usernNameId} className={css.label}>
                        Name
                    </label>
                    <Field name="name" id={usernNameId} className={css.field} />
                    <ErrorMessage name="name" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={numberId} className={css.label}>
                        Surname
                    </label>
                    <Field type="number" name="number" id={numberId} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={numberId} className={css.label}>
                        Address
                    </label>
                    <Field type="number" name="number" id={numberId} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
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
