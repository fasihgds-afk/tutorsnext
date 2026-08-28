import React from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useHomeContext } from '../../hooks/useHomeContext';
import Icon from '../common/Icon';
import { helpBanner, hero, servicesHome1 } from '../../config/sectionIcons';

const trustPerks = [
  { label: 'Quick Response', Icon: helpBanner.perks[0] },
  { label: '100% Confidential', Icon: helpBanner.perks[1] },
  { label: 'No Obligation', Icon: helpBanner.perks[2] },
];

const HelpBannerSection = () => {
  const { phone } = useHomeContext();

  return (
    <section className="w-full bg-surface py-10 px-4 sm:px-10 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1040px] mx-auto">

        {/* Banner Card */}
        <div className="relative bg-gradient-to-r from-brand-start to-brand-end rounded-[20px] px-6 sm:px-10 py-8 overflow-hidden shadow-[0_12px_40px_rgba(2,132,199,0.25)] hover:shadow-[0_20px_50px_rgba(2,132,199,0.35)] transition-shadow duration-300">

          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left: Illustration + Text */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">

              {/* Books + Cap Illustration */}
              <div className="shrink-0 w-[90px] h-[90px] lg:w-[110px] lg:h-[105px] flex items-center justify-center relative hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                <Icon icon={servicesHome1.items[0]} className="w-14 h-14 lg:w-16 lg:h-16 text-white/90" strokeWidth={1.5} />
                <Icon icon={hero.perks[0]} className="w-8 h-8 lg:w-9 lg:h-9 text-white absolute -top-1 -right-1" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="flex flex-col text-center sm:text-left">
                <h3 className="text-surface text-[20px] sm:text-[22px] lg:text-[24px] font-extrabold tracking-tight leading-tight mb-1.5">
                  Not sure what you need?
                </h3>
                <p className="text-surface text-[13px] lg:text-[14px] font-normal opacity-85 max-w-[340px] leading-relaxed">
                  Our experts are here to help you choose the right solution for your academic success.
                </p>
              </div>
            </div>

            {/* Vertical divider — desktop only */}
            <div className="hidden lg:block w-[1px] h-16 bg-surface/20 shrink-0" />

            {/* Right: Buttons + Trust badges */}
            <div className="flex flex-col items-center lg:items-end gap-4">

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => { if (window.Tawk_API?.maximize) window.Tawk_API.maximize(); }}
                  className="btn-fill-hover inline-flex items-center justify-center gap-2 text-[14px] font-bold px-5 py-3 rounded-[12px] shadow-sm w-full sm:w-auto whitespace-nowrap cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <Icon icon={helpBanner.chat} className="w-4 h-4" />
                    Talk to an Expert
                  </span>
                </button>

                <a
                  href={phone.href}
                  className="btn-fill-hover-ghost inline-flex items-center justify-center gap-2 text-[14px] font-bold px-5 py-3 rounded-[12px] w-full sm:w-auto whitespace-nowrap"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <Icon icon={helpBanner.phone} className="w-4 h-4" />
                    Call Now
                  </span>
                </a>
              </div>

              {/* Trust features */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 text-surface text-[12px] font-semibold opacity-90">
                {trustPerks.map((perk) => (
                  <div key={perk.label} className="flex items-center gap-1.5">
                    <Icon icon={perk.Icon} className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                    {perk.label}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HelpBannerSection;
