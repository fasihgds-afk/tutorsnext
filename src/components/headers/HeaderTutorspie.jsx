import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useHomeContext } from '../../hooks/useHomeContext';
import Icon from '../common/Icon.jsx';
import { nav } from '../../config/sectionIcons.js';

const HeaderTutorspie = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { phone: currentPhone, handleHashLink } = useHomeContext();

  const onNavHashClick = (e, hash) => {
    handleHashLink(e, hash, () => setIsMobileMenuOpen(false));
  };

  const navItems = [
    { label: 'Home', href: '/', type: 'link' },
    { label: 'Contact', href: '/#contact', type: 'hash', hash: 'contact' },
    { label: 'Privacy', href: '/privacy', type: 'link' },
    { label: 'Terms', href: '/terms', type: 'link' }
  ];

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

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
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'hash' ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => onNavHashClick(e, item.hash)}
                  className="text-gray-700 hover:text-primary text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-700 hover:text-primary text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right: Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Phone */}
            <a
              href={currentPhone.href}
              className="flex items-center gap-2 text-primary hover:text-primary-hover font-medium text-sm transition-colors duration-200 no-underline"
              style={{ border: 'none', outline: 'none', textDecoration: 'none' }}
            >
              <span className="hidden lg:block">{currentPhone.display}</span>
            </a>

            {/* CTA Button */}
            <Link
              to={SITE_CONFIG.routes.register}
              className="btn-fill-hover flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm"
            >
              <Icon icon={nav.plus} className="w-4 h-4 shrink-0" strokeWidth={2.5} />
              <span>Get Started</span>
            </Link>
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {/* Navigation Items */}
              {navItems.map((item) => (
                item.type === 'hash' ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => onNavHashClick(e, item.hash)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              ))}

              {/* Phone & CTA */}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                <a
                  href={currentPhone.href}
                  className="flex items-center gap-2 px-3 py-2 text-primary font-semibold no-underline"
                  style={{ border: 'none', outline: 'none', textDecoration: 'none' }}
                >
                  <span>{currentPhone.display}</span>
                </a>

                <div className="px-3">
                  <Link
                    to={SITE_CONFIG.routes.register}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-fill-hover flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-full w-full"
                  >
                    <Icon icon={nav.plus} className="w-4 h-4" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderTutorspie;