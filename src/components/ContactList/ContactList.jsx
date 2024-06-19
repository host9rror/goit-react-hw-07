import { useEffect } from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contactsOps';
import { selectIsLoading, selectError, filteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <p className={css.contactsLoading}>Loading, please wait...</p>;
  }

  if (error) {
    return <p className={css.contactsError}>Error: {error}</p>;
  }

  if (!contacts || contacts.length === 0) {
    return <p className={css.contactsNotFound}>No contacts found...</p>;
  }

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
