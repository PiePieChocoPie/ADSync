// src/config/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ru from './ru.json';

// Функция для определения языка
const getDefaultLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'ru';
  }
  return 'ru'; // Серверный рендеринг использует язык по умолчанию
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: getDefaultLanguage(), // Устанавливаем язык
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
