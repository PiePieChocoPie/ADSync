'use client';
import React, { useState } from 'react';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next';
import Button from '@/components/atom/Button/page';
import * as stylesSection from '../style.module.css';
import Image from 'next/image';
import armorImg from '@/public/imgs/armor.png';
import effectiveImg from '@/public/imgs/effective.png';
import usageImg from '@/public/imgs/usage.png';


const AdvantagesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'armor' | 'effective' | 'usage'>('armor');

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>{t('Advantages.title')}</h2>
      {/* Контент, который всегда отображается */}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t('Advantages.content') }}></div>
      {/* Группа кнопок */}
      <div className={`${styles.buttonGroup}`}>
        <Button
          classes={activeTab === 'armor' ? styles.activeButton : ''}
          action={() => setActiveTab('armor')}
        >
          {t('Advantages.armor.title')}
        </Button>
        <Button
          classes={activeTab === 'effective' ? styles.activeButton : ''}
          action={() => setActiveTab('effective')}
        >
          {t('Advantages.effective.title')}
        </Button>
        <Button
          classes={activeTab === 'usage' ? styles.activeButton : ''}
          action={() => setActiveTab('usage')}
        >
          {t('Advantages.usage.title')}
        </Button>
      </div>
      {/* Контент, который меняется */}
      <div className={styles.imgContainer}>
      <Image src={activeTab === 'armor' ? armorImg : activeTab === 'effective' ? effectiveImg : usageImg} alt="Logo" className={`${styles.img}`} />
      <div className={styles.imgContainer}>
        <div
          className={`${styles.maxWidth} ${stylesSection.text}`}
          dangerouslySetInnerHTML={{ __html: t(`Advantages.${activeTab}.content`) }}/>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
