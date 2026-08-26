import React from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import Icon from '../common/Icon';
import { supportBanner } from '../../config/sectionIcons';

const SupportBannerSection = () => {
  return (
    <section className="w-full bg-surface py-10 px-4 sm:px-10 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1040px] mx-auto">

        {/* Banner Card */}
        <div className="relative bg-gradient-to-r from-brand-start to-brand-end rounded-[20px] px-6 sm:px-10 py-8 overflow-hidden shadow-[0_12px_40px_rgba(2,132,199,0.25)] hover:shadow-[0_20px_50px_rgba(2,132,199,0.35)] transition-shadow duration-300">

          {/* Subtle dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">

            {/* Left: Icon + Text */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">

              {/* Support Avatar */}
              <div className="relative shrink-0">
                <div className="w-[64px] h-[64px] rounded-full bg-surface flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                  <Icon icon={supportBanner.avatar} className="w-8 h-8 text-brand-purple" />
                </div>
                {/* Online badge */}
                <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-primary-200 border-2 border-brand-start flex items-center justify-center">
                  <Icon icon={supportBanner.online} className="w-2.5 h-2.5 text-surface fill-current" />
                </div>
              </div>

              {/* Heading + Subtitle */}
              <div className="flex flex-col justify-center">
                <h3 className="text-surface text-[20px] sm:text-[22px] lg:text-[24px] font-extrabold tracking-tight leading-tight mb-1.5">
                  Have Questions? We're Here to Help!
                </h3>
                <p className="text-surface text-[13px] lg:text-[14px] font-normal opacity-85">
                  Our support team is available 24/7 to assist you at any stage.
                </p>
              </div>
            </div>

            {/* Right: Phone + Email in one row */}
            <div className="flex flex-row items-center gap-3 flex-wrap justify-center sm:justify-end">

              {/* Phone */}
              <a
                href={SITE_CONFIG.phone.href}
                className="btn-fill-hover inline-flex items-center justify-center gap-2 text-[14px] font-bold px-5 py-2.5 rounded-[12px] shadow-sm whitespace-nowrap"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon icon={supportBanner.phone} className="w-4 h-4" />
                  {SITE_CONFIG.phone.display}
                </span>
              </a>

              {/* Email */}
              <a
                href={SITE_CONFIG.email.href}
                className="btn-fill-hover-ghost inline-flex items-center justify-center gap-2 text-[14px] font-bold px-5 py-2.5 rounded-[12px] whitespace-nowrap"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon icon={supportBanner.email} className="w-4 h-4" />
                  {SITE_CONFIG.email.display}
                </span>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupportBannerSection;
