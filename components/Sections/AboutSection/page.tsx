'use client';
// AboutSection.tsx
import React from 'react';
import styles from './style.module.css';

const AboutSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>О нас</h2>
      <p className={styles.content}>
        Здесь вы можете добавить информацию о вашей компании или проекте.
      </p>
    </div>
  );
};

export default AboutSection;