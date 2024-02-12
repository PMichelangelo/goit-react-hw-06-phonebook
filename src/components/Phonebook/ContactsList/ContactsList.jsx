import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-slice';
import { getFilterdContacts } from '../../../redux/contacts/contact-selectors';

import styles from './contactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getFilterdContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = contacts.map(({ id, name, phone }) => (
    <li key={id} className={styles.listItem}>
      {name}: {phone}{' '}
      <button
        type="button"
        className={styles.deleteContactBtn}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.contactsList}>{elements}</ul>;
};

export default ContactsList;
