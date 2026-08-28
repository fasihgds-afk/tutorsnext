import React from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useHomeContext } from '../../hooks/useHomeContext';
import Icon from '../common/Icon';
import { support as supportIcons } from '../../config/sectionIcons';

const features = [
  {
    id: 1,
    title: '24/7 Live Support',
    description: 'Our support team is available around the clock to assist you at any time.',
    badge: '24/7',
    badgeLabel: 'Always Here to Help',
  },
  {
    id: 2,
    title: '100% Confidentiality',
    description: 'Your personal information and sessions are kept completely secure with us.',
    badge: 'Secure',
    badgeLabel: 'Your Privacy Matters',
  },
  {
    id: 3,
    title: 'Unlimited Revisions',
    description: 'We offer unlimited revisions until you are 100% satisfied with our tutoring.',
    badge: 'Free',
    badgeLabel: 'Your Satisfaction',
  },
  {
    id: 4,
    title: '100% Satisfaction Guarantee',
    description: "Not happy? We'll make it right. Your success is 100% guaranteed.",
    badge: 'Top Rated',
    badgeLabel: 'Guaranteed Results',
  },
];

const SupportSection = () => {
  const { phone } = useHomeContext();

  return (
    <section className="w-full bg-surface-alt py-10 lg:py-14 px-4 sm:px-10 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1040px] mx-auto flex flex-col items-center">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-soft text-brand-purple px-4 py-1.5 rounded-full text-[12px] lg:text-[13px] font-semibold mb-4 shadow-xs border border-primary-border hover:scale-105 transition-transform duration-300 cursor-default">
          <Icon icon={supportIcons.badge} className="w-4 h-4 shrink-0" />
          <span>WE'VE GOT YOUR BACK</span>
        </div>

        {/* Heading */}
        <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-text-dark text-center tracking-tight leading-tight max-w-[600px] mb-2.5">
          We Support{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
            Your Success
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[13px] sm:text-[14px] text-text-body text-center max-w-[480px] mb-10 font-medium opacity-70 leading-relaxed">
          Our dedicated support team and resources ensure a smooth experience from start to finish.
        </p>

        {/* Main Grid */}
        <div className="w-full bg-surface rounded-[20px] border border-card-border shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-5 lg:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            {/* Left: Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={f.id}
                  className="group bg-surface-alt rounded-[16px] p-5 border border-card-border shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-primary-border transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-[12px] bg-primary-soft border border-primary-border flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface group-hover:scale-110 transition-all duration-300">
                      <Icon icon={supportIcons.cards[i]} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-text-dark font-bold text-[14px] mb-1 leading-tight">{f.title}</h3>
                      <p className="text-text-body text-[12px] leading-relaxed opacity-70">{f.description}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-card-border flex items-center justify-between">
                    <span className="text-[11px] text-brand-purple font-semibold">{f.badgeLabel}</span>
                    <span className="text-[10px] bg-primary-soft text-brand-purple border border-primary-border px-2 py-0.5 rounded font-bold">
                      {f.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Agent Illustration */}
            {/* Right: Agent Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <img
                src="/images/CTA-3.jfif"
                alt="Academic specialist"
                className="w-full max-w-[400px] h-auto object-contain"
              />
            </div>

          </div>
        </div>

        {/* Bottom Contact Banner */}
        <div className="relative w-full bg-gradient-to-r from-brand-start to-brand-end rounded-[20px] px-6 sm:px-10 py-7 overflow-hidden shadow-[0_12px_40px_rgba(2,132,199,0.25)] hover:shadow-[0_20px_50px_rgba(2,132,199,0.35)] transition-shadow duration-300">

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="relative shrink-0">
                <div className="w-[56px] h-[56px] rounded-full bg-surface flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                  <Icon icon={supportIcons.banner} className="w-7 h-7 text-brand-purple" />
                </div>
                <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-primary-200 border-2 border-brand-start rounded-full" />
              </div>
              <div>
                <h3 className="text-surface text-[18px] sm:text-[20px] font-extrabold tracking-tight leading-tight mb-1">
                  Have Questions? We're Here to Help!
                </h3>
                <p className="text-surface text-[13px] opacity-85">
                  Reach out to our support team anytime. We're just a click away.
                </p>
              </div>
            </div>

            {/* Right: Buttons + Trust */}
            <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full sm:w-auto">


                <a href={phone.href}
                  className="btn-fill-hover inline-flex items-center justify-center gap-2 text-[13.5px] font-bold px-5 py-2.5 rounded-[12px] w-full sm:w-auto whitespace-nowrap">
                  <span className="inline-flex items-center justify-center gap-2">
                    <Icon icon={supportIcons.trust[0]} className="w-4 h-4" />
                    {phone.display}
                  </span>
                </a>

                <a href={SITE_CONFIG.email.href}
                  className="btn-fill-hover-ghost inline-flex items-center justify-center gap-2 text-[13.5px] font-bold px-5 py-2.5 rounded-[12px] w-full sm:w-auto whitespace-nowrap">
                  <span className="inline-flex items-center justify-center gap-2">
                    <Icon icon={supportIcons.trust[1]} className="w-4 h-4" />
                    {SITE_CONFIG.email.display}
                  </span>
                </a>
              </div>

              {/* Trust meta */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 text-surface text-[12px] font-semibold opacity-90">
                <div className="flex items-center gap-1.5">
                  <Icon icon={supportIcons.trust[2]} className="w-4 h-4 shrink-0" />
                  Average Response: 2 Min
                </div>
                <div className="flex items-center gap-1.5">
                  <Icon icon={supportIcons.trust[3]} className="w-4 h-4 shrink-0" />
                  100% Confidential
                </div>
                <div className="flex items-center gap-1.5">
                  <Icon icon={supportIcons.trust[4]} className="w-4 h-4 shrink-0" />
                  No Obligation
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupportSection;
