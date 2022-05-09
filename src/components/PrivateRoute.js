import { Route, Redirect } from 'react-router';
import authSelectors from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
