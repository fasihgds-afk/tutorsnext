import React, { useState } from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import Icon from '../common/Icon';
import { faq } from '../../config/sectionIcons';

const faqs = [
  {
    id: 1,
    question: 'How do you guarantee plagiarism-free writing?',
    answer:
      'Our work process includes a dedicated quality assurance team that checks every order using authentic plagiarism detection tools, including Turnitin. Our experts conduct extensive research to provide original academic writing assistance. You can also request a plagiarism report to verify the originality of your order.',
  },
  {
    id: 2,
    question: 'Will the writer work according to my order guidelines?',
    answer:
      'Yes, certainly. Once you place your order, we assign the most suitable writer who carefully reviews your guidelines and creates an outline to ensure the paper follows your requirements. We only contact you when important information or guidelines are missing.',
  },
  {
    id: 3,
    question: 'How fast can you write my paper?',
    answer:
      'Our subject-matter experts can deliver papers in as little as 3 hours, depending on the requirements and deadline. We always do our best to complete orders on time, and 99% of our orders are completed and delivered before the deadline.',
  },
  {
    id: 4,
    question: 'How will you deliver my order?',
    answer:
      'Once your expert completes the order, the finished file will be uploaded to your user area. You can log in to your account to access it, and we will also send the completed file to your registered email address.',
  },
  {
    id: 5,
    question: 'Can I request a revision for my paper?',
    answer:
      'Yes. If you need any changes, you can request a revision free of charge. Simply use your user area to submit your revision requirements. You can also contact our 24/7 live support team for updates regarding your revision.',
  },
  {
    id: 6,
    question: 'Can I talk to my writer?',
    answer:
      'Yes, you can communicate with your writer regarding questions or specific requirements. You can send a message through our 24/7 live chat or contact our support team, and your writer will respond as soon as possible.',
  },
  {
    id: 7,
    question: 'Is your assistance confidential?',
    answer:
      'Yes. All interactions between clients, writers, and our company are kept strictly confidential. Your conversations and personal information are private and are never shared with third-party companies.',
  },
  {
    id: 8,
    question: 'How can I trust your company?',
    answer:
      'We understand the importance of choosing a reliable academic assistance service. Your funds remain secure until the project is completed according to your requirements. We follow applicable international standards and offer a money-back guarantee subject to our terms and conditions.',
  },
  {
    id: 9,
    question: 'What types of discounts do you offer?',
    answer:
      'We offer discounts on orders to make our services more affordable. We also provide bulk discounts, with the discount percentage increasing based on the number of pages included in your order.',
  },
  {
    id: 10,
    question: 'What is your payment process?',
    answer:
      'Once you finalize your order, you can deposit the required amount through your user area. The funds remain secure while the project is being completed. Once the project meets your agreed requirements, the payment can be released to the writer.',
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
          <Icon icon={faq.badge} className="w-4 h-4 shrink-0" strokeWidth={2.5} />
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
                <Icon icon={faq.badge} className="w-7 h-7" />
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
                  <Icon icon={faq.chat} className="w-4 h-4" />
                  Chat with Us Now
                  <Icon icon={faq.chevron} className="w-4 h-4 -rotate-90" strokeWidth={2.5} />
                </span>
              </button>

              <a
                href={SITE_CONFIG.email.href}
                className="btn-fill-hover-outline w-full flex items-center justify-center gap-2 text-[13.5px] font-bold py-3 px-4 rounded-[14px] shadow-sm"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon icon={faq.email} className="w-4 h-4 text-brand-purple" />
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
            {faqs.map((faqItem) => {
              const isOpen = openId === faqItem.id;
              return (
                <div
                  key={faqItem.id}
                  className={`rounded-[16px] border overflow-hidden transition-all duration-300 ${isOpen
                    ? 'border-primary-border shadow-[0_4px_20px_rgba(2,132,199,0.08)]'
                    : 'border-card-border shadow-sm hover:border-primary-border hover:shadow-md'
                    } bg-surface`}
                >
                  <button
                    onClick={() => toggle(faqItem.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
                  >
                    <span className={`font-bold text-[14px] lg:text-[15px] leading-snug pr-4 transition-colors duration-200 ${isOpen ? 'text-brand-purple' : 'text-text-dark group-hover:text-brand-purple'}`}>
                      {faqItem.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary-soft border border-primary-border text-brand-purple' : 'bg-surface-alt border border-card-border text-text-body group-hover:border-primary-border group-hover:text-brand-purple'}`}>
                      <Icon
                        icon={faq.chevron}
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>

                  {/* Answer — smooth expand */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-text-body text-[13px] lg:text-[14px] leading-relaxed opacity-80">
                        {faqItem.answer}
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
