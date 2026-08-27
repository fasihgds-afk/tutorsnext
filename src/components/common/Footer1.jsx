import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import Icon from './Icon.jsx';
import { footer } from '../../config/sectionIcons.js';

const Footer1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const home1Phone = SITE_CONFIG.phoneHome1 || SITE_CONFIG.phone;

  const handleHashLink = (e, hash) => {
    e.preventDefault();
    if (location.pathname === '/home-1' || location.pathname === '/home1' || location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(`/home-1#${hash}`);
    }
  };

  return (
    <footer className="w-full bg-slate-950 font-sans antialiased text-slate-300 pt-16 pb-10 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle emerald ambient glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 w-full relative z-10">

        {/* Top Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">

          {/* Column 1: Logo & Description (Span 2 on lg) */}
          <div className="lg:col-span-2 flex flex-col pr-0 lg:pr-8">
            {/* Brand Logo */}
            <Link to="/home-1" className="flex items-center mb-5 group w-fit">
              <img
                src={SITE_CONFIG.logo.footer.src}
                alt={SITE_CONFIG.logo.alt}
                className={SITE_CONFIG.logo.footer.className}
              />
            </Link>

            {/* Tagline */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-[340px] mb-6">
             Your trusted partner for high-quality academic tutoring service. We're here to support your academic success at every step. </p>

          </div>

          {/* Column 2: Our Services */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="/home-1#services" onClick={(e) => handleHashLink(e, 'services')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">Subject Tutoring</a></li>
              <li><a href="/home-1#services" onClick={(e) => handleHashLink(e, 'services')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">Test Preparation</a></li>
              <li><a href="/home-1#services" onClick={(e) => handleHashLink(e, 'services')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">Professional Guidance</a></li>
              <li><a href="/home-1#services" onClick={(e) => handleHashLink(e, 'services')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">Study Skills Coaching</a></li>
              <li><a href="/home-1#services" onClick={(e) => handleHashLink(e, 'services')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">Live Online Classes</a></li>
              <li><a href="/home-1#services" onClick={(e) => handleHashLink(e, 'services')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">Academic Support</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/home-1" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Home</Link></li>
              <li>
                <a href="/home-1#top-writers" onClick={(e) => handleHashLink(e, 'top-writers')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">
                  Top Tutors
                </a>
              </li>
              <li>
                <a href="/home-1#how-it-works" onClick={(e) => handleHashLink(e, 'how-it-works')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                  Student Reviews
                </Link>
              </li>
              <li>
                <a href="/home-1#services" onClick={(e) => handleHashLink(e, 'services')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">
                  All Services
                </a>
              </li>
              <li>
                <a href="/home-1#faqs" onClick={(e) => handleHashLink(e, 'faqs')} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={home1Phone.href} className="flex items-center gap-2.5 text-slate-400 hover:text-sky-400 text-xs sm:text-sm transition-colors">
                  <Icon icon={footer.phone} className="w-4 h-4 text-sky-400 shrink-0" />
                  {home1Phone.display}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.email.href} className="flex items-center gap-2.5 text-slate-400 hover:text-sky-400 text-xs sm:text-sm transition-colors">
                  <Icon icon={footer.email} className="w-4 h-4 text-sky-400 shrink-0" />
                  {SITE_CONFIG.email.display}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-slate-400 text-xs sm:text-sm">
                  <Icon icon={footer.chat} className="w-4 h-4 text-sky-400 shrink-0" />
                  24/7 Live Support Team
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-slate-400 text-xs sm:text-sm">
                  <Icon icon={footer.location} className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Office # 2, Choudhary Plaza, 2nd Floor, Plot 6/7 N Main Block Swan Garden , Islamabad , Islamabad Rural , Islamabad Capital Territory</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle Bar: Copyright, Payment Methods, Security Badges */}
        <div className="py-7 flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-slate-800/80">

          {/* Copyright */}
          <div className="text-slate-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} TutorsNext. All Rights Reserved.
          </div>

          {/* Payment Methods & Security */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">

            {/* We Accept Payments */}
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-xs font-semibold">We Accept:</span>
              <div className="flex items-center gap-2">
                {/* Visa */}
                <div className="bg-white px-2 py-1 rounded-md shadow-xs flex items-center justify-center h-6">
                  <span className="text-[11px] font-black italic tracking-tighter text-blue-900">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="bg-white px-2 py-1 rounded-md shadow-xs flex items-center justify-center h-6">
                  <div className="flex -space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-90"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-90"></div>
                  </div>
                </div>
                {/* American Express */}
                <div className="bg-white px-1.5 py-1 rounded-md shadow-xs flex items-center justify-center h-6">
                  <span className="text-[9px] font-bold text-blue-600 tracking-tighter">AMEX</span>
                </div>
                {/* Discover */}
                <div className="bg-white px-1.5 py-1 rounded-md shadow-xs flex items-center justify-center h-6">
                  <span className="text-[9px] font-extrabold text-orange-600 tracking-tighter">DISCOVER</span>
                </div>
                {/* PayPal */}
                <div className="bg-white px-2 py-1 rounded-md shadow-xs flex items-center justify-center h-6">
                  <span className="text-[10px] font-bold text-blue-700 italic">PayPal</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-6 bg-slate-800"></div>

            {/* Security Badges */}
            <div className="flex items-center gap-5">
              {/* SSL */}
              <div className="flex items-center gap-1.5 text-slate-300">
                <Icon icon={footer.ssl} className="w-4 h-4 text-sky-400" />
                <div className="leading-tight text-left">
                  <div className="text-[9.5px] font-bold text-slate-400">256-BIT SSL</div>
                  <div className="text-[10.5px] font-extrabold text-white">ENCRYPTED</div>
                </div>
              </div>

              {/* McAfee */}
              <div className="flex items-center gap-1.5 text-slate-300">
                <Icon icon={footer.secure} className="w-4 h-4 text-red-500" />
                <div className="leading-tight text-left">
                  <div className="text-[9.5px] font-bold text-slate-400">McAfee</div>
                  <div className="text-[10.5px] font-extrabold text-white">SECURE</div>
                </div>
              </div>

              {/* Norton */}
              <div className="flex items-center gap-1.5 text-slate-300">
                <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-[9.5px]">✓</div>
                <div className="leading-tight text-left">
                  <div className="text-[10px] font-bold text-white">Norton</div>
                  <div className="text-[9px] text-slate-400 uppercase">VERIFIED</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer1;
