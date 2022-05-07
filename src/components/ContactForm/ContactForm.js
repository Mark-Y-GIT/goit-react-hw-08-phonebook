import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/actions';
import { toast } from 'react-toastify';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      return;
    }

    if (name === 'number') {
      setNumber(value);
      return;
    }
    return;
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast(name + ' is already in contacts');
      return;
    }

    const data = { name, number };

    dispatch(addContact(data));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.border} onSubmit={handleOnSubmit}>
      <h2>Name</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <h2>Number</h2>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
