import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import styles from '../Header/Header.module.css';

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classNames(styles.header, className)} {...props}>
      <p>dsfsdfsdfs</p>
      <div>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/market">
          Market
        </NavLink>
        <NavLink className={styles.link} to="/profile">
          Profile
        </NavLink>
        <input className={styles.input} type="text" />
        <button className={styles.button}>Search</button>
      </div>
    </div>
  );
};

export default Header;
