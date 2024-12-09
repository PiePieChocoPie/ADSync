'use client';
import React from 'react';
import styles from './style.module.css';
import * as stylesSection from '../style.module.css';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import aboutImg from '@/public/imgs/about.png';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.container}`}>
      <Image src={aboutImg} alt="Logo" className={`${styles.img}`} />
      <div className={styles.imgContainer}>
        <h2 className={`${stylesSection.title}`}>{t('About.title')}</h2>
        <div className={`${styles.content} ${stylesSection.text}`} dangerouslySetInnerHTML={{ __html: t('About.content') }}></div>
      </div>
    </div>
  );
};

export default AboutSection;
