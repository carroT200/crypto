import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../../components/Header/Header';
import Card from '../../../components/Card/Card';

import { TMarketResponse } from '../../../types/responses/Market';

import styles from './Market.module.css';

const Market = () => {
  const [crypto, setCrypto] = useState<TMarketResponse[] | null>([]);

  useEffect(() => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en';

    axios
      .get(url)
      .then((response) => setCrypto(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.market__wrapper}>
      <Header />
      <div className={styles.menu}>
        <p className={styles.text}>Name</p>
        <p className={styles.text}>Price</p>
        <p className={styles.text}>Quantity</p>
      </div>
      {crypto ? (
        crypto.map((item) => <Card key={item.id} {...item} />)
      ) : (
        <p>Cant fetch data</p>
      )}
    </div>
  );
};

export default Market;
