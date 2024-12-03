'use client';
// ReviewsSection.tsx
import React from 'react';
import styles from './style.module.css';

const ReviewsSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отзывы клиентов</h2>
      <div className={styles.reviewItem}>
        "Отличная компания! Очень рекомендую."
      </div>
      <div className={styles.reviewItem}>
        "Супер сервис и поддержка!"
      </div>
      <div className={styles.reviewItem}>
        "Я очень доволен работой этой команды."
      </div>
    </div>
  );
};

export default ReviewsSection;