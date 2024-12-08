"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/utils/language/buttonLanguage';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation
import Button from '@/components/atom/Button/page';
import styles from './style.module.css';

interface HeaderProps {
  scrollToSection: (section: 'about' | 'services' | 'reviews' | 'feedback') => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation(); // Используем useTranslation для получения переводов

  // const [mounted, setMounted] = useState(false); 
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  // if (!mounted) {
  //   return null;
  // }

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';
    changeLanguage(newLanguage); // Переключаем язык через контекст
  };

  const navItems: { label: string; section: 'about' | 'services' | 'reviews' | 'feedback' }[] = [
    { label: t('Header.about'), section: 'about' },
    { label: t('Header.services'), section: 'services' },
    { label: t('Header.reviews'), section: 'reviews' },
    { label: t('Header.feedback'), section: 'feedback' },
  ];

  return (
    <header className={styles.header}>
      <div className={`${styles.logo}`}>{t('Header.logo')}</div>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.navList}`}>
          {navItems.map(({ label, section }) => (
            <li key={section} className={`${styles.navItem}`}>
              <Button action={() => scrollToSection(section)} classes={`${styles.navButton}`}>
                {label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`${styles.languageSwitcher}`}>
        <Button action={toggleLanguage} classes={`${styles.languageButton}`}>
          {language === 'en' ? 'EN' : 'RU'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
