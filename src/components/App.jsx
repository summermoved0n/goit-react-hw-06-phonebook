import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewContact,
  removeContact,
  setFilter,
} from '../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.phonebook.contacts);
  const filter = useSelector(store => store.phonebook.filter);

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

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  const showFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.app_conteiner}>
      <h1 className={css.app_title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={css.app_subtitle}>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      {contacts.length === 0 ? (
        <p className={css.app_text}>Your contacts list is empty.</p>
      ) : (
        <ContactList
          contacts={showFilteredContacts()}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
}
