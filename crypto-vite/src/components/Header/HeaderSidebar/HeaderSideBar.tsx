import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import Sidebar from '@src/ui-kit/Sidebar/Sidebar';

import styles from './HeaderSideBar.module.css';

interface IHeaderSidebar extends React.ComponentPropsWithRef<typeof Sidebar> {
  open: boolean;
  onOpenChange: () => void;
}

const HeaderSidebar = ({ open, onOpenChange, className }: IHeaderSidebar) => {
  return (
    <Sidebar
      open={open}
      onOpenChange={onOpenChange}
      className={classNames(styles.sidebar, className)}
    >
      <div className={styles.wrapper}>
        <NavLink className={styles.sidebar__link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.sidebar__link} to="/market">
          Market
        </NavLink>
        <NavLink className={styles.sidebar__link} to="/profile">
          Profile
        </NavLink>
      </div>
    </Sidebar>
  );
};

export default HeaderSidebar;
