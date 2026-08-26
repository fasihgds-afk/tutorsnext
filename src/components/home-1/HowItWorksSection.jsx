import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import Icon from '../common/Icon';
import { howItWorksHome1 } from '../../config/sectionIcons';

const steps = [
  {
    id: 1, title: 'Place Your Order',
    description: 'Share your requirements, upload files, and provide instructions.',
  },
  {
    id: 2, title: 'We Assign the Tutors',
    description: 'We match your guidelines with the most suitable expert in your subject.',
  },
  {
    id: 3, title: 'Tutoring in Progress',
    description: 'A dedicated tutor will connect with you until you grasp the concept.',
  },
  {
    id: 4, title: 'Quality Check',
    description: 'Our quality assurance team reviews the tutoring session for accuracy and quality.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-surface-alt py-10 px-4 sm:px-10 lg:px-16 xl:px-20" id="how-it-works">
      <div className="w-full max-w-[1040px] mx-auto flex flex-col items-center">

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 bg-primary-soft text-brand-purple px-3.5 py-1 rounded-full text-[13px] font-semibold mb-4 shadow-xs border border-primary-border hover:scale-105 transition-transform duration-300 cursor-default">
          <Icon icon={howItWorksHome1.badge} className="w-3.5 h-3.5" />
          OUR SIMPLE PROCESS
        </div>

        {/* Heading */}
        <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-text-dark text-center tracking-tight leading-snug max-w-[800px] mb-2.5">
          How It{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">Works</span>
        </h2>

        <p className="text-[14px] sm:text-[15px] text-text-body text-center max-w-[500px] mb-10 font-medium opacity-70">
          Get high-quality tutoring in just 4 easy steps.
        </p>

        <div className="relative w-full">
          {/* Dashed connector — desktop only */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-primary-border z-0" />

          {/* Mobile: vertical cards */}
          <div className="flex flex-col gap-4 lg:hidden">
            {steps.map((step, i) => (
              <div key={step.id}
                className="group flex items-start gap-4 bg-surface rounded-2xl border border-card-border shadow-sm px-4 py-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="relative shrink-0">
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-surface text-[10px] font-bold flex items-center justify-center shadow-sm z-10">
                    {step.id}
                  </span>
                  <div className="w-[60px] h-[60px] rounded-full bg-surface-alt border border-card-border flex items-center justify-center text-brand-purple group-hover:bg-primary group-hover:text-surface group-hover:scale-110 transition-all duration-300">
                    <Icon icon={howItWorksHome1.steps[i]} className="w-9 h-9" />
                  </div>
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <h3 className="text-[14px] font-bold text-text-dark leading-snug">{step.title}</h3>
                  <p className="text-text-body text-[12px] leading-relaxed mt-1 opacity-70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 4-col grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={step.id}
                className="group flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 cursor-default">
                <div className="relative mb-5">
                  <span className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-brand-purple text-white text-[11px] font-bold flex items-center justify-center shadow-sm z-10">
                    {step.id}
                  </span>
                  <div className="w-[84px] h-[84px] rounded-full bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-card-border flex items-center justify-center text-brand-purple group-hover:bg-primary group-hover:text-surface group-hover:shadow-[0_8px_30px_rgba(2,132,199,0.3)] transition-all duration-300">
                    <Icon icon={howItWorksHome1.steps[i]} className="w-9 h-9" />
                  </div>
                </div>
                <h3 className="text-[15px] font-bold text-text-dark mb-1.5 leading-snug">{step.title}</h3>
                <p className="text-text-body text-[12px] leading-relaxed max-w-[180px] opacity-70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 w-full flex justify-center">
          <Link to={SITE_CONFIG.routes.login}
            className="btn-fill-hover inline-flex items-center justify-center gap-2 font-semibold text-[14px] py-3 px-8 rounded-[12px] shadow-[0_4px_16px_rgba(2,132,199,0.3)] w-full max-w-xs lg:w-auto">
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
