import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './RegForm.module.css';

function RegForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      return;
    }

    if (name === 'email') {
      setEmail(value);
      return;
    }
    if (name === 'password') {
      setPassWord(value);
      return;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    const data = { name, email, password };

    dispatch(authOperations.register(data));
    setName('');
    setEmail('');
    setPassWord('');
  };

  return (
    <form className={s.wrapper} onSubmit={handleOnSubmit}>
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
      <h2>Email</h2>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
        title=""
        required
      />
      <h2>Password</h2>
      <input
        type="text"
        className={s.formInput}
        name="password"
        value={password}
        onChange={handleInputChange}
        title=""
        required
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegForm;
