import PropTypes from 'prop-types';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const filteredContacts = contacts && Array.isArray(contacts)
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];


    if (!contacts || contacts.length === 0) {
        return <p className={css.contactsNotFound}>No contacts found...</p>;
    } else {
        return (
            <div>
                <ul className={css.contactList}>
                    {filteredContacts.map(contact => (
                        <Contact 
                            key={contact.id} 
                            name={contact.name} 
                            number={contact.number} 
                            deleteContact={() => dispatch(deleteContact(contact.id))} 
                            id={contact.id} 
                        />
                    ))}
                </ul>
            </div>
        );
    }
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    )
};

export default ContactList;
