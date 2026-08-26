import React from 'react';
import Icon from '../common/Icon';
import { features as featuresIcons } from '../../config/sectionIcons';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Expert Tutors',
      description: 'Advanced degree holders with subject-matter expertise and years of academic tutoring experience.',
    },
    {
      id: 2,
      title: '100% Personalized & Results-Focused',
      description: 'Every session is tailored to your goals and learning needs to help you truly understand and excel.',
    },
    {
      id: 3,
      title: 'Personalized Learning Always',
      description: 'We value your time. Get focused, engaging tutoring tailored to your learning needs, every time.',
    },
    {
      id: 4,
      title: 'Personalized Support',
      description: 'Your progress is our priority. Get personalized guidance, feedback, and support tailored to your learning goals.',
    },
    {
      id: 5,
      title: 'Secure & Confidential',
      description: 'Your personal information and live sessions are 100% secure and confidential.',
    },
    {
      id: 6,
      title: '24/7 Live Support',
      description: 'Friendly customer support available around the clock to assist you with any questions.',
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fc] py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-purple/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">

        {/* Top Pill Badge - Enhanced */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-brand-purple px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4 shadow-sm border border-primary-border/60">
          <span className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-purple to-primary flex items-center justify-center text-white text-[10px]">
            <Icon icon={featuresIcons.badge} className="w-2.5 h-2.5" />
          </span>
          WHY CHOOSE TUTORSPATH
        </div>

        {/* Main Heading - Enhanced with subtle underline */}
        <div className="relative mb-2.5">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-gray-900 text-center tracking-tight leading-snug max-w-[800px]">
            What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-primary">
              Sets Us
            </span>{' '}
            Apart
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-purple/40 to-primary/40 rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[15px] text-gray-600 text-center max-w-[600px] mb-9 font-medium mt-1">
          We go beyond tutoring. We deliver excellence, every time.
        </p>

        {/* Cards Grid - Modernized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1040px]">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 hover:border-brand-purple/20 flex flex-col items-start gap-4 relative hover:-translate-y-1"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-purple/[0.03] to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon - Enhanced with gradient and glow */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-soft border border-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-primary group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-brand-purple/20 transition-all duration-300">
                <Icon icon={featuresIcons.items[index]} className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                {/* Title */}
                <h3 className="text-[15px] font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-brand-purple transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Decorative gradient line */}
                <div className="w-10 h-[2.5px] bg-gradient-to-r from-brand-purple to-primary mb-2.5 rounded-full group-hover:w-14 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-gray-500 text-[12px] leading-relaxed mb-3.5">
                  {feature.description}
                </p>

                {/* Link - Enhanced with arrow animation */}
                <button
                  type="button"
                  onClick={() => { if (window.Tawk_API?.maximize) window.Tawk_API.maximize(); }}
                  className="btn-fill-hover inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg cursor-pointer"
                >
                  <span className="inline-flex items-center gap-1.5">
                    Learn more
                    <span className="text-[14px]">&rarr;</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
