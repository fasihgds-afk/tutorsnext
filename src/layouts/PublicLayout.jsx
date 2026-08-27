import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/common/Footer';
import Footer1 from '../components/common/Footer1';
import { SITE_CONFIG } from '../config/siteConfig';

const PublicLayout = () => {
  const location = useLocation();
  const activeHomeVal = String(SITE_CONFIG.activeHome || '').trim().toLowerCase();
  const activeIsHome1 = activeHomeVal === 'home-1' || activeHomeVal === 'home1' || activeHomeVal === '1';

  const isHome1 =
    location.pathname.startsWith('/home-1') ||
    location.pathname.startsWith('/home1') ||
    (location.pathname === '/' && activeIsHome1) ||
    // Reviews and other shared pages inherit home-1 context when activeHome is home-1
    (activeIsHome1 && !location.pathname.startsWith('/home') && !location.pathname.startsWith('/login') && !location.pathname.startsWith('/register') && !location.pathname.startsWith('/account'));

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer: Home Footer for Home, Home-1 Footer for Home-1 */}
      {isHome1 ? <Footer1 /> : <Footer />}
    </div>
  );
};

export default PublicLayout;

