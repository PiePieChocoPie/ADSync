'use client';

// ServicesSection.tsx
import React from 'react';
import styles from './style.module.css';

const ServicesSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.content}>
        <div className={styles.serviceItem}>Услуга 1</div>
        <div className={styles.serviceItem}>Услуга 2</div>
        <div className={styles.serviceItem}>Услуга 3</div>
      </div>
    </div>
  );
};

export default ServicesSection;