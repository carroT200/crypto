import { useAppDispatch } from '@src/store/slices/hook';

import Button from '@src/ui-kit/Button/Button';

import ICard from '../../types/card';

import styles from './Card.module.css';
import { addItem, removeItem } from '@src/store/slices/cartSlice';

const Card: React.FC<ICard> = ({ name, current_price, id, image, qty }) => {
  const dispatch = useAppDispatch();

  const addCartToCartHandler = () => {
    dispatch(
      addItem({
        id: id,
        name: name,
        image: image,
        current_price: current_price,
        qty: 1,
      })
    );
  };

  const removeItemFromCartHandler = () => {
    dispatch(
      removeItem({
        id: id,
        name: name,
        image: image,
        current_price: current_price,
        qty: 1,
      })
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <p className={styles.title}>{name}</p>
      <p className={styles.price}>{current_price} USD</p>
      <p className={styles.price}>quantity:{qty} </p>

      <Button variant="primary" onClick={addCartToCartHandler}>
        +
      </Button>
      <Button variant="primary" onClick={removeItemFromCartHandler}>
        -
      </Button>
    </div>
  );
};

export default Card;
