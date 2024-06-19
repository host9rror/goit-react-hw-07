import PropTypes from 'prop-types';
import { FaPhone, FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <div className={css.contactContainer}>
        <div>
          <div>
            <h2 className={css.contactText}><FaUser /> {name}</h2>
          </div>
          <div>
            <h2 className={css.contactText}><FaPhone /> {number}</h2>
          </div>
        </div>
        <button onClick={handleDelete} type="button" className={css.deleteBtn}>Delete</button>
      </div>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
