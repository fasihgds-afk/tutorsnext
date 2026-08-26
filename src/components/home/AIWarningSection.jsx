import React from 'react';
import Icon from '../common/Icon';
import { aiWarning } from '../../config/sectionIcons';

const warnings = [
  {
    id: 1,
    title: 'Flagged by Detection Tools',
    description:
      'Institutions use Turnitin & GPTZero to detect AI patterns. Submissions can trigger flags and academic review.',
    Icon: aiWarning.items[0],
  },
  {
    id: 2,
    title: 'Misconduct Investigations',
    description:
      'Submitting AI-generated content can violate academic honesty policies, leading to penalties or hearings.',
    Icon: aiWarning.items[1],
  },
  {
    id: 3,
    title: 'Defense & Oral Explanations',
    description:
      'Professors often require students to orally defend their thesis, explain methods, and justify cited arguments.',
    Icon: aiWarning.items[2],
  },
  {
    id: 4,
    title: 'Hallucinated Sources & Errors',
    description:
      'AI models fabricate citations and output factual inaccuracies, putting your academic grading in jeopardy.',
    Icon: aiWarning.items[3],
  },
];

const AIWarningSection = () => {
  return (
    <section
      id="ai-warning"
      className="w-full bg-surface-alt py-7 sm:py-9 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorations matching site theme */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-brand-end/5 to-transparent rounded-full blur-3xl translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-surface text-primary px-3 py-1 rounded-full text-[12px] font-semibold mb-2 shadow-xs border border-card-border">
          <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-brand-end flex items-center justify-center text-white text-[9px]">
            <Icon icon={aiWarning.badge} className="w-2 h-2" strokeWidth={3} />
          </span>
          IMPORTANT NOTICE
        </div>

        {/* Heading */}
        <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-text-dark text-center tracking-tight leading-snug max-w-[700px] mb-1.5">
          What Happens When You Submit{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
            AI-Generated Work?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[13px] sm:text-[14px] text-text-body/80 text-center max-w-[560px] mb-6 font-medium">
          Using AI-generated content puts your academic standing at serious risk. Here is what you should know.
        </p>

        {/* Compact Cards Grid - 4 Columns on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-[1100px]">
          {warnings.map((item, index) => (
            <div
              key={item.id}
              className="group bg-surface rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 border border-card-border hover:border-primary/40 flex flex-col justify-start relative hover:-translate-y-1"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/[0.03] to-brand-end/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-soft/80 border border-primary-border/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-3">
                <Icon icon={item.Icon} className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="text-[14px] font-bold text-text-dark mb-1 leading-snug group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              {/* Decorative gradient line */}
              <div className="w-8 h-[2px] bg-gradient-to-r from-brand-start to-brand-end mb-2 rounded-full group-hover:w-12 transition-all duration-300" />

              {/* Description */}
              <p className="text-text-body/75 text-[12px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom reference note */}
        <p className="mt-4 text-[11px] text-text-body/50 text-center font-medium">
          Academic sources & references available upon request.
        </p>

      </div>
    </section>
  );
};

export default AIWarningSection;
