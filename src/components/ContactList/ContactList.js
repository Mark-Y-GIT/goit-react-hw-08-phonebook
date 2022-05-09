import { useSelector } from 'react-redux';
import contactsSelectors from 'redux/contacts/contactsSelectors';
import ContactsListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContact);
  const filter = useSelector(state => state.filter);

  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {!contacts.length ? (
        <p>Please add a contact!</p>
      ) : (
        <ul>
          {filteredList.map(filteredContact => (
            <ContactsListItem key={filteredContact.id} {...filteredContact} />
          ))}
        </ul>
      )}
    </>
  );
}
