import { useState } from 'react';
import { useAppSelector } from '@src/store/slices/hook';
import useUserAgent from '@src/hook/useUserAgent';

import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import Dialog from '@src/ui-kit/Dialog/Dialog';
import HeaderSidebar from './HeaderSidebar/HeaderSideBar';
import Card from '../Card/Card';

import CartIcon from '@assets/icons/cart.svg?react';
import BurgerIcon from '@assets/icons/burger.svg?react';

import styles from '../Header/Header.module.css';

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [onOpen, setOnOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const { items, totalCartAmount, totalCartCount } = useAppSelector(
    (state) => state.cart
  );

  const [isTablet] = useUserAgent({ breakpoint: 1200 });

  // const count = items.length;
  // const cartAmount = items.reduce((acc, item) => acc + item.current_price, 0);

  const DialogHandler = () => {
    setOnOpen((prev) => !prev);
  };

  const sideBarHandler = () => {
    setSidebarOpen((prev) => !prev);
  };

  // const uniqueItems = items.reduce<IItems[]>((acc, item) => {
  //   if (!acc.find((v) => v.name == item.name)) {
  //     acc.push(item);
  //   }
  //   return acc;
  // }, []);

  return (
    <div className={classNames(styles.header, className)} {...props}>
      <NavLink className={styles.logo} to="/">
        Delivery.com
      </NavLink>
      <div className={styles.links__wrapper}>
        {!isTablet && (
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
        )}
        <button onClick={DialogHandler} className={styles.icon__button}>
          <CartIcon />
          <p className={styles.number}>{totalCartCount}</p>
        </button>
        {isTablet && (
          <button onClick={sideBarHandler} className={styles.icon__button}>
            <BurgerIcon />
          </button>
        )}
      </div>
      <Dialog open={onOpen} onOpenChange={setOnOpen} className={styles.dialog}>
        <p>Total cart amount:{totalCartAmount} </p>
        <p> Total cart Count:{totalCartCount}</p>
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            current_price={item.current_price}
            image={item.image}
            name={item.name}
          />
        ))}
      </Dialog>
      <HeaderSidebar open={sidebarOpen} onOpenChange={sideBarHandler} />
    </div>
  );
};

export default Header;
