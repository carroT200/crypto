import { useAppDispatch, useAppSelector } from '@src/store/slices/hook';
// import { useState } from 'react';

import { useMemo } from 'react';
import Button from '@src/ui-kit/Button/Button';

import ICard from '../../types/card';

import styles from './Card.module.css';
import { addItem } from '@src/store/slices/cartSlice';

const Card: React.FC<ICard> = ({ name, current_price, id, image }) => {
  // const [quantity, setQuantity] = useState<number>(0);
  const items = useAppSelector((state) => state.cart.items);

  const { quantity, itemTotalPrice } = useMemo(
    () => ({
      quantity: items.filter((item) => item.name === name).length,
      itemTotalPrice: items
        .filter((item) => item.name === name)
        .reduce((acc, item) => acc + item.current_price, 0),
    }),
    [items, name]
  );

  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <p className={styles.title}>{name}</p>
      <p className={styles.price}>{current_price} USD</p>
      <p className={styles.price}>quantity:{quantity} </p>
      <p className={styles.price}>Total items price:{itemTotalPrice} </p>
      <Button
        variant="primary"
        onClick={() =>
          dispatch(
            addItem({
              id: id,
              name: name,
              image: image,
              current_price: current_price,
            })
          )
        }
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Card;
