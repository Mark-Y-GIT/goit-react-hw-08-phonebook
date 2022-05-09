import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <div>
      <span className={s.userName}>{userName} contacts</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
