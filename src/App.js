import { Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar';
import { Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import authOperations from './redux/auth/authOperations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="mainWrapper">
      <ToastContainer />
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterPage />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contact" restricted>
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contact">
            <ContactsPage />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
