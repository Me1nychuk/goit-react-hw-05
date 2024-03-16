import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import clsx from "clsx"; //! add active state

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>HW 5</p>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
