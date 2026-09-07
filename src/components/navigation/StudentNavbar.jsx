import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useHomeContext } from '../../hooks/useHomeContext';
import Icon from '../common/Icon.jsx';
import { studentNav } from '../../config/sectionIcons.js';

import tokenManager from '../../services/auth/tokenManager';

const StudentNavbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { phone } = useHomeContext();

  const handleLogout = () => {
    tokenManager.clearAuth();
    navigate('/login');
  };

  return (
    <header className="w-full bg-white shadow-xs border-b border-slate-100 sticky top-0 z-50 relative">
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

          {/* Right: Phone, User Area & Logout (Desktop) */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Phone Number */}
            <a
              href={phone.href}
              className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors text-sm font-semibold py-2 px-3 rounded-xl hover:bg-slate-50"
            >
              <div className="w-8 h-8 rounded-full bg-sky-50 text-primary flex items-center justify-center">
                <Icon icon={studentNav.phone} className="w-4 h-4" />
              </div>
              <span>{phone.display}</span>
            </a>

            {/* Divider */}
            <div className="h-6 w-px bg-slate-200" />

            {/* Create Order Button */}
            <Link
              to="/Order/PlaceOrder"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Icon icon={studentNav.createOrder} className="w-4 h-4" />
              <span>Create Order</span>
            </Link>

            {/* Divider */}
            <div className="h-6 w-px bg-slate-200" />

            {/* User Area Button */}
            <Link
              to="/student/dashboard"
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-4 py-2.5 rounded-xl transition-all"
            >
              <Icon icon={studentNav.user} className="w-4 h-4 text-slate-600" />
              <span>User Area</span>
            </Link>

            {/* Logout Button */}
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-slate-600 hover:text-red-600 hover:bg-red-50 font-bold text-sm px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer"
              title="Logout from account"
            >
              <Icon icon={studentNav.logout} className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <Icon icon={studentNav.close} className="w-6 h-6" />
              ) : (
                <Icon icon={studentNav.menu} className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown — absolutely positioned so it overlaps content */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg z-50 px-4 py-4 flex flex-col gap-3">
          <a
            href={phone.href}
            className="flex items-center gap-2 text-slate-800 font-semibold text-sm py-2 px-3 rounded-lg bg-slate-50"
          >
            <Icon icon={studentNav.phone} className="w-4 h-4 text-primary" />
            <span>Call Support: {phone.display}</span>
          </a>

          {/* Create Order — Mobile */}
          <Link
            to="/Order/PlaceOrder"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-sm py-2.5 rounded-xl shadow-sm transition-all"
          >
            <Icon icon={studentNav.createOrder} className="w-4 h-4" />
            <span>Create Order</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/student/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm py-2.5 rounded-xl"
            >
              User Area
            </Link>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleLogout();
              }}
              className="flex-1 text-center bg-red-50 text-red-600 font-bold text-sm py-2.5 rounded-xl cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      )}

    </header>
  );
};

export default StudentNavbar;
