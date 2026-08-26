import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import qilamiz

import uz from './locales/uz.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector) // Detector ni ulaymiz
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      en: { translation: en },
      ru: { translation: ru }
    },
    fallbackLng: 'en', // Agar til topilmasa standart dil
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag'],
      caches: ['localStorage'] // Tanlangan tilni localStorage ga saqlaydi
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;