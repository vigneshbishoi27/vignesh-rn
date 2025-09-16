import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en.json';
import hi from './locales/hi.json';
import gu from './locales/gu.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  gu: { translation: gu },
};

const getSavedLanguage = async () => {
  try {
    const savedLang = await AsyncStorage.getItem('appLanguage');
    return savedLang || 'en';
  } catch (e) {
    return 'en';
  }
};

const initI18n = async () => {
  const lng = await getSavedLanguage();

  await i18n.use(initReactI18next).init({
    resources,
    lng,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export const changeLanguage = async (lang: string) => {
  await i18n.changeLanguage(lang);
  await AsyncStorage.setItem('appLanguage', lang);
};

export default i18n;
