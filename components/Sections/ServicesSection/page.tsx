'use client';

import React, { useState } from 'react';
import Button from '@/components/atom/Button/page';
import styles from './style.module.css';

const ServicesSection: React.FC = () => {
  const [text, setText] = useState('');

  const toggleText = (newText: string) => {
    setText((prevText) => (prevText === newText ? '' : newText));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.content}>
        <div className={styles.buttonGroup}>
          <Button action={() => toggleText('Вы можете заказать услугу 1')}>
            Услуга 1
          </Button>
          <Button action={() => toggleText('Вы можете заказать услугу 2')}>
            Услуга 2
          </Button>
          <Button action={() => toggleText('Вы можете заказать услугу 3')}>
            Услуга 3
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
