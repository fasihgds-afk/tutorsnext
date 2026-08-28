import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useHomeContext } from '../../hooks/useHomeContext';
import Icon from '../common/Icon';
import { services } from '../../config/sectionIcons';

const ServicesSection = () => {
  const { phone } = useHomeContext();

  const documentTypes = [
    { label: 'Essays', href: SITE_CONFIG.routes.register },
    { label: 'Assignments', href: SITE_CONFIG.routes.register },
    { label: 'Research Papers', href: SITE_CONFIG.routes.register },
    { label: 'Term Papers', href: SITE_CONFIG.routes.register },
    { label: 'Homework', href: SITE_CONFIG.routes.register },
    { label: 'Thesis', href: SITE_CONFIG.routes.register },
    { label: 'Dissertation', href: SITE_CONFIG.routes.register },
    { label: 'and many more…', href: SITE_CONFIG.routes.register },
  ];

  const handleLiveChat = (e) => {
    e.preventDefault();
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    } else if (window.Tawk_API?.toggle) {
      window.Tawk_API.toggle();
    } else {
      window.location.href = SITE_CONFIG.whatsapp?.href || '#';
    }
  };

  return (
    <section className="w-full bg-surface py-10 lg:py-14 px-4 sm:px-6 lg:px-8" id="services">
      <div className="w-full max-w-[1040px] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-2.5">
            <span className="w-6 h-[2px] bg-primary inline-block"></span>
            WHAT WE OFFER
            <span className="w-6 h-[2px] bg-primary inline-block"></span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-text-dark tracking-tight leading-tight mb-2.5">
            Expert Help for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
              Every SUBJECT
            </span>
          </h2>

          <p className="text-[13.5px] sm:text-[14.5px] text-text-body max-w-[620px] leading-relaxed opacity-80 font-medium">
            From mathematics to aerospace engineering, we provide expert help in every academic writing area you need.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* Left Column: Academic Document Types & CTAs (Less height & Vertically centered) */}
          <div className="lg:col-span-7 bg-surface-alt rounded-[20px] p-5 sm:p-6 lg:p-7 border border-card-border shadow-xs flex flex-col justify-center hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
                <h3 className="text-[16px] sm:text-[17px] font-bold text-text-dark">
                  Academic Documents We Help With
                </h3>
              </div>

              {/* Document Type Tags / Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {documentTypes.map((doc, index) => (
                  <Link
                    key={index}
                    to={doc.href}
                    className="btn-fill-hover-outline inline-flex items-center gap-1.5 text-text-dark text-[13px] font-semibold px-3.5 py-1.5 rounded-lg shadow-2xs"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Icon icon={services.tags} className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{doc.label}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Action CTA Bar */}
            <div className="pt-4 border-t border-card-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <Link
                to={SITE_CONFIG.routes.register}
                className="btn-fill-hover inline-flex items-center justify-center gap-1.5 font-semibold text-[13.5px] py-2.5 px-5 rounded-lg shadow-[0_3px_10px_rgba(2,132,199,0.3)]"
              >
                <span className="inline-flex items-center justify-center gap-1.5">
                  <span>Order Now</span>
                  <span className="text-sm">&rarr;</span>
                </span>
              </Link>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-text-body">
                <a
                  href={phone.href}
                  className="flex items-center gap-1.5 hover:text-primary transition-colors py-0.5"
                >
                  <Icon icon={services.phone} className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Call us at: {phone.display}</span>
                </a>

                <span className="hidden sm:inline text-gray-300">|</span>

                <button
                  type="button"
                  onClick={handleLiveChat}
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-hover underline underline-offset-2 transition-colors cursor-pointer py-0.5"
                >
                  <Icon icon={services.chat} className="w-3.5 h-3.5 shrink-0" />
                  <span>Click here to Start Live Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated "Writing" Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-start via-sky-600 to-primary-700 rounded-[20px] p-5 sm:p-6 lg:p-7 text-white relative overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            {/* Background Glows */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner shrink-0">
                  <Icon icon={services.writing} className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-bold leading-tight">
                  Writing
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/90 text-[13.5px] sm:text-[14px] leading-relaxed font-normal mb-4">
                Hire a qualified writer belonging to your subject area to get 100% plagiarism-free writing at affordable prices.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2">
                {[
                  '100% Plagiarism-Free Guarantee',
                  'Affordable Student-Friendly Rates',
                  'Subject-Specific PhD & Master Writers',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/95 text-[12.5px] font-medium">
                    <Icon icon={services.check} className="w-3.5 h-3.5 text-sky-200 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-4 mt-4 border-t border-white/20">
              <Link
                to={SITE_CONFIG.routes.register}
                className="btn-fill-hover w-full inline-flex items-center justify-center gap-2 font-bold text-[13.5px] py-2.5 px-5 rounded-lg shadow-sm"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <span>Hire a Writer</span>
                  <span className="text-sm">&rarr;</span>
                </span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
