/* eslint-disable @typescript-eslint/no-var-requires */
import i18n from 'i18next'

import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import locales from './translations'

// TODO: Put these lines to _app.tsx
// if (localStorage.getItem('i18nextLng') === null) {
//   localStorage.setItem('i18nextLng', 'en')
// }

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: 'en',
    react: {
      useSuspense: true,
    },
    interpolation: {
      prefix: '{',
      suffix: '}',
      escapeValue: false,
    },
  })

export default i18n
