import Router from './router/Router';
import axios from 'axios';
import { useEffect } from 'react';
import { useAppSelector } from './store/slices/hook';

function App() {
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    const url =
      'https://react-adding-value-default-rtdb.firebaseio.com//cart.json';
    // fetch(url, { method: 'PUT', body: JSON.stringify(cart) });
    axios.put(url, JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
