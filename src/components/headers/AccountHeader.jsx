import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useHomeContext } from '../../hooks/useHomeContext';
import Icon from '../common/Icon.jsx';
import { studentNav } from '../../config/sectionIcons.js';
import tokenManager from '../../services/auth/tokenManager';

const AccountHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { phone } = useHomeContext();
  
  const isAuthenticated = tokenManager.isAuthenticated();

  const handleLogout = () => {
    tokenManager.clearAuth();
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  // Navigation items based on authentication status
  const getNavigationItems = () => {
    if (isAuthenticated) {
      return [
        { label: 'Dashboard', href: '/student/dashboard', icon: studentNav.user },
        { label: 'Create Order', href: '/Order/PlaceOrder', icon: studentNav.createOrder },
        { label: 'Account', href: '/student/account', icon: studentNav.user },
      ];
    } else {
      return [
        { label: 'Login', href: '/login', icon: studentNav.user },
        { label: 'Sign Up', href: '/register', icon: studentNav.createOrder },
      ];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <header className="w-full bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src={SITE_CONFIG.logo.header.src}
                alt={SITE_CONFIG.logo.alt}
                className={SITE_CONFIG.logo.header.className}
              />
            </Link>
          </div>

          {/* Center: Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  <Icon icon={item.icon} className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Phone & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Phone */}
            <a
              href={phone.href}
              className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors text-sm font-semibold py-2 px-3 rounded-xl hover:bg-slate-50"
              style={{ border: 'none', outline: 'none', textDecoration: 'none' }}
            >
              <span className="hidden xl:block">{phone.display}</span>
            </a>

            {isAuthenticated && (
              <>
                {/* Divider */}
                <div className="h-6 w-px bg-slate-200" />

                {/* Logout Button */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-slate-600 hover:text-red-600 hover:bg-red-50 font-semibold text-sm px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  title="Logout from account"
                >
                  <Icon icon={studentNav.logout} className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <Icon icon={studentNav.close} className="w-6 h-6" />
              ) : (
                <Icon icon={studentNav.menu} className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white border-t border-slate-200 shadow-lg">
              
              {/* Navigation Items */}
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    <Icon icon={item.icon} className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="border-t border-slate-200 pt-3 mt-3 space-y-3">
                {/* Phone */}
                <a
                  href={phone.href}
                  className="flex items-center gap-3 px-3 py-2 text-slate-800 font-semibold text-sm rounded-lg bg-slate-50"
                  style={{ border: 'none', outline: 'none', textDecoration: 'none' }}
                >
                  <Icon icon={studentNav.phone} className="w-4 h-4 text-primary" />
                  <span>Call Support: {phone.display}</span>
                </a>

                {/* Logout - Mobile (if authenticated) */}
                {isAuthenticated && (
                  <div className="px-3">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 font-bold text-sm py-3 rounded-xl transition-colors cursor-pointer hover:bg-red-100"
                    >
                      <Icon icon={studentNav.logout} className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Export as SiteHeader as mentioned in the requirements
export { AccountHeader as SiteHeader };
export default AccountHeader;