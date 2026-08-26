import React from 'react';
import Icon from '../../../components/common/Icon.jsx';
import { auth } from '../../../config/sectionIcons.js';

const perks = [
  {
    icon: auth.perks[0],
    title: 'Verified Experts',
    sub: 'PhD & Master Level Tutors',
  },
  {
    icon: auth.perks[1],
    title: 'On Time Delivery',
    sub: 'Always meeting deadlines',
  },
  {
    icon: auth.perks[2],
    title: '100% Confidential',
    sub: 'Your information and tutoring sessions are always protected.',
  },
  {
    icon: auth.perks[3],
    title: '24/7 Support',
    sub: "We're always here for you",
  },
];

const RegisterPerks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 w-full">
      {perks.map((f) => (
        <div key={f.title} className="group flex items-start gap-3 bg-white/70 backdrop-blur-xs p-2.5 sm:p-3 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md hover:border-sky-200 transition-all duration-300">
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-soft flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface group-hover:scale-105 transition-all duration-300">
            <Icon icon={f.icon} className="w-4 h-4 lg:w-5 lg:h-5" />
          </div>
          <div className="text-left min-w-0">
            <h3 className="text-[13px] lg:text-[14px] font-bold text-text-dark leading-tight">{f.title}</h3>
            <p className="text-[11px] text-text-body mt-0.5 leading-snug opacity-70">{f.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegisterPerks;
