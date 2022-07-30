import { getAllSubLocales } from './get-all-sub-locales';
import { findFirstSupportedLocale } from './find-first-supported-locale';
import { findLanguageLocaleFallback } from './find-language-locale-fallback';

const locale = 'en-GB';
const supportedLocales = ['en-GB'];
const languageLocaleFallbacks = { en: 'en-GB' };

const allSubLocales = getAllSubLocales(locale);
const firstSupportedLocale = findFirstSupportedLocale(
  allSubLocales,
  supportedLocales,
);

if (!firstSupportedLocale) {
  const languageLocaleFallback = findLanguageLocaleFallback(
    locale,
    languageLocaleFallbacks,
  );
}

console.log(allSubLocales);
