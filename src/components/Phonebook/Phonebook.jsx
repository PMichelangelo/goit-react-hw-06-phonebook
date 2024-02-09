import { useSelector, useDispatch } from 'react-redux';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';

import { getFilterdContacts } from '../../redux/contacts/contact-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-slice';

import styles from './phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getFilterdContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  /*
  const onAddContact = data => {
    if (isDublicate(data.name)) {
      return alert(
        `Contact ${data.name} with tel: ${data.phone} already in phonebook`
      );
    }
    const action = addContact(data);
    dispatch(action);
  };
*/
  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.phonebookWrapper}>
      <PhonebookForm />
      <div>
        <input
          type="text"
          name="filter"
          value={filter}
          placeholder="Search"
          onChange={changeFilter}
          className={styles.filter}
        />
        <ContactsList />
      </div>
    </div>
  );
};

export default Phonebook;
