import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import * as Yup from 'yup'; 
import { useDispatch } from 'react-redux'; 
import { addContact } from '../../redux/contactsSlice'; 
import css from './ContactForm.module.css';

const ContactForm = () => {

    const dispatch = useDispatch();

    const feedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(20, "Too long!").required("Required")
    });

    const initialValues = {
        name: "",
        number: ""
    }

    const handleSubmit = (values, {resetForm}) => {
        dispatch(addContact(values.name, values.number));
        resetForm();
    }

    return (
        <div className={css.formContainer}>
            <Formik initialValues={initialValues} validationSchema={feedbackSchema} onSubmit={handleSubmit}>
                <Form>
                    <div className={css.formGroup}>
                        <label htmlFor="number" className="number">Name</label>
                        <Field type="text" name="name" id="number" className={css.inputField} />
                        <ErrorMessage name="name" component="span" className={css.errorMessage} />
                    </div>
                    <div className={css.formGroup}>
                        <label htmlFor="number" className={css.label}>Number</label>
                        <Field type="text" name="number" id="number" className={css.inputField} />
                        <ErrorMessage name="number" component="span" className={css.errorMessage} />
                    </div>
                    <button type="submit" className={css.submitBtn}>Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
