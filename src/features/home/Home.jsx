import React, { useEffect } from 'react';
import {
  HeroSection,
  StatsSection,
  TopWritersSection,
  FeaturesSection,
  HowItWorksSection,
  CTABannerSection,
  GuaranteeSection,
  TrustedBySection,
  TestimonialsSection,
  SupportBannerSection,
  ServicesSection,
  HelpBannerSection,
  SupportSection,
  FAQSection,
  AIWarningSection,
} from '../../components/home';

const Home = () => {
  useEffect(() => {
    document.title = 'TutorsNext | Expert Academic Services';
  }, []);

  return (
    <main className="w-full min-h-screen bg-gray-50 flex flex-col">

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. STATS */}
      <StatsSection />
      <AIWarningSection />
      {/* 3. TOP WRITERS */}
      <TopWritersSection />

      {/* 4. FEATURES */}
      <FeaturesSection />
      <GuaranteeSection />
      {/* 5. HOW IT WORKS */}
      <HowItWorksSection />

      {/* 6. SERVICES */}
      <ServicesSection />

      {/* CTA SECTIONS - SHOW ONE AFTER ANOTHER */}
      <CTABannerSection />

      <HelpBannerSection />

      {/* REMAINING SECTIONS */}

      <TrustedBySection />
      <TestimonialsSection />
      <SupportBannerSection />
      <SupportSection />
      <FAQSection />


    </main>
  );
};

export default Home;