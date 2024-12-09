'use client';
// LoginSection.tsx
import React, { useState } from 'react';
import Button from '@/components/atom/Button/page';
import Input from "@/components/atom/Input/page";
import styles from './style.module.css';
import * as stylesSection from '../style.module.css';
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
    <div className={`${styles.container}`}>
      <h2 className={`${stylesSection.title}`}>{t('Contact.title')}</h2>
      <div className={`${styles.formGroup}`}>
        <Input type="text" defaultValue={name} action={e => setName(e.target.value)} placeholder={t('Contact.name')} classes={`${styles.input}`}/>
      </div>
      <div className={`${styles.formGroup}`}>
        <Input type="email" defaultValue={email} action={e => setEmail(e.target.value)} placeholder={t('Contact.email')} classes={`${styles.input}`}/>
      </div>
      <div className={`${styles.formGroup}`}>
        <Input type="tel" defaultValue={phone} action={e => setPhone(e.target.value)} placeholder={t('Contact.phone')} classes={`${styles.input}`}/>
      </div>
      <Button action={handleReset} classes={`${styles.button}`}>{t('Contact.send')}</Button>
    </div>
  );
};

export default LoginSection;
