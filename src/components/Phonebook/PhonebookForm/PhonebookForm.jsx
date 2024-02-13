import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { getFilteredContacts } from '../../../redux/contacts/contact-selectors';
import { addContact } from '../../../redux/contacts/contacts-slice';
import styles from './phonebookForm.module.css';

const INITIAL_STATE = {
    contacts: [],
    filter: '',
    name: '',
    phone: ''
};

const PhonebookForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE })
  const contacts = useSelector(getFilteredContacts)

  const dispatch = useDispatch();

      const isDublicate = ({ name, phone }) => {
        const normalizedName = name.toLowerCase();
        const normalizedNumber = phone.trim();

        const dublicate = contacts.find(item => {
            const normalizeCurrentName = item.name.toLowerCase();
            const normalizeCurrentNumber = item.phone.trim();
            return (normalizeCurrentName === normalizedName || normalizeCurrentNumber === normalizedNumber)
        })

        return Boolean(dublicate);
      };

  const onAddContact = (data) => {
    if (isDublicate(data)) {
      alert(`${data.name} with number ${data.phone} is already in phonebook`)
      return
    }

    const action = addContact(data)
    dispatch(action)
  }

    const handleChange = ({target}) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value
    })
  };

 const handleSubmit = e => {
    e.preventDefault();
   onAddContact({ ...state })
   if (!isDublicate({...state})) {
     reset()
   }
 };

  const reset = () => {
    setState({...INITIAL_STATE})
  }

  const nameId = nanoid()
  const phoneId = nanoid()

  const {name, phone } = state

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
            pattern="^[+0-9\-\(\)\s]+$"
            required
          />
          <button type="submit" className={styles.addContactBtn}>
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhonebookForm;
