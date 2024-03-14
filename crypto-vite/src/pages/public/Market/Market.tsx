import Header from '../../../components/Header/Header';
import ItemsList from '@src/components/ItemsList/ItemsList';

import styles from './Market.module.css';

const Market = () => {
  return (
    <div className={styles.market__wrapper}>
      <Header />
      <div className={styles.menu}>
        <p className={styles.text}>Name</p>
        <p className={styles.text}>Price</p>
        <p className={styles.text}>Quantity</p>
      </div>
      <ItemsList />
    </div>
  );
};

export default Market;
