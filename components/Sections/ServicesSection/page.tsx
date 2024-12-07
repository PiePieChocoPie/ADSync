'use client';

import React, { useState } from 'react';
import Button from '@/components/atom/Button/page';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);

  const toggleText = (newText: string) => {
    if (text === newText) {
      setIsActive(false);
      setTimeout(() => setText(''), 0);
    } else {
      setText(newText);
      setIsActive(true);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>{t('OurServices.title')}</h2>
      <div className={`${styles.content}`}>
        <div className={`${styles.buttonGroup}`}>
          <Button
            action={() => toggleText(t('OurServices.service1.content'))}
            classes={`${styles.button}`}
          >
            {t('OurServices.service1.title')}
          </Button>
          <Button
            action={() => toggleText(t('OurServices.service2.content'))}
            classes={`${styles.button}`}
          >
            {t('OurServices.service2.title')}
          </Button>
          <Button
            action={() => toggleText(t('OurServices.service3.content'))}
            classes={`${styles.button}`}
          >
            {t('OurServices.service3.title')}
          </Button>
        </div>
        <div className={`${styles.textDisplay} ${isActive ? 'active' : ''}`}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

