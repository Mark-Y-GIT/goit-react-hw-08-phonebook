import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredList.map(({ id, name, number }) => (
        <li id={id} key={id}>
          <span>{name}</span> {number}
          <button
            type="button"
            style={{ marginLeft: 20 }}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
