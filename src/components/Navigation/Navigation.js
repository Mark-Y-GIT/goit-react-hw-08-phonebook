import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import authSelectors from 'redux/auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink
            exact
            to="/"
            className={s.navListLink}
            activeClassName={s.navListLinkIsActive}
          >
            Homepage
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.navListItem}>
            <NavLink
              to="/contact"
              className={s.navListLink}
              activeClassName={s.navListLinkIsActive}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
