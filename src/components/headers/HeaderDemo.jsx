import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useHomeContext } from '../../hooks/useHomeContext';
import Icon from '../common/Icon.jsx';
import { nav } from '../../config/sectionIcons.js';

const HeaderDemo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { phone: currentPhone, handleHashLink } = useHomeContext();

  const onNavHashClick = (e, hash) => {
    handleHashLink(e, hash, () => setIsMobileMenuOpen(false));
  };

  return (
    <header className="w-full bg-white shadow-lg border-b-2 border-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">

          {/* Left: Logo with Demo Badge */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src={SITE_CONFIG.logo.header.src}
                alt={SITE_CONFIG.logo.alt}
                className={SITE_CONFIG.logo.header.className}
              />
            </Link>
            <div className="hidden sm:block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary text-white">
                DEMO VERSION
              </span>
            </div>
          </div>

          {/* Center: Demo Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/#hero"
              onClick={(e) => onNavHashClick(e, 'hero')}
              className="text-gray-700 hover:text-primary text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              Home Demo
            </a>
            <a
              href="/#features"
              onClick={(e) => onNavHashClick(e, 'features')}
              className="text-gray-700 hover:text-primary text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              onClick={(e) => onNavHashClick(e, 'how-it-works')}
              className="text-gray-700 hover:text-primary text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              How It Works
            </a>
            <Link
              to="/reviews"
              className="text-gray-700 hover:text-primary text-sm font-semibold transition-colors duration-200"
            >
              Reviews
            </Link>
          </nav>

          {/* Right: Demo CTA only */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Try Demo Button */}
            <a
              href="/#hero"
              onClick={(e) => onNavHashClick(e, 'hero')}
              className="btn-fill-hover flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-full shadow-lg cursor-pointer"
            >
              <Icon icon={nav.plus} className="w-4 h-4 shrink-0" strokeWidth={2.5} />
              <span>Hire A Tutor</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <Icon icon={nav.close} className="w-6 h-6" />
              ) : (
                <Icon icon={nav.menu} className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t-2 border-primary shadow-xl">
              {/* Demo Badge - Mobile */}
              <div className="px-3 py-2 sm:hidden">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary text-white">
                  DEMO VERSION
                </span>
              </div>

              {/* Navigation Items */}
              <a
                href="/#hero"
                onClick={(e) => onNavHashClick(e, 'hero')}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                Home Demo
              </a>
              <a
                href="/#features"
                onClick={(e) => onNavHashClick(e, 'features')}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                Features
              </a>
              <a
                href="/#how-it-works"
                onClick={(e) => onNavHashClick(e, 'how-it-works')}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                How It Works
              </a>
              <Link
                to="/reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
              >
                Reviews
              </Link>

              {/* Demo CTA */}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                <div className="px-3">
                  <a
                    href="/#hero"
                    onClick={(e) => {
                      onNavHashClick(e, 'hero');
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-fill-hover flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-full w-full cursor-pointer"
                  >
                    <Icon icon={nav.plus} className="w-4 h-4" />
                    <span>Hire A Tutor</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderDemo;