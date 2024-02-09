import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  setName,
  setPhone,
  clearForm,
} from '../../../redux/phonebookFrom/phonebookForm-slice';
import { addContact } from '../../../redux/contacts/contacts-slice';
import styles from './phonebookForm.module.css';

const PhonebookForm = () => {
  const { name, phone } = useSelector(state => state.phonebookForm);

  const dispatch = useDispatch();

  const nameId = nanoid();
  const phoneId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    dispatch(clearForm());
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      dispatch(setName(value));
    } else if (name === 'phone') {
      dispatch(setPhone(value));
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formWrapper}>
          <label htmlFor={nameId}>Name</label>
          <input
            value={name}
            type="text"
            name="name"
            placeholder="Name"
            className={styles.inputName}
            id={nameId}
            onChange={handleChange}
            required
          />
          <label htmlFor={phoneId}>Phone</label>
          <input
            value={phone}
            type="tel"
            name="phone"
            placeholder="Phone"
            className={styles.inputName}
            id={phoneId}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.addContactBtn}>
            Add contact
          </button>
        </div>
      </form>
      <h1>Contacts</h1>
    </div>
  );
};

export default PhonebookForm;
