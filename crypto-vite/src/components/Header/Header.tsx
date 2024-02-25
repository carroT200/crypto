import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import Logo from '@assets/images/NFTVerse.svg?react';

import styles from '../Header/Header.module.css';

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classNames(styles.header, className)} {...props}>
      <NavLink className={styles.logo} to="/">
        <Logo />
      </NavLink>
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
      </div>
    </div>
  );
};

export default Header;
