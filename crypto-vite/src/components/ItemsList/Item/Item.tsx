import classNames from 'classnames';
import styles from './Item.module.css';

interface IItem extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string;
  current_price: number;
  id: string;
}

const Item = ({
  name,
  image,
  current_price,
  id,
  className,
  ...props
}: IItem) => {
  return (
    <div className={classNames(styles.item__wrapper, className)} {...props}>
      <img src={image} alt={id} className={styles.image} />
      <div className={styles.card_info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{current_price}$</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.icon__button}>-</button>
        <button className={styles.icon__button}>+</button>
      </div>
    </div>
  );
};

export default Item;
