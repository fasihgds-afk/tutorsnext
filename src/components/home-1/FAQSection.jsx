import React, { useState } from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import Icon from '../common/Icon';
import { faq as faqIcons, testimonials as testimonialsIcons } from '../../config/sectionIcons';

const faqs = [
  {
    id: 1,
    question: 'What subjects do TutorsNext tutors teach?',
    answer:
      'We offer tutoring across a wide range of subjects, including Mathematics, Science, English, Computer Science, Economics, and more, from school level through university.',
  },
  {
    id: 2,
    question: 'Are the tutoring sessions conducted online?',
    answer:
      'Yes. TutorsNext provides convenient online tutoring sessions, allowing students to learn from qualified tutors from anywhere in the world.',
  },
  {
    id: 3,
    question: 'Can I choose my own tutor?',
    answer:
      'Yes. You can explore available tutors based on their subject expertise, academic level, experience, and availability, then choose the tutor who best fits your needs.',
  },
  {
    id: 4,
    question: 'How long is each tutoring session?',
    answer:
      "Session length can vary depending on the student's requirements. You can select the duration that works best for your learning goals when booking your session.",
  },
  {
    id: 5,
    question: 'Can tutoring help me prepare for exams?',
    answer:
      'Absolutely. Our tutors can provide personalized exam preparation, help identify areas where you need improvement, explain difficult concepts, and develop a focused study plan.',
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faqs" className="w-full bg-surface py-10 lg:py-14 px-4 sm:px-10 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1040px] mx-auto flex flex-col items-center">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-soft text-brand-purple px-4 py-1.5 rounded-full text-[12px] lg:text-[13px] font-semibold mb-4 shadow-xs border border-primary-border hover:scale-105 transition-transform duration-300 cursor-default">
          <Icon icon={faqIcons.badge} className="w-4 h-4 shrink-0" />
          <span>FAQS</span>
        </div>

        {/* Heading */}
        <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-text-dark text-center tracking-tight leading-tight max-w-[600px] mb-2.5">
          Frequently Asked{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
            Questions
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[13px] sm:text-[14px] text-text-body text-center max-w-[480px] mb-10 font-medium opacity-70 leading-relaxed">
          Find answers to common questions about TutorsNext and our academic writing services.
        </p>

        {/* Main Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left: Support Box */}
          <div className="lg:col-span-4 bg-surface-alt rounded-[20px] border border-card-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">

            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="relative w-[64px] h-[64px] rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-brand-purple hover:scale-110 transition-transform duration-300">
                <Icon icon={faqIcons.badge} className="w-7 h-7" />
                <div className="absolute bottom-0.5 right-0.5 w-5 h-5 bg-primary rounded-full border-2 border-surface flex items-center justify-center text-surface text-[9px] font-bold">
                  ?
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-text-dark text-[18px] font-extrabold tracking-tight mb-2">
                Still have questions?
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed opacity-70 max-w-[260px] mx-auto">
                Our support team is here 24/7 to help you with anything you need.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                type="button"
                onClick={() => { if (window.Tawk_API?.maximize) window.Tawk_API.maximize(); }}
                className="btn-fill-hover w-full flex items-center justify-center gap-2 text-[13.5px] font-bold py-3 px-4 rounded-[14px] shadow-[0_4px_12px_rgba(2,132,199,0.25)] cursor-pointer"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon icon={faqIcons.chat} className="w-4 h-4" />
                  Chat with Us Now
                  <Icon icon={testimonialsIcons.chevronRight} className="w-4 h-4" />
                </span>
              </button>

              <a
                href={SITE_CONFIG.email.href}
                className="btn-fill-hover-outline w-full flex items-center justify-center gap-2 text-[13.5px] font-bold py-3 px-4 rounded-[14px] shadow-sm"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon icon={faqIcons.email} className="w-4 h-4 text-brand-purple" />
                  Email Us
                  <span className="text-text-body font-normal text-[12px] opacity-60">{SITE_CONFIG.email.display}</span>
                </span>
              </a>
            </div>

            {/* Footer trust */}
            <div className="pt-5 border-t border-card-border">
              <span className="text-text-dark font-bold text-[13px] block mb-1">We're Here 24/7</span>
              <p className="text-text-body text-[11px] opacity-60 mb-4">Quick responses. Real people. Real support.</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="User" className="w-7 h-7 rounded-full ring-2 ring-surface object-cover" />
                  ))}
                </div>
                <span className="bg-primary text-surface text-[11px] font-bold px-2.5 py-1 rounded-full">8K+</span>
              </div>
              <p className="text-text-body text-[11px] opacity-60 font-medium mt-2">
                Trusted by <strong className="text-text-dark opacity-100">8K+</strong> Students Worldwide
              </p>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-[16px] border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'border-primary-border shadow-[0_4px_20px_rgba(2,132,199,0.08)]'
                      : 'border-card-border shadow-sm hover:border-primary-border hover:shadow-md'
                  } bg-surface`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
                  >
                    <span className={`font-bold text-[14px] lg:text-[15px] leading-snug pr-4 transition-colors duration-200 ${isOpen ? 'text-brand-purple' : 'text-text-dark group-hover:text-brand-purple'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary-soft border border-primary-border text-brand-purple' : 'bg-surface-alt border border-card-border text-text-body group-hover:border-primary-border group-hover:text-brand-purple'}`}>
                      <Icon
                        icon={faqIcons.chevron}
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>

                  {/* Answer — smooth expand */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-text-body text-[13px] lg:text-[14px] leading-relaxed opacity-80">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
