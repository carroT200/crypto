import classNames from 'classnames';
import axios from 'axios';

import { useEffect } from 'react';

import { useAppSelector } from '@src/store/slices/hook';

import styles from './Cart.module.css';

const Cart = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    const url =
      'https://react-adding-value-default-rtdb.firebaseio.com/cart.json';
    axios.put(url, { body: JSON.stringify(cart) });
  }, [cart]);

  return <div className={classNames(styles.cart, className)} {...props}></div>;
};

export default Cart;
