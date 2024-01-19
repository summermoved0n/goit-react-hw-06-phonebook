import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);
  return (
    <div className={css.app_conteiner}>
      <h1 className={css.app_title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.app_subtitle}>Contacts</h2>
      <Filter />
      {contacts.length === 0 ? (
        <p className={css.app_text}>Your contacts list is empty.</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
}
