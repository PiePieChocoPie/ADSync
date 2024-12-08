'use client';
// AboutSection.tsx
import React from 'react';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation


const AboutSection: React.FC = () => {
  const { t } = useTranslation(); // Используем useTranslation для получения переводов

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('About.title')}</h2>
      <p className={styles.content}>
        {t('About.content')}
      </p>
    </div>
  );
};

export default AboutSection;