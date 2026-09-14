import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import StudentLayout from '../layouts/StudentLayout';
import Loader from '../components/common/Loader';
import { SITE_CONFIG } from '../config/siteConfig';
import { HOME_1_SEO_ROUTES, checkIsActiveHome1, checkIsHome1Path } from '../config/homeConfig';

// Lazy load components for code splitting
const Home = lazy(() => import('../features/home/Home'));
const Home1 = lazy(() => import('../features/home/Home1'));
const Register = lazy(() => import('../features/auth/pages/Register'));
const Login = lazy(() => import('../features/auth/pages/Login'));
const PlaceOrder = lazy(() => import('../features/orders/pages/PlaceOrder'));
const ConfirmOrderDetails = lazy(() => import('../features/orders/pages/ConfirmOrderDetails'));
const StudentDashboard = lazy(() => import('../features/dashboard/components/StudentDashboard'));
const Reviews = lazy(() => import('../features/reviews/pages/Reviews'));
const HeaderDemoPage = lazy(() => import('../components/demo/HeaderDemo'));

// Loading component wrapper
const LoadingWrapper = ({ children }) => (
  <Suspense fallback={
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Loader />
    </div>
  }>
    {children}
  </Suspense>
);

// Dynamic SEO route component rendering Home or Home-1 according to configuration
const DynamicSEORoute = ({ path }) => {
  const isH1 = checkIsHome1Path(path);
  return (
    <LoadingWrapper>
      {isH1 ? <Home1 /> : <Home />}
    </LoadingWrapper>
  );
};

const AppRoutes = () => {
  const ActiveHome = checkIsActiveHome1() ? Home1 : Home;

  return (
    <Routes>
      {/* Public Routes with Full Public Navbar & Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={
          <LoadingWrapper>
            <ActiveHome />
          </LoadingWrapper>
        } />
        <Route path="/home" element={
          <LoadingWrapper>
            <Home />
          </LoadingWrapper>
        } />
        <Route path="/home-1" element={
          <LoadingWrapper>
            <Home1 />
          </LoadingWrapper>
        } />
        <Route path="/home1" element={
          <LoadingWrapper>
            <Home1 />
          </LoadingWrapper>
        } />

        {/* SEO Landing Routes (Configured in homeConfig.js) */}
        {HOME_1_SEO_ROUTES.map((routePath) => (
          <Route key={routePath} path={routePath} element={<DynamicSEORoute path={routePath} />} />
        ))}

        <Route path="/reviews" element={
          <LoadingWrapper>
            <Reviews />
          </LoadingWrapper>
        } />
        
        {/* Header Demo Page - Shows all three headers */}
        <Route path="/header-demo" element={
          <LoadingWrapper>
            <HeaderDemoPage />
          </LoadingWrapper>
        } />
        <Route path="/headers-demo" element={
          <LoadingWrapper>
            <HeaderDemoPage />
          </LoadingWrapper>
        } />
        <Route path="/demo/headers" element={
          <LoadingWrapper>
            <HeaderDemoPage />
          </LoadingWrapper>
        } />
        
        {/* Registration is reachable at both '/account/register' and the
            centralized SITE_CONFIG.routes.register path so links generated
            from siteConfig.js always resolve to a real route. */}
        <Route path="/account/register" element={
          <LoadingWrapper>
            <Register />
          </LoadingWrapper>
        } />
        <Route path={SITE_CONFIG.routes.register} element={
          <LoadingWrapper>
            <Register />
          </LoadingWrapper>
        } />
        <Route path={SITE_CONFIG.routes.login} element={
          <LoadingWrapper>
            <Login />
          </LoadingWrapper>
        } />
        <Route path="/account/login" element={
          <LoadingWrapper>
            <Login />
          </LoadingWrapper>
        } />
      </Route>

      {/* Student Routes with Student Navbar & 2-line Footer */}
      <Route element={<StudentLayout />}>
        {/* User Area / Orders Dashboard */}
        <Route path="/student/dashboard" element={
          <LoadingWrapper>
            <StudentDashboard />
          </LoadingWrapper>
        } />
        <Route path="/student/orders" element={
          <LoadingWrapper>
            <StudentDashboard />
          </LoadingWrapper>
        } />
        <Route path="/student/user-area" element={
          <LoadingWrapper>
            <StudentDashboard />
          </LoadingWrapper>
        } />
        <Route path="/user-area" element={
          <LoadingWrapper>
            <StudentDashboard />
          </LoadingWrapper>
        } />

        {/* Place Order Flow */}
        <Route path="/order/placeorder" element={
          <LoadingWrapper>
            <PlaceOrder />
          </LoadingWrapper>
        } />
        <Route path="/order/place-order" element={
          <LoadingWrapper>
            <PlaceOrder />
          </LoadingWrapper>
        } />
        <Route path="/Order/PlaceOrder" element={
          <LoadingWrapper>
            <PlaceOrder />
          </LoadingWrapper>
        } />
        <Route path="/order/PlaceOrder" element={
          <LoadingWrapper>
            <PlaceOrder />
          </LoadingWrapper>
        } />
        <Route path="/student/order/place-order" element={
          <LoadingWrapper>
            <PlaceOrder />
          </LoadingWrapper>
        } />
        <Route path="/student/order/placeorder" element={
          <LoadingWrapper>
            <PlaceOrder />
          </LoadingWrapper>
        } />

        {/* Confirm Order & Deposit Funds Flow */}
        <Route path="/Order/ConfirmOrderDetails" element={
          <LoadingWrapper>
            <ConfirmOrderDetails />
          </LoadingWrapper>
        } />
        <Route path="/order/confirmorderdetails" element={
          <LoadingWrapper>
            <ConfirmOrderDetails />
          </LoadingWrapper>
        } />
        <Route path="/order/confirm-order-details" element={
          <LoadingWrapper>
            <ConfirmOrderDetails />
          </LoadingWrapper>
        } />
        <Route path="/order/confirm-order" element={
          <LoadingWrapper>
            <ConfirmOrderDetails />
          </LoadingWrapper>
        } />
        <Route path="/student/order/confirm-order-details" element={
          <LoadingWrapper>
            <ConfirmOrderDetails />
          </LoadingWrapper>
        } />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;