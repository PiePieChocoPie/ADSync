// components/ButtonHeader.tsx
"use client";

import React from 'react';
import styles from './style.module.css';

interface ButtonHeaderProps {
  label: string;
  section: string;
  onClick: (section: string) => void;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ label, section, onClick }) => {
  return (
    <button className={styles.button} onClick={() => onClick(section)}>
      {label}
    </button>
  );
};

export default ButtonHeader;