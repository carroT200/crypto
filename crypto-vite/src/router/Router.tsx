import RouterNames from './RouterNames';

import { Routes, Route } from 'react-router-dom';

import Market from '../pages/public/Market/Market';
import Profile from '../pages/private/Profile/Profile';
import Home from '../pages/public/Home/Home';
import Login from '@src/pages/public/Login/Login';
import Auth from '@src/pages/public/Auth/Auth';

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
      <Route path={RouterNames.AUTH} element={<Auth />}></Route>
      <Route path={RouterNames.LOGIN} element={<Login />}></Route>
    </Routes>
  );
};

export default Router;
