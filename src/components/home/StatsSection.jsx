import React from 'react';
import Icon from '../common/Icon';
import { stats as statsIcons } from '../../config/sectionIcons';

const stats = [
  { id: 1, number: '500+', label: 'Expert Writers', Icon: statsIcons.items[0] },
  { id: 2, number: '125+', label: 'Subjects Covered', Icon: statsIcons.items[1] },
  { id: 3, number: '8.3K+', label: 'Satisfied Student', Icon: statsIcons.items[2] },
  { id: 4, number: '99%', label: 'Student Satisfaction', Icon: statsIcons.items[3] },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-surface-alt pb-10 pt-2 px-4 sm:px-10 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1040px] mx-auto">

        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {stats.map((stat) => (
            <div key={stat.id}
              className="group bg-surface rounded-2xl border border-card-border shadow-sm px-4 py-4 flex items-center gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
              <div className="w-11 h-11 rounded-xl bg-primary-soft border border-primary-border flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Icon icon={stat.Icon} className="w-7 h-7" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[18px] font-bold text-text-dark leading-tight tracking-tight">{stat.number}</span>
                <span className="text-[11px] font-medium text-text-body opacity-70 leading-tight mt-0.5">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: single row */}
        <div className="hidden md:flex bg-surface rounded-[20px] shadow-xs border border-card-border px-6 sm:px-10 lg:px-12 py-7 items-center justify-between gap-0 divide-x divide-gray-100 hover:shadow-md transition-shadow duration-300">
          {stats.map((stat, idx) => (
            <div key={stat.id}
              className={`group flex items-center gap-4 flex-1 justify-center cursor-default ${idx !== 0 ? 'pl-6 lg:pl-10' : ''} ${idx !== stats.length - 1 ? 'pr-6 lg:pr-10' : ''}`}>
              <div className="w-12 h-12 rounded-xl bg-primary-soft border border-primary-border flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Icon icon={stat.Icon} className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] lg:text-[22px] font-bold text-text-dark leading-tight tracking-tight">{stat.number}</span>
                <span className="text-[13px] sm:text-[14px] font-medium text-text-body opacity-70 mt-0.5 whitespace-nowrap">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
