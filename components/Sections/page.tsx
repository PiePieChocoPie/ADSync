// MainSection/page.tsx
"use client"; // Убедитесь, что это клиентский компонент

import React from 'react';
import AboutSection from '@/components/Sections/AboutSection/page';
import ServicesSection from '@/components/Sections/ServicesSection/page';
import ReviewsSection from '@/components/Sections/ReviewsSection/page';
import LoginSection from '@/components/Sections/FeedbackSection/page';
import styles from './style.module.css';

const MainSection: React.FC = () => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.section}>
        <AboutSection />
      </div>
      <div className={styles.section}>
        <ServicesSection/>
      </div>
      <div className={styles.section}>
        <ReviewsSection />
      </div>
      <div className={styles.section}>
        <LoginSection />
      </div>
    </div>
  );
};

export default MainSection; 