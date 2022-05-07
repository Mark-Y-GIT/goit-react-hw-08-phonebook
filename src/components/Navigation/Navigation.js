import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
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
            Домашняя страница
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to="/register"
            className={s.navListLink}
            activeClassName={s.navListLinkIsActive}
          >
            Регистрация
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to="/login"
            className={s.navListLink}
            activeClassName={s.navListLinkIsActive}
          >
            Логин
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to="/contact"
            className={s.navListLink}
            activeClassName={s.navListLinkIsActive}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
