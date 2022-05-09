import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './LoginForm.module.css';
import { authOperations } from 'redux/auth';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
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

    const data = { email, password };

    dispatch(authOperations.logIn(data));

    setEmail('');
    setPassWord('');
  };

  return (
    <form className={s.wrapper} onSubmit={handleOnSubmit}>
      <h2>Email</h2>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
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
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
