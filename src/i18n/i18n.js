import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Language from './Language.ts';
import lang_en from './json/en.json';
import lang_fr from './json/fr.json';

let defaultLanguage = Language.FR;

const resources = {
    en: {
        translation: lang_en
    },
    fr: {
        translation: lang_fr
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,

        keySeparator: ".",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;