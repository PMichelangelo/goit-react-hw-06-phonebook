import { useSelector, useDispatch } from 'react-redux';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';

import {getFilterdContacts } from '../../redux/contacts/contact-selectors'
import { addContact, deleteContact } from '../../redux/contacts/contacts-slice'
import { setFilter } from '../../redux/filter/filter-slice';

import styles from './phonebook.module.css';


const Phonebook = () => {
  const contacts = useSelector(getFilterdContacts)

  const dispatch = useDispatch()

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();

    const dublicated = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normalizedName;
    });

    return Boolean(dublicated);
  };

  const onAddContact = data => {
    if (isDublicate(data.name)) {
      return alert(
        `Contact ${data.name} with tel: ${data.phone} already in phonebook`
      );
    }

    const action = addContact(data)
    dispatch(action)

  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id))
  };

  const changeFilter = ({target}) => dispatch(setFilter(target.value))

  return (
    <div className={styles.phonebookWrapper}>
      <PhonebookForm onSubmit={onAddContact} />
      <div>
        <input
          type="text"
          name="filter"
          placeholder="Search"
          onChange={changeFilter}
          className={styles.filter}
        />
        <ContactsList items={contacts} deleteContact={onDeleteContact} />
      </div>
    </div>
  );
};

export default Phonebook;
