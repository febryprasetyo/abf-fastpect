/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
const Ciamis = lazy(() => import('../page/Ciamis'));
const Sidrap = lazy(() => import('../page/Sidrap'));

const coreRoutes = [
  {
    path: '/ciamis',
    title: 'Stasiun',
    component: Ciamis,
  },
  {
    path: '/sidrap',
    title: 'Sidrap',
    component: Sidrap,
  },
];

const routes = [...coreRoutes];
export default routes;
