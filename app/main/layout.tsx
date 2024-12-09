'use client';

import React, { createContext, useState, useContext, useRef } from 'react';
import Header from '@/components/element/Header/page';
import Footer from '@/components/element/Footer/page';
import AboutSection from '@/components/Sections/AboutSection/page';
import AdvantagesSection from '@/components/Sections/AdvantagesSection/page';
import ServicesSection from '@/components/Sections/ServicesSection/page';
import ReviewsSection from '@/components/Sections/ReviewsSection/page';
import FeedbackSection from '@/components/Sections/FeedbackSection/page';
import { useLanguage } from '@/utils/language/buttonLanguage';
import i18n from '@/utils/language/i18n';


// Определяем допустимые ключи секций
type SectionKeys = 'about' | 'advantages' | 'services' | 'reviews' | 'feedback';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const sectionRefs: Record<SectionKeys, React.RefObject<HTMLDivElement>> = {
    about: useRef<HTMLDivElement>(null),
    advantages: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
    feedback: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: SectionKeys) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <main>
        <section ref={sectionRefs.about}>
          <AboutSection />
        </section>
        <section ref={sectionRefs.advantages}>
          <AdvantagesSection />
        </section>
        <section ref={sectionRefs.services}>
          <ServicesSection />
        </section>
        <section ref={sectionRefs.reviews}>
          <ReviewsSection />
        </section>
        <section ref={sectionRefs.feedback}>
          <FeedbackSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
