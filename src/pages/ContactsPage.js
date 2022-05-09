import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { useEffect } from 'react';
import { getContacts } from '../redux/contacts/contactsOperation';
import { useDispatch } from 'react-redux';
import s from '../App.css';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        <ContactForm />
        <Filter />
      </div>
      <div className={s.wrapper}>
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </>
  );
}
