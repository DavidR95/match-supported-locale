import { getAllSubLocales } from './get-all-sub-locales';
import { findFirstSupportedLocale } from './find-first-supported-locale';
import {
  findLanguageLocaleFallback,
  LanguageLocaleFallbacks,
} from './find-language-locale-fallback';

/**
 * For the given locale, attempts to return the closest matching supported locale.
 *
 * In summary, this searches through all the locale's sub-locales, looking for a
 * direct match within the list of supported locales. If there are multiple
 * matching locales, the most "detailed" locale is preferred.
 *
 * In the case that no direct matches can be made, a mapping of language-wide
 * fallbacks can optionally be provided. For example, if you would like
 * 'en-US' to fallback to 'en-GB' in the case that no direct matches can
 * be made for 'en-US' or 'en', then provide a fallback mapping of:
 * `{ en: 'en-GB' }`.
 *
 * Returns undefined if no matches can be made.
 */
export const matchSupportedLocale = (
  locale: string,
  supportedLocales: string[],
  languageLocaleFallbacks?: LanguageLocaleFallbacks,
): string | undefined => {
  const allSubLocales = getAllSubLocales(locale);
  const firstSupportedLocale = findFirstSupportedLocale(
    allSubLocales,
    supportedLocales,
  );

  if (firstSupportedLocale) {
    return firstSupportedLocale;
  }

  return languageLocaleFallbacks
    ? findLanguageLocaleFallback(locale, languageLocaleFallbacks)
    : undefined;
};
