import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink
            to="/register"
            className={s.navListLink}
            activeClassName={s.navListLinkIsActive}
          >
            Registration
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to="/login"
            className={s.navListLink}
            activeClassName={s.navListLinkIsActive}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
