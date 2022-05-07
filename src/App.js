import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import AppBar from 'components/AppBar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ToastContainer />
      <AppBar />
      <Route path="/" exact>
        Домашняя страница
      </Route>
      <Route path="/register"> Регистрация</Route>
      <Route path="/login"> Логин</Route>
      <Route path="/contact">
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Route>
    </>
  );
}

export default App;
