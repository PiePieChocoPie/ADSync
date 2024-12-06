'use client';
// LoginSection.tsx
import React, { useState } from 'react';
import Button from '@/components/atom/Button/page';
import Input from "@/components/atom/Input/page";
import styles from './style.module.css';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation


const LoginSection: React.FC = () => {

  const { t } = useTranslation(); // Используем useTranslation для получения переводов
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('Contact.title')}</h2>
      <div className={styles.formGroup}>
        <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t('Contact.name')}/>
      </div>
      <div className={styles.formGroup}>
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t('Contact.email')}/>
      </div>
      <div className={styles.formGroup}>
        <Input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder={t('Contact.phone')}/>
      </div>
      <Button action={handleReset}>{t('Contact.send')}</Button>
    </div>
  );
};

export default LoginSection;
