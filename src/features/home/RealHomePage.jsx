import React, { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppConfig } from '../../context/AppConfigContext';
import Loader from '../../components/common/Loader';

const Home = lazy(() => import('./Home'));
const Home1 = lazy(() => import('./Home1'));

/**
 * Renders the site's actual (live) homepage content once the route has been
 * confirmed as "active" by the backend. Uses dynamic backend-controlled
 * routing instead of static homeConfig logic.
 */
const RealHomePage = ({ path }) => {
  const location = useLocation();
  const { isPathRealHome } = useAppConfig();
  const targetPath = path ?? location.pathname;

  // Use backend-controlled logic: if path is in activeRoutes (isRealHomePage=true), show Home
  // Otherwise show Home1 (demo)
  const isRealHome = isPathRealHome(targetPath);
  const ActiveHome = isRealHome ? Home : Home1;

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Loader />
        </div>
      }
    >
      <ActiveHome />
    </Suspense>
  );
};

export default RealHomePage;
