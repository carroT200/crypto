import { useState, useEffect } from 'react';

import { TMarketResponse } from '@src/types/responses/Market';

import Item from './Item/Item';
import styles from './ItemsList.module.css';

const ItemsList = () => {
  const [meal, setMeals] = useState<TMarketResponse[] | null>([]);

  useEffect(() => {
    const url =
      'https://react-adding-value-default-rtdb.firebaseio.com/meals.json';

    const fetchMeals = async () => {
      const response = await fetch(url);
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          image: responseData[key].image,
          current_price: responseData[key].current_price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  return (
    <div className={styles.items__wrapper}>
      {meal ? (
        meal.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <p>Cant fetch data</p>
      )}
    </div>
  );
};

export default ItemsList;
