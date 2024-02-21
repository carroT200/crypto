import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../../components/Header/Header';

import Card from '../../../components/Card/Card';
import { TMarketResponse } from '../../../types/responses/Market';

const Market = () => {
  const [crypto, setCrypto] = useState<TMarketResponse[] | null>([]);

  useEffect(() => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en';

    axios.get(url).then((response) => setCrypto(response.data));
  }, []);

  return (
    <div>
      <Header />
      <p>market</p>
      {crypto ? (
        crypto.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            current_price={item.current_price}
            image={item.image}
          />
        ))
      ) : (
        <p>Cant feth data </p>
      )}
    </div>
  );
};

export default Market;
