import styles from './Card.module.css';

import ICard from '../../types/card';

const Card = (props: ICard) => {
  return (
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <img className={styles.image} src={props.image} alt="" />
      </div>
      <p className={styles.title}>{props.name}</p>
      <p className={styles.price}>{props.current_price} USD</p>
      <input className={styles.input} type="number" min={0} />
      <button className={styles.button}>Buy</button>
    </div>
  );
};

export default Card;
