import React from 'react';
import { SITE_CONFIG } from '../../../config/siteConfig';
import Icon from '../../../components/common/Icon.jsx';
import { reviews } from '../../../config/sectionIcons.js';

const activeHomeVal = String(SITE_CONFIG.activeHome || '').trim().toLowerCase();
const isHome1 = activeHomeVal === 'home-1' || activeHomeVal === 'home1' || activeHomeVal === '1';
const currentPhone = isHome1 ? (SITE_CONFIG.phoneHome1 || SITE_CONFIG.phone) : (SITE_CONFIG.phoneHome || SITE_CONFIG.phone);

const ReviewsSupportWidget = () => {
  return (
    <div className="bg-white rounded-[20px] border border-[#f1f5f9] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-3">

      {/* Header bar — same style as WhyChooseUs */}
      <div className="bg-primary text-white text-center py-2.5 rounded-[12px] font-black text-[14px] tracking-wide">
        Need Assistance?
      </div>

      {/* Subtitle */}
      <p className="text-[#64748b] text-[13px] text-center font-medium">
        Our support team is available <span className="text-primary font-bold">24/7</span>
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-2 pt-1">
        <a
          href={currentPhone.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-fill-hover-outline flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold"
        >
          <span className="inline-flex items-center gap-2.5">
            <Icon icon={reviews.phone} className="w-4 h-4 text-primary shrink-0" />
            Call {currentPhone.display}
          </span>
        </a>

        <button
          type="button"
          onClick={() => { if (window.Tawk_API?.maximize) window.Tawk_API.maximize(); }}
          className="btn-fill-hover flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold cursor-pointer w-full"
        >
          <span className="inline-flex items-center gap-2.5">
            <Icon icon={reviews.chat} className="w-4 h-4 shrink-0" />
            Live Chat
          </span>
        </button>

        <a
          href={SITE_CONFIG.email.href}
          className="btn-fill-hover-outline flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold"
        >
          <span className="inline-flex items-center gap-2.5">
            <Icon icon={reviews.email} className="w-4 h-4 text-primary shrink-0" />
            {SITE_CONFIG.email.display}
          </span>
        </a>
      </div>

    </div>
  );
};

export default ReviewsSupportWidget;
