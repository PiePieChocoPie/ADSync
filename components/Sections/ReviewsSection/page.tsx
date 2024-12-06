'use client';
// ReviewsSection.tsx
import React from 'react';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation


const ReviewsSection: React.FC = () => {
  const { t } = useTranslation(); // Используем useTranslation для получения переводов

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('Reviews.title')}</h2>
      <div className={styles.reviewItem}>
        "{t('Reviews.review1.content')}"
      </div>
      <div className={styles.reviewItem}>
        "{t('Reviews.review2.content')}"
      </div>
      <div className={styles.reviewItem}>
        "{t('Reviews.review3.content')}"
      </div>
    </div>
  );
};

export default ReviewsSection;