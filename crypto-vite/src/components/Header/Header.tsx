import { useState } from 'react';
import { useAppSelector } from '@src/store/slices/hook';

import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import Dialog from '@src/ui-kit/Dialog/Dialog';
import Card from '../Card/Card';

import Logo from '@assets/images/NFTVerse.svg?react';
import Cart from '@assets/icons/cart.svg?react';

import styles from '../Header/Header.module.css';
import { IItems } from '@src/types/cart';

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [onOpen, setOnOpen] = useState<boolean>(false);
  const { items } = useAppSelector((state) => state.cart);

  const count = items.length;
  const cartAmount = items.reduce((acc, item) => acc + item.current_price, 0);

  const sideBarHandler = () => {
    setOnOpen((prev) => !prev);
  };

  const uniqueItems = items.reduce<IItems[]>((acc, item) => {
    if (!acc.find((v) => v.name == item.name)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return (
    <div className={classNames(styles.header, className)} {...props}>
      <NavLink className={styles.logo} to="/">
        <Logo />
      </NavLink>
      <div className={styles.links__wrapper}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/market">
          Market
        </NavLink>
        <NavLink className={styles.link} to="/profile">
          Profile
        </NavLink>
        <button onClick={sideBarHandler} className={styles.icon__button}>
          <Cart />
          <p className={styles.number}>{count}</p>
        </button>
      </div>
      <Dialog open={onOpen} onOpenChange={setOnOpen} className={styles.dialog}>
        <p>Total cart amount:{cartAmount} </p>
        <p> Total cart Count:{count}</p>
        {items && uniqueItems.map((item) => <Card key={item.id} {...item} />)}
      </Dialog>
    </div>
  );
};

export default Header;
