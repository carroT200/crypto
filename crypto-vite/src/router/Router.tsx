import RouterNames from './RouterNames';

import { Routes, Route } from 'react-router-dom';

import Market from '../pages/public/Market/Market';
import Profile from '../pages/private/Profile/Profile';
import Home from '../pages/public/Home/Home';

// const Profile = lazy(() => import('../pages/Profile'));
// const Home = lazy(() => import('../pages/Home'));
// const Market = lazy(() => import('../pages/Market'));

const Router = () => {
  return (
    <Routes>
      <Route path={RouterNames.HOME}>
        <Route index element={<Home />} />
      </Route>
      <Route path={RouterNames.MARKET} element={<Market />}></Route>
      <Route path={RouterNames.PROFILE} element={<Profile />}></Route>
    </Routes>
  );
};

export default Router;
