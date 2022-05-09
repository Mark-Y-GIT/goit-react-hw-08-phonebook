import { deleteContact } from '../../redux/contacts/contactsOperation';
import { useDispatch, useSelector } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import s from './ContactListItem.module.css';

export default function ContactsListItem({ id, name, number }) {
  const isDeleting = useSelector(contactsSelectors.getIsDeleting);
  const dispatch = useDispatch();

  return (
    <li className={s.listItem}>
      <span className={s.contactName}>{name}</span>
      <div>
        <span className={s.contactNumber}>{number}</span>
        <button
          type="button"
          onClick={() => dispatch(deleteContact(id))}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </li>
  );
}
