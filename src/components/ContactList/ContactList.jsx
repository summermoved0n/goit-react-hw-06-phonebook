import { useDispatch, useSelector } from 'react-redux';
import ContactListItems from '../ContactListItems/ContactListItem';
import css from './ContactList.module.css';
import { removeContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItems
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}
