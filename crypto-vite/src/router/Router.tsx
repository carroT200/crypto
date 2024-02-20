import { lazy } from 'react';

import RouterNames from './RouterNames';

import { Routes, Route } from 'react-router-dom';

const Profile = lazy(() => import('../pages/Profile'));
const Home = lazy(() => import('../pages/Home'));
const Market = lazy(() => import('../pages/Market'));

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
