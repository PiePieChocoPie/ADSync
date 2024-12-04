'use client'

import React, { useRef } from 'react';
import Header from '@/components/element/Header/page';
import Footer from '@/components/element/Footer/page';
import AboutSection from '@/components/Sections/AboutSection/page';
import ServicesSection from '@/components/Sections/ServicesSection/page';
import ReviewsSection from '@/components/Sections/ReviewsSection/page';
import LoginSection from '@/components/Sections/FeedbackSection/page';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const sectionRef = {
      about: aboutRef,
      services: servicesRef,
      reviews: reviewsRef,
      login: loginRef,
    }[section];

    sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <div ref={aboutRef}><AboutSection /></div>
      <div ref={servicesRef}><ServicesSection /></div>
      <div ref={reviewsRef}><ReviewsSection /></div>
      <div ref={loginRef}><LoginSection /></div>
      <Footer />
    </div>
  );
}