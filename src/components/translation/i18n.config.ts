import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from './en.json';

const resources = {
  en: {
    translanation: en,
  },
};

void i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
