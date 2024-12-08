"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from '@/utils/language/i18n';


interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ru', // язык по умолчанию
  changeLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('ru'); // Язык по умолчанию

  useEffect(() => {
    // При инициализации, пытаемся загрузить язык из localStorage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage); // Устанавливаем язык из localStorage
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Переключаем язык с помощью i18next
    localStorage.setItem('language', lang); // Сохраняем язык в localStorage
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
