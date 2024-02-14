import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

export type Tcrypto = {
  id: string;
  name: string;
  current_price: number;
};

function App() {
  const [crypto, setCrypto] = useState<Tcrypto[]>();
  useEffect(() => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en';
    axios.get(url).then((response) => {
      setCrypto(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h1>
        {crypto
          ? crypto.map((item) => (
              <p key={item.id}>
                {item.name} - {item.current_price}
              </p>
            ))
          : null}{' '}
      </h1>
    </>
  );
}

export default App;
