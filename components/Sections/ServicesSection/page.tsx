'use client';

import React, { useState } from 'react';
import Button from '@/components/atom/Button/page';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation


const ServicesSection: React.FC = () => {
  const { t } = useTranslation(); // Используем useTranslation для получения переводов

  const [text, setText] = useState('');

  const toggleText = (newText: string) => {
    setText((prevText) => (prevText === newText ? '' : newText));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('OurServices.title')}</h2>
      <div className={styles.content}>
        <div className={styles.buttonGroup}>
          <Button action={() => toggleText(t('OurServices.service1.content'))}>
            {t('OurServices.service1.title')}
          </Button>
          <Button action={() => toggleText(t('OurServices.service2.content'))}>
            {t('OurServices.service2.title')}
          </Button>
          <Button action={() => toggleText(t('OurServices.service3.content'))}>
            {t('OurServices.service3.title')}
          </Button>
        </div>
        <div className={styles.textDisplay}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
