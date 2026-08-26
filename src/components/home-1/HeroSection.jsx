import React, { useState } from 'react';
import Icon from '../common/Icon';
import DiscountBadge from '../common/DiscountBadge';
import { hero } from '../../config/sectionIcons';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2500);
  };

  const perks = [
    { title: 'Expert Tutors', sub: "PhD & Master Level" },
    { title: 'On Time Availability', sub: 'Tutors as always on time' },
    { title: 'Detailed Sessions', sub: 'No time limit Q/As' },
    { title: '24/7 Support', sub: "We're Here For You" },
  ];

  return (
    <section className="w-full bg-surface-alt py-4 lg:py-8 px-4 sm:px-10 lg:px-16 xl:px-20 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative px-0 sm:px-4">

        {/* Overlapping Image — desktop only */}
        <div className="hidden lg:block absolute bottom-0 right-[270px] xl:right-[330px] z-10 w-[460px] h-[560px] rounded-3xl overflow-hidden pointer-events-none select-none">
          <img
            src="/images/hero.png"
            alt="Student"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-20">

          {/* LEFT CONTENT COLUMN */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Tutoring Services
              </span>
            </h1>

            {/* Subheading bullets */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-text-body">
              <span>Fast</span>
              <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span>No AI Tutors</span>
              <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span>One to One Sessions</span>
            </div>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 pt-1 w-full lg:max-w-[410px]">
              {perks.map((f, i) => (
                <div key={f.title} className="group flex items-start gap-3">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-soft flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface group-hover:scale-110 transition-all duration-300">
                    <Icon icon={hero.perks[i]} className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[12px] lg:text-[14px] font-bold text-text-dark leading-tight">{f.title}</h3>
                    <p className="text-[11px] text-text-body mt-0.5 leading-snug opacity-70">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rating Box */}
            <div className="bg-surface rounded-2xl p-3.5 shadow-md border border-card-border flex items-center justify-between gap-3 mt-1 w-full lg:max-w-[430px] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[17px] font-extrabold text-text-dark">4.8/5</span>
                  <div className="flex text-amber-400 text-[13px] gap-0.5">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
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
            <div className="bg-surface rounded-[20px] lg:rounded-[24px] shadow-[0_8px_32px_rgba(2,132,199,0.13)] border border-card-border w-full max-w-[420px] lg:max-w-[330px] overflow-visible relative mt-8 hover:shadow-[0_16px_48px_rgba(2,132,199,0.18)] transition-shadow duration-300">

              {/* Banner Header */}
              <div className="absolute -top-5 left-4 right-4 z-30 bg-gradient-to-r from-brand-start to-brand-end py-2.5 lg:py-3 px-4 text-center text-surface font-bold text-[12px] lg:text-[13px] tracking-wide rounded-xl shadow-lg">
                Get in Touch — We Reply in 10 Minutes
              </div>

              <DiscountBadge />

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="pt-10 px-4 lg:px-5 pb-6 space-y-3">

                {/* Loading State */}
                {loading && (
                  <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary-soft flex items-center justify-center">
                      <Icon icon={hero.loading} className="w-7 h-7 text-primary animate-spin" />
                    </div>
                    <p className="text-[13px] font-semibold text-text-body opacity-70">Sending your message...</p>
                  </div>
                )}

                {/* Thank You Message */}
                {submitted && (
                  <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary-soft flex items-center justify-center">
                      <Icon icon={hero.success} className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-[17px] font-bold text-text-dark">Thank You!</h3>
                    <p className="text-[13px] text-text-body opacity-70 max-w-[220px]">
                      Your message has been received. We'll get back to you within 10 minutes.
                    </p>
                  </div>
                )}

                {/* Form Fields — hidden after submit or while loading */}
                <div className={submitted || loading ? 'hidden' : ''}>

                  {/* Name */}
                  <div className="group flex items-center gap-3">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                      <Icon icon={hero.form.user} className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label className="text-[11px] font-bold text-text-body block mb-0.5">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="w-full bg-surface-alt border border-primary-border rounded-xl px-3 py-2.5 text-[13px] text-text-dark font-medium focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 placeholder:text-text-body placeholder:opacity-40"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-center gap-3">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                      <Icon icon={hero.form.email} className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label className="text-[11px] font-bold text-text-body block mb-0.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full bg-surface-alt border border-primary-border rounded-xl px-3 py-2.5 text-[13px] text-text-dark font-medium focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 placeholder:text-text-body placeholder:opacity-40"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group flex items-center gap-3">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                      <Icon icon={hero.form.phone} className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label className="text-[11px] font-bold text-text-body block mb-0.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full bg-surface-alt border border-primary-border rounded-xl px-3 py-2.5 text-[13px] text-text-dark font-medium focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 placeholder:text-text-body placeholder:opacity-40"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group flex items-start gap-3">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-brand-purple group-hover:bg-primary group-hover:text-surface transition-all duration-300 mt-0.5">
                      <Icon icon={hero.form.message} className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label className="text-[11px] font-bold text-text-body block mb-0.5">Your Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you need help with..."
                        rows={3}
                        required
                        className="w-full bg-surface-alt border border-primary-border rounded-xl px-3 py-2.5 text-[13px] text-text-dark font-medium focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 placeholder:text-text-body placeholder:opacity-40 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-fill-hover w-full mt-1 font-bold py-3 px-4 rounded-xl shadow-[0_4px_14px_rgba(2,132,199,0.35)] active:scale-[0.98] flex items-center justify-center gap-2 text-[14px] cursor-pointer"
                  >
                    <span>Send Message →</span>
                  </button>

                  {/* Security info */}
                  <div className="pt-1 flex flex-col items-center gap-1.5 text-center">
                    <div className="flex items-center gap-1 text-[11px] text-text-body">
                      <Icon icon={hero.form.lock} className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Your information is safe with us</span>
                    </div>
                  </div>

                </div>{/* end hidden wrapper */}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
