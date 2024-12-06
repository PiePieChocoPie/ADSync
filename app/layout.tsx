// base imports
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

// fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// language
import { LanguageProvider } from '@/utils/language/buttonLanguage';
import { useEffect } from "react";
// import i18n from '@/utils/language/i18n';


// configuration stuffs
const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AdSync",
  description: "Automize creating active directory's users",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Получаем сохранённый язык с сервера или клиента
  const savedLang = typeof window === 'undefined' 
    ? 'ru' // Серверная часть (по умолчанию русский)
    : localStorage.getItem('language') || 'en'; // Клиентская часть
  

  return (
    <html lang={savedLang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <LanguageProvider>
          {children}
          </LanguageProvider>
      </body>
    </html>
  );
}
