import React from 'react';
import Icon from '../common/Icon';
import { guarantee } from '../../config/sectionIcons';

const guarantees = [
  { id: 1, title: '100% Money Back', description: 'Not satisfied? Get a full refund.', Icon: guarantee.items[0] },
  { id: 2, title: '100% Satisfaction', description: 'We ensure top quality work every single time.', Icon: guarantee.items[1] },
  { id: 3, title: 'Your Privacy', description: 'Your information is always kept secure.', Icon: guarantee.items[2] },
  { id: 4, title: 'No Hidden Charges', description: 'What you see is what you pay. No surprises.', Icon: guarantee.items[3] },
];

const GuaranteeSection = () => {
  return (
    <section className="w-full bg-surface py-10 px-4 sm:px-10 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1040px] mx-auto">

        <div className="bg-surface rounded-[20px] shadow-xs border border-card-border flex flex-col lg:flex-row items-center justify-between px-5 sm:px-7 lg:px-9 py-5 gap-5 lg:gap-2 hover:shadow-md transition-shadow duration-300">

          {/* Left: Shield + Title */}
          <div className="w-full lg:w-[22%] flex items-center gap-3 shrink-0">
            <div className="w-[44px] h-[44px] bg-primary rounded-[12px] flex items-center justify-center text-surface shrink-0 shadow-[0_4px_12px_rgba(2,132,199,0.3)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(2,132,199,0.4)] transition-all duration-300">
              <Icon icon={guarantee.badge} className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <h2 className="text-[15px] lg:text-[16px] font-extrabold text-text-dark leading-tight">
              Our Guarantee,<br />Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">Success</span>
            </h2>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:block w-[1px] h-[50px] bg-gray-200 shrink-0 mx-3" />

          {/* 2×2 on mobile, 4-col on desktop */}
          <div className="w-full lg:w-[74%] grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
            {guarantees.map((item) => (
              <div key={item.id}
                className="group flex items-start gap-2.5 bg-surface-alt lg:bg-transparent rounded-xl lg:rounded-none border border-card-border lg:border-0 p-3 lg:p-0 hover:-translate-y-1 hover:shadow-sm lg:hover:shadow-none lg:hover:translate-y-0 transition-all duration-300">
                <div className="text-brand-purple shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300">
                  <Icon icon={item.Icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[12px] font-bold text-text-dark mb-0.5 leading-snug">{item.title}</h3>
                  <p className="text-text-body text-[11px] leading-relaxed opacity-70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
