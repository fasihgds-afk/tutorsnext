import React from 'react';
import Icon from '../common/Icon';
import { trustedBy } from '../../config/sectionIcons';

const stats = [
  { id: 1, number: '500+', title: 'Expert Writers', subtitle: "PhD & Master's Level Experts", Icon: trustedBy.stats[0] },
  { id: 2, number: '125+', title: 'Subjects Covered', subtitle: 'From Business to Engineering & More', Icon: trustedBy.stats[1] },
  { id: 3, number: '8.3K+', title: 'Oders Completed', subtitle: 'High Quality Assignment Delivered', Icon: trustedBy.stats[2] },
  { id: 4, number: '99%', title: 'Client Satisfaction', subtitle: 'Students Love Our Work & Support', Icon: trustedBy.stats[3] },
];

const TrustedBySection = () => {
  return (
    <section className="w-full bg-surface py-10 px-4 sm:px-10 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1040px] mx-auto">

        <div className="bg-surface rounded-[20px] shadow-xs border border-card-border flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 lg:px-10 py-7 gap-6 lg:gap-4 overflow-hidden hover:shadow-md transition-shadow duration-300">

          {/* Left: Badge + Heading */}
          <div className="w-full lg:w-[27%] flex flex-col justify-center shrink-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-primary-soft text-brand-purple px-3 py-1 rounded-full text-[11px] font-bold tracking-wide w-fit mb-3 border border-primary-border mx-auto lg:mx-0 hover:scale-105 transition-transform duration-300 cursor-default">
              <Icon icon={trustedBy.badge} className="w-3.5 h-3.5" strokeWidth={2.5} />
              RESULTS THAT MATTER
            </div>

            <h2 className="text-[15px] lg:text-[16px] font-semibold text-text-dark leading-snug tracking-tight mb-2.5">
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">Thousands.</span>
              <br />
              Proven by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">Results.</span>
            </h2>

            <p className="text-text-body text-[13px] leading-relaxed font-normal opacity-70">
              We're proud to be a top choice for students worldwide. Your success is our mission.
            </p>
          </div>

          {/* Stats — 2×2 mobile, 4-col desktop */}
          <div className="w-full lg:w-[52%] grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 lg:divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.id}
                className="group flex flex-col items-center text-center px-2 lg:px-3 py-3 lg:py-0 bg-surface-alt lg:bg-transparent rounded-xl lg:rounded-none border border-card-border lg:border-0 hover:-translate-y-1 lg:hover:translate-y-0 hover:shadow-sm lg:hover:shadow-none transition-all duration-300 cursor-default">
                <div className="w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-brand-purple mb-2 group-hover:bg-primary group-hover:text-surface group-hover:scale-110 transition-all duration-300">
                  <Icon icon={stat.Icon} className="w-5 h-5" />
                </div>
                <h3 className="text-[17px] lg:text-[18px] font-semibold text-text-dark leading-tight">{stat.number}</h3>
                <h4 className="text-[11px] lg:text-[12px] font-bold text-text-dark mt-0.5">{stat.title}</h4>
                <p className="text-[10px] lg:text-[10.5px] text-text-body mt-0.5 leading-tight opacity-60">{stat.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Student image — desktop only */}
          <div className="hidden lg:flex relative w-full lg:w-[18%] justify-end items-end min-h-[180px] shrink-0">
            {/* <div className="absolute right-0 bottom-0 w-[10px] h-[140px] bg-primary-soft rounded-full z-0" /> */}
            <img
              src="/images/CTA-2.png"
              alt="Student typing on laptop"
              className="relative z-10 max-h-[200px] object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
