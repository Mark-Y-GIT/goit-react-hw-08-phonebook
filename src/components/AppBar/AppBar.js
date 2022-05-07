import Navigation from 'components/Navigation/Navigation';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.AppBar}>
      <h1>Phonebook</h1>
      <Navigation />
      <button type="button">Кнопка</button>
    </header>
  );
}
