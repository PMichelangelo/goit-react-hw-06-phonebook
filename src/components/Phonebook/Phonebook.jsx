import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

import styles from './phonebook.module.css';

const Phonebook = () => {

  return (
    <div className={styles.phonebookWrapper}>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <div className={styles.listWrapper}>
        <h1>Contacts</h1>
        <Filter/>
        <ContactsList/>
      </div>
    </div>
  );
};

export default Phonebook;
