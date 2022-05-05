import React from 'react';
import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<Box isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Dashboard Routes
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/hello', element: <HelloPage /> },
        { path: '/greeting', element: <GreetingPage /> },
        { path: '/counter', element: <CounterPage /> },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Dashboard

const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
const HelloPage = Loadable(lazy(() => import('../pages/HelloPage')));
const GreetingPage = Loadable(lazy(() => import('../pages/GreetingPage')));
const CounterPage = Loadable(lazy(() => import('../pages/CounterPage')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
