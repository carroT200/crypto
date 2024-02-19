import Header from './components/Header/Header';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Market } from './pages/Market';

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Header />
    </>
  );
}

export default App;
