import { NavLink } from 'react-router-dom';

import styles from '../Header/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/market">market</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
