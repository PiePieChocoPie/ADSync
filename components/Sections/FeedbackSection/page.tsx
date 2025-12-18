'use client';

import React from 'react';
import styles from './style.module.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={[styles.input, className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
