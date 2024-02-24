import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import Button from '@src/ui-kit/Button/Button';

import styles from '../Header/Header.module.css';

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classNames(styles.header, className)} {...props}>
      <NavLink className={styles.logo} to="/">
        BUY-CRYPTO
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
        <input className={styles.input} type="text" />
        <Button variant="secondary">Search</Button>
      </div>
    </div>
  );
};

export default Header;
