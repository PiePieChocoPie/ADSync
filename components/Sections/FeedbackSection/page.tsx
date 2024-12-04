'use client';
// LoginSection.tsx
import React, { useState } from 'react';
import Button from '@/components/atom/Button/page';
import Input from "@/components/atom/Input/page";
import styles from './style.module.css';

const LoginSection: React.FC = () => {
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
      <h2 className={styles.title}>Обратная связь</h2>
      <div className={styles.formGroup}>
        <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Имя"/>
      </div>
      <div className={styles.formGroup}>
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Почта"/>
      </div>
      <div className={styles.formGroup}>
        <Input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Телефон"/>
      </div>
      <Button action={handleReset}>Отправить</Button>
    </div>
  );
};

export default LoginSection;
