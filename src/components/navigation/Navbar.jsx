import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useHomeContext } from '../../hooks/useHomeContext';
import Icon from '../common/Icon.jsx';
import { nav } from '../../config/sectionIcons.js';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isHome1, phone: currentPhone, handleHashLink } = useHomeContext();

  const onNavHashClick = (e, hash) => {
    handleHashLink(e, hash, () => setIsMobileMenuOpen(false));
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={SITE_CONFIG.logo.header.src}
              alt={SITE_CONFIG.logo.alt}
              className={SITE_CONFIG.logo.header.className}
            />
          </Link>

          {/* Center: Nav Links — only on xl+ */}
          <nav className="hidden xl:flex items-center gap-6">
            <a
              href="/#top-writers"
              onClick={(e) => handleHashLink(e, 'top-writers')}
              className="text-sm text-gray-700 font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              {isHome1 ? 'Top Tutors' : 'Top Writers'}
            </a>
            <a
              href="/#how-it-works"
              onClick={(e) => handleHashLink(e, 'how-it-works')}
              className="text-sm text-gray-700 font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              How It Works
            </a>
            <Link to="/reviews" className="text-sm text-gray-700 font-medium hover:text-primary transition-colors whitespace-nowrap">
              Reviews
            </Link>
            <a
              href="/#services"
              onClick={(e) => handleHashLink(e, 'services')}
              className="text-sm text-gray-700 font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="/#faqs"
              onClick={(e) => handleHashLink(e, 'faqs')}
              className="text-sm text-gray-700 font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              FAQs
            </a>
          </nav>

          {/* Right: Phone + Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Phone — only show on xl */}
            <a
              href={currentPhone.href}
              className="hidden xl:flex items-center gap-1.5 text-primary font-medium text-sm hover:text-primary-hover transition-colors whitespace-nowrap"
            >
              <Icon icon={nav.phone} className="w-4 h-4 shrink-0" />
              <span>{currentPhone.display}</span>
            </a>

            {/* Hire A Writer / Tutor — hidden on Home-1 */}
            {!isHome1 && (
              <Link
                to={SITE_CONFIG.routes.register}
                className="btn-fill-hover flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full shadow-sm whitespace-nowrap"
              >
                <span className="inline-flex items-center gap-1.5">
                  <Icon icon={nav.plus} className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
                  <span>{isHome1 ? 'Hire A Tutor' : 'Hire A Writer'}</span>
                </span>
              </Link>
            )}

            {/* Login — hidden on Home-1; replaced with scroll-to-form CTA */}
            {isHome1 ? (
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('hero');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap border-2 border-primary text-primary bg-primary-soft hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Get Started
              </button>
            ) : (
              <Link
                to={SITE_CONFIG.routes.login}
                className="btn-fill-hover-outline flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap"
              >
                <span className="inline-flex items-center gap-2">
                  <span>Login</span>
                  <Icon icon={nav.user} className="w-4 h-4 shrink-0" />
                </span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2"
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
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            <a
              href="/#top-writers"
              onClick={(e) => onNavHashClick(e, 'top-writers')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50 cursor-pointer"
            >
              {isHome1 ? 'Top Tutors' : 'Top Writers'}
            </a>
            <a
              href="/#how-it-works"
              onClick={(e) => onNavHashClick(e, 'how-it-works')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50 cursor-pointer"
            >
              How It Works
            </a>
            <Link
              to="/reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
            >
              Reviews
            </Link>
            <a
              href="/#services"
              onClick={(e) => onNavHashClick(e, 'services')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50 cursor-pointer"
            >
              Services
            </a>
            <a
              href="/#faqs"
              onClick={(e) => onNavHashClick(e, 'faqs')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50 cursor-pointer"
            >
              FAQs
            </a>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
              <a
                href={currentPhone.href}
                className="flex items-center space-x-2 text-primary font-semibold"
              >
                <Icon icon={nav.phone} className="w-5 h-5" />
                <span>{currentPhone.display}</span>
              </a>
              {/* Hire A Writer / Tutor — hidden on Home-1 */}
              {!isHome1 && (
                <Link
                  to={SITE_CONFIG.routes.register}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-fill-hover flex items-center justify-center gap-2 font-semibold px-5 py-2.5 rounded-full"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon icon={nav.plus} className="w-4 h-4" />
                    <span>{isHome1 ? 'Hire A Tutor' : 'Hire A Writer'}</span>
                  </span>
                </Link>
              )}
              {/* Login — hidden on Home-1; replaced with scroll-to-form CTA */}
              {isHome1 ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById('hero');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 50);
                  }}
                  className="flex items-center justify-center rounded-full px-5 py-2 font-semibold border-2 border-primary text-primary bg-primary-soft hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Get Started
                </button>
              ) : (
                <Link
                  to={SITE_CONFIG.routes.login}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-fill-hover-outline flex items-center justify-center rounded-full px-5 py-2 font-semibold"
                >
                  <span className="inline-flex items-center gap-2">
                    <span>Login</span>
                    <Icon icon={nav.user} className="w-5 h-5" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
