import classNames from 'classnames';

import { NavLink, LinkProps } from 'react-router-dom';

import styles from './MenuNavLink.module.css';

interface INavLinkProps extends Omit<LinkProps, 'className'> {
  icon?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: string;
}

const MenuNavLink = ({
  children,
  icon,
  className,
  ...props
}: INavLinkProps) => (
  <NavLink
    className={({ isActive }) =>
      classNames(styles.link, { [styles['link--active']]: isActive }, className)
    }
    {...props}
  >
    <div className={styles.icon}>{icon}</div>
    {children}
  </NavLink>
);

export default MenuNavLink;
