import styles from './style.module.css';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation


export default function Footer() {
  const { t } = useTranslation(); // Используем useTranslation для получения переводов

  return (
    <footer className={styles.footer}>
      <p>{t('Footer.copyright')}</p>
      <p>{t('Footer.contacts')}</p>
    </footer>
  );
}
