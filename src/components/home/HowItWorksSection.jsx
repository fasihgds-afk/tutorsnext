import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import Icon from '../common/Icon';
import { howItWorks } from '../../config/sectionIcons';

const steps = [
  {
    id: 1,
    title: 'Place Your Order',
    description: 'Share your requirements, upload files, and provide instructions.',
    Icon: howItWorks.steps[0],
  },
  {
    id: 2,
    title: 'We Assign the Best Writer',
    description: 'We match your order with the most suitable expert in your subject.',
    Icon: howItWorks.steps[1],
  },
  {
    id: 3,
    title: 'Writing in Progress',
    description: 'Your writer researches, writes, and follows all your instructions.',
    Icon: howItWorks.steps[2],
  },
  {
    id: 4,
    title: 'Quality Check',
    description: 'Our quality assurance team reviews the paper for accuracy and quality.',
    Icon: howItWorks.steps[3],
  },
  {
    id: 5,
    title: 'On-Time Delivery',
    description: 'Receive your completed paper on time and review with confidence.',
    Icon: howItWorks.steps[4],
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-surface-alt py-10 px-4 sm:px-6 lg:px-8 xl:px-12" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 bg-primary-soft text-brand-purple px-3.5 py-1 rounded-full text-[13px] font-semibold mb-4 shadow-xs border border-primary-border hover:scale-105 transition-transform duration-300 cursor-default">
          <Icon icon={howItWorks.badge} className="w-3.5 h-3.5" />
          OUR SIMPLE PROCESS
        </div>

        {/* Heading */}
        <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-text-dark text-center tracking-tight leading-snug max-w-[800px] mb-2.5">
          How It{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">Works</span>
        </h2>

        <p className="text-[14px] sm:text-[15px] text-text-body text-center max-w-[500px] mb-10 font-medium opacity-70">
          Get high-quality writing in just 5 easy steps.
        </p>

        <div className="relative w-full">
          {/* Dashed connector line — desktop only */}
          <div className="hidden lg:block absolute top-[38px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-primary-border z-0" />

          {/* Mobile: vertical cards */}
          <div className="flex flex-col gap-3.5 lg:hidden">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group flex items-start gap-3.5 bg-surface rounded-2xl border border-card-border shadow-xs px-4 py-3.5 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
              >
                <div className="relative shrink-0">
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-xs z-10">
                    {step.id}
                  </span>
                  <div className="w-[52px] h-[52px] rounded-full bg-surface-alt border border-card-border flex items-center justify-center text-brand-purple group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Icon icon={step.Icon} className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex flex-col justify-center pt-0.5">
                  <h3 className="text-[14px] font-bold text-text-dark leading-snug">{step.title}</h3>
                  <p className="text-text-body text-[12px] leading-relaxed mt-0.5 opacity-70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: all 5 steps in 1 row (grid-cols-5) */}
          <div className="hidden lg:grid grid-cols-5 gap-4 xl:gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group flex flex-col items-center text-center hover:-translate-y-1.5 transition-transform duration-300 cursor-default px-1"
              >
                <div className="relative mb-4">
                  <span className="absolute -top-1.5 -right-1 w-6 h-6 rounded-full bg-brand-purple text-white text-[11px] font-bold flex items-center justify-center shadow-xs z-10">
                    {step.id}
                  </span>
                  <div className="w-[76px] h-[76px] rounded-full bg-surface shadow-[0_4px_18px_rgba(0,0,0,0.06)] border border-card-border flex items-center justify-center text-brand-purple group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_6px_24px_rgba(2,132,199,0.3)] transition-all duration-300">
                    <Icon icon={step.Icon} className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-[14.5px] font-bold text-text-dark mb-1 leading-snug">{step.title}</h3>
                <p className="text-text-body text-[12px] leading-relaxed opacity-70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 w-full flex justify-center">
          <Link
            to={SITE_CONFIG.routes.register}
            className="btn-fill-hover inline-flex items-center justify-center gap-2 font-semibold text-[14px] py-3 px-8 rounded-xl shadow-[0_4px_16px_rgba(2,132,199,0.3)] w-full max-w-xs lg:w-auto"
          >
            <span className="inline-flex items-center justify-center gap-2">
              Get Started Now <span className="text-base leading-none">&rarr;</span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
