import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = data => {
    const { name, number } = data;
    console.log(data);

    const getName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (getName) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
    dispatch(addNewContact(contact));
  };

  const resetSubmit = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });
    resetSubmit();
  };

  const inputNameId = 'nameInput';
  const inputNumberId = 'numberInput';

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={inputNameId}>
        <span className={css.form_title}>Name</span>
        <input
          className={css.form_input}
          type="text"
          name="name"
          value={name}
          id={inputNameId}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor={inputNumberId}>
        <span className={css.form_title}>Number</span>
        <input
          className={css.form_input}
          type="tel"
          name="number"
          value={number}
          id={inputNumberId}
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.form_btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
