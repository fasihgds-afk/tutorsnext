import React from 'react';
import Icon from '../common/Icon';
import { servicesHome1 } from '../../config/sectionIcons';

const services = [
  {
    id: 1,
    title: 'Subject Tutoring',
    description:
      'Expert help in a wide range of subjects to strengthen your concepts.',
    items: [
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'English & Literature',
      'Computer Science',
      'And More',
    ],
  },
  {
    id: 2,
    title: 'Test Preparation',
    description:
      'Focused preparation to help you ace important exams with confidence.',
    items: [
      'SAT / ACT',
      'GRE / GMAT',
      'IELTS / TOEFL',
      'AP / IB / A-Level',
      'And More',
    ],
  },
  {
    id: 3,
    title: 'Professional Guidance',
    description:
      'Get expert guidance on subject, step by step.',
    items: [
      'Concept Explanation',
      'Problem Solving',
      'Assignment Support',
      'Exam Practice',
    ],
  },
  {
    id: 4,
    title: 'Study Skills Coaching',
    description:
      'Improve your study habits, time management, and academic performance.',
    items: [
      'Time Management',
      'Note-Taking Strategies',
      'Exam Strategies',
      'Focus & Productivity',
    ],
  },
  {
    id: 5,
    title: 'Live Online Classes',
    description:
      'Interactive live classes with expert tutors from anywhere in the world.',
    items: [
      'Real-time Doubt Solving',
      'Interactive Whiteboard',
      'Recorded Sessions',
      'Flexible Scheduling',
    ],
  },
  {
    id: 6,
    title: 'Academic Support',
    description:
      'Ongoing academic support to keep you on track and help you excel.',
    items: [
      'Regular Progress Tracking',
      'Personalized Study Plans',
      'Feedback & Improvement',
      '24/7 Student Support',
    ],
  },
];

const ServiceCard = ({ service, iconIndex, showItems }) => (
  <div className="group bg-surface-alt rounded-[16px] p-4 border border-card-border hover:border-primary-border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-10 h-10 rounded-xl bg-surface border border-card-border flex items-center justify-center text-brand-purple shrink-0 group-hover:bg-primary group-hover:text-surface group-hover:border-primary transition-all duration-300">
        <Icon icon={servicesHome1.items[iconIndex]} className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-text-dark font-bold text-[13px] mb-0.5 group-hover:text-brand-purple transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-text-body text-[11px] leading-relaxed opacity-70 line-clamp-2">
          {service.description}
        </p>
      </div>
    </div>
    <ul className="space-y-1.5 mb-3">
      {service.items.slice(0, showItems).map((item) => (
        <li key={item} className="flex items-center gap-2 text-text-body text-[11px]">
          <span className="w-3.5 h-3.5 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-brand-purple shrink-0 group-hover:bg-primary group-hover:text-surface transition-all duration-300">
            <Icon icon={servicesHome1.check} className="w-2 h-2" />
          </span>
          {item}
        </li>
      ))}
    </ul>
    <button
      type="button"
      onClick={() => { if (window.Tawk_API?.maximize) window.Tawk_API.maximize(); }}
      className="text-brand-purple text-[11px] font-bold hover:text-primary hover:underline transition-colors duration-200 cursor-pointer"
    >
      Learn more →
    </button>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="w-full bg-surface py-10 lg:py-14 px-4 sm:px-10 lg:px-16 xl:px-20" id="services">
      <div className="w-full max-w-[1040px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 text-brand-purple text-[12px] font-bold uppercase tracking-[0.12em] mb-3">
            <span className="w-6 h-[2px] bg-primary inline-block"></span>
            What We Offer
            <span className="w-6 h-[2px] bg-primary inline-block"></span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-text-dark tracking-tight leading-tight mb-2.5">
            Expert Help for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
              Every SUBJECT
            </span>
          </h2>
          <p className="text-[13px] sm:text-[14px] text-text-body max-w-[480px] leading-relaxed opacity-70 font-medium">
            From <map name=""></map>mathematics to aerospace engineering, we provide expert help in every academic tutoring area you need.
          </p>
        </div>

        {/* Top row: Featured card + 2×2 service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Featured Card */}
          <div className="lg:col-span-2">
            <div className="group bg-gradient-to-br from-brand-start to-primary-700 rounded-[20px] p-6 h-full text-surface relative overflow-hidden hover:shadow-[0_12px_32px_rgba(2,132,199,0.3)] hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-surface/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-surface/5 rounded-full blur-2xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-5">
                  <div className="w-12 h-12 bg-surface/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={servicesHome1.featured} className="w-6 h-6" />
                  </div>
                  <h3 className="text-[18px] font-bold mb-2">1-on-1 Tutoring</h3>
                  <p className="text-surface/80 text-[13px] leading-relaxed">
                    Personalized tutoring sessions tailored to your goals, learning style and academic level.
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-surface/20">
                  <button
                    type="button"
                    onClick={() => { if (window.Tawk_API?.maximize) window.Tawk_API.maximize(); }}
                    className="group/link inline-flex items-center gap-2 text-surface font-semibold text-[13px] hover:gap-3 transition-all duration-300 cursor-pointer"
                  >
                    Explore All Services
                    <Icon icon={servicesHome1.arrow} className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2×2 Service Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {services.slice(0, 4).map((service, i) => (
                <ServiceCard key={service.id} service={service} iconIndex={i} showItems={2} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row: 2 more cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {services.slice(4, 6).map((service, i) => (
            <ServiceCard key={service.id} service={service} iconIndex={i + 4} showItems={3} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
