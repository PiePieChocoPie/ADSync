'use client';
// LoginSection.tsx
import React from 'react';
import styles from './style.module.css';

const LoginSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход в систему</h2>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Логин"
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="password"
          placeholder="Пароль"
          className={styles.input}
        />
      </div>
      <button className={styles.button}>Войти</button>
    </div>
  );
};

export default LoginSection;