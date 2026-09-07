import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, GraduationCap, BookOpen, Clock } from 'lucide-react';
import Icon from '../common/Icon';
import DiscountBadge from '../common/DiscountBadge';
import { hero } from '../../config/sectionIcons';
import {
  assignmentType,
  academicLevel,
  subject,
  deadline,
} from '../../config/dropdown-fields.config';

const perks = [
  { Icon: hero.perks[0], title: 'Expert Writers', sub: 'PhD & Master Level' },
  { Icon: hero.perks[1], title: 'On Time Delivery', sub: 'Your assignment is always on time' },
  { Icon: hero.perks[2], title: '100% Human-Written', sub: 'No AI,No Plagiarism -Guaranteed' },
  { Icon: hero.perks[3], title: '24/7 Support', sub: "We're Here For You" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [typeOfWork, setTypeOfWork] = useState('Short Essay');
  const [academicLvl, setAcademicLvl] = useState('Undergraduate');
  const [selectedSubject, setSelectedSubject] = useState('History');
  const [selectedDeadline, setSelectedDeadline] = useState('3 days / Aug 29, 2026 (11:06 PM)');

  const handleProceed = (e) => {
    e.preventDefault();
    const heroOrderData = {
      assignmentTypeLabel: typeOfWork,
      typeOfWork,
      academicLevelLabel: academicLvl,
      academicLevel: academicLvl,
      subjectLabel: selectedSubject,
      subject: selectedSubject,
      deadlineLabel: selectedDeadline,
      deadline: selectedDeadline,
      pages: 1,
      wordCount: '275 Words',
      savedAt: Date.now(),
    };
    localStorage.setItem('heroOrderData', JSON.stringify(heroOrderData));
    navigate('/Order/PlaceOrder');
  };

  return (
    <section className="w-full bg-surface-alt py-4 lg:py-8 px-4 sm:px-10 lg:px-16 xl:px-20 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative px-0 sm:px-4">

        {/* Cutout image between copy and form — TutorsPath overlap */}
        <div className="hidden lg:block absolute bottom-0 right-65 xl:right-80 z-10 w-100 h-145 pointer-events-none select-none">
          <img
            src="/images/hero.png"
            alt="Student"
            className="hero-edge-blend w-full h-full object-contain object-bottom"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-20">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col space-y-5 lg:space-y-6 max-w-sm mx-auto lg:max-w-xl lg:mx-0 w-full text-center lg:text-left">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-soft text-brand-purple px-4 py-1.5 rounded-full text-[12px] lg:text-[13px] font-semibold w-fit shadow-xs mx-auto lg:mx-0 hover:scale-105 transition-transform duration-300 cursor-default">
              <Icon icon={hero.trustBadge} className="w-4 h-4 text-brand-purple shrink-0" />
              <span>Trusted by 8,000+ Students Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[30px] sm:text-[32px] lg:text-[38px] font-bold text-text-dark leading-tight tracking-tight">
              Get Better Grades with{' '}
              <br />
              Expert{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-start to-brand-end">
                Academic Writing Services
              </span>
            </h1>

            {/* Subheading bullets */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-text-body">
              <span>Fast</span>
              <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span>AI Free</span>
              <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span>100% Original</span>
            </div>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 pt-1 w-full lg:max-w-102.5">
              {perks.map((f) => (
                <div key={f.title} className="group flex items-start gap-3">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-soft flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface group-hover:scale-110 transition-all duration-300">
                    <Icon icon={f.Icon} className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[12px] lg:text-[14px] font-bold text-text-dark leading-tight">{f.title}</h3>
                    <p className="text-[11px] text-text-body mt-0.5 leading-snug opacity-70">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rating Box */}
            <div className="bg-surface rounded-2xl p-3.5 shadow-md border border-card-border flex items-center justify-between gap-3 mt-1 w-full lg:max-w-107.5 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[17px] font-extrabold text-text-dark">4.8/5</span>
                  <div className="flex text-amber-400 text-[13px] gap-0.5 items-center">
                    <span>★</span><span>★</span><span>★</span><span>★</span>
                    {/* Half star for 4.8 */}
                    <span className="relative inline-block">
                      <span className="text-gray-300">★</span>
                      <span className="absolute inset-0 overflow-hidden w-[60%]">★</span>
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-text-body font-medium opacity-65">Based on 2,000+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Trustpilot */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50/80 border border-sky-200/60 shadow-xs hover:bg-sky-50 transition-colors">
                  <div className="w-4 h-4 rounded bg-[#00b67a] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[11px] text-text-dark tracking-tight">Trustpilot</span>
                </div>

                {/* reviews.io */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50/80 border border-sky-200/60 shadow-xs hover:bg-sky-50 transition-colors">
                  <div className="w-4 h-4 rounded bg-[#0e131f] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#00c48c]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[11px] text-text-dark tracking-tight">
                    reviews<span className="text-[#0284c7] font-black">.io</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT FORM COLUMN */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end pt-4 lg:pt-0 lg:pr-3">

            {/* Form Card */}
            <div className="bg-surface rounded-[20px] lg:rounded-3xl shadow-[0_8px_32px_rgba(2,132,199,0.13)] border border-card-border w-full max-w-105 lg:max-w-[390px] overflow-visible relative mt-8 hover:shadow-[0_16px_48px_rgba(2,132,199,0.18)] transition-shadow duration-300">

              {/* Banner Header */}
              <div className="absolute -top-5 left-4 right-4 z-30 bg-linear-to-r from-brand-start to-brand-end py-2.5 lg:py-3 px-4 text-center text-surface font-bold text-[12px] lg:text-[13px] tracking-wide rounded-xl shadow-lg">
                Calculate Price &amp; Order
              </div>

              <DiscountBadge />

              {/* Form Body */}
              <form onSubmit={handleProceed} className="pt-10 px-4 lg:px-5 pb-6 space-y-3">
                {/* Assignment Type */}
                <div className="group flex items-center gap-3">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                    <Icon icon={FileText} className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[11px] font-bold text-text-body block mb-0.5">Assignment Type</label>
                    <div className="relative">
                      <select
                        value={typeOfWork}
                        onChange={(e) => setTypeOfWork(e.target.value)}
                        className="w-full bg-surface-alt border border-primary-border rounded-xl px-3 py-2.5 text-[13px] text-text-dark font-medium focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 cursor-pointer appearance-none pr-8 truncate"
                      >
                        {assignmentType.groups.map((g) => (
                          <optgroup key={g.group} label={g.group}>
                            {g.options.map((o) => (
                              <option key={o.value} value={o.label}>
                                {o.label}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-text-body opacity-60">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Academic Level */}
                <div className="group flex items-center gap-3">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                    <Icon icon={GraduationCap} className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[11px] font-bold text-text-body block mb-0.5">Academic Level</label>
                    <div className="relative">
                      <select
                        value={academicLvl}
                        onChange={(e) => setAcademicLvl(e.target.value)}
                        className="w-full bg-surface-alt border border-primary-border rounded-xl px-3 py-2.5 text-[13px] text-text-dark font-medium focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 cursor-pointer appearance-none pr-8 truncate"
                      >
                        {academicLevel.options.map((o) => (
                          <option key={o.value} value={o.label}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-text-body opacity-60">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="group flex items-center gap-3">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                    <Icon icon={BookOpen} className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[11px] font-bold text-text-body block mb-0.5">Subject</label>
                    <div className="relative">
                      <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full bg-surface-alt border border-primary-border rounded-xl px-3 py-2.5 text-[13px] text-text-dark font-medium focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 cursor-pointer appearance-none pr-8 truncate"
                      >
                        {subject.groups.map((g) => (
                          <optgroup key={g.group} label={g.group}>
                            {g.options.map((o) => (
                              <option key={o.value} value={o.label}>
                                {o.label}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-text-body opacity-60">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Deadline */}
                <div className="group flex items-center gap-3">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                    <Icon icon={Clock} className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[11px] font-bold text-text-body block mb-0.5">Deadline</label>
                    <div className="relative">
                      <select
                        value={selectedDeadline}
                        onChange={(e) => setSelectedDeadline(e.target.value)}
                        className="w-full bg-surface-alt border border-primary-border rounded-xl px-3 py-2.5 text-[13px] text-text-dark font-medium focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 cursor-pointer appearance-none pr-8 truncate"
                      >
                        {deadline.options.map((o) => (
                          <option key={o.value} value={o.label}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-text-body opacity-60">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-fill-hover w-full mt-2 font-bold py-3 px-4 rounded-xl shadow-[0_4px_14px_rgba(2,132,199,0.35)] active:scale-[0.98] flex items-center justify-center gap-2 text-[14px] cursor-pointer text-white tracking-wide"
                >
                  <span>Continue to Order →</span>
                </button>

                {/* Security info */}
                <div className="pt-1 flex flex-col items-center gap-1 text-center">
                  <div className="flex items-center gap-1 text-[11px] text-text-body">
                    <Icon icon={hero.form.lock} className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Free Revisions • 100% Confidential • Instant Match</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
