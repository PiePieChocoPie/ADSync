// components/Header/page.tsx
"use client"; // Добавьте эту строку, чтобы сделать компонент клиентским

import React from 'react';
import styles from './style.module.css'; // Убедитесь, что путь правильный
import ButtonHeader from '@/components/atom/ButtonHeader/page'; // Импортируем ButtonHeader

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyLogo</div> {/* Логотип */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem}`}>
            <ButtonHeader label="About" section="about" onClick={scrollToSection} />
          </li>
          <li className={styles.navItem}>
            <ButtonHeader label="Services" section="services" onClick={scrollToSection} />
          </li>
          <li className={styles.navItem}>
            <ButtonHeader label="Reviews" section="reviews" onClick={scrollToSection} />
          </li>
        </ul>
      </nav>
      <div className={styles.loginButton}> {/* Кнопка логина выровненная по правому краю */}
        <ButtonHeader label="Login" section="login" onClick={scrollToSection} />
      </div>
    </header>
  );
};

export default Header;