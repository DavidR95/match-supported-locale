export type LanguageLocaleFallbacks = Record<string, string>;

/**
 * For the given locale, returns the language-wide fallback determined by the
 * given language locale fallback mapping. Returns undefined if no fallback
 * could be found.
 */
export const findLanguageLocaleFallback = (
  locale: string,
  languageLocaleFallbacks: LanguageLocaleFallbacks,
): string | undefined => {
  const languageLocale = locale.split('-')[0];

  return languageLocale
    ? findFallbackCaseInsensitive(languageLocale, languageLocaleFallbacks)
    : undefined;
};

const findFallbackCaseInsensitive = (
  locale: string,
  languageLocaleFallbacks: LanguageLocaleFallbacks,
): string | undefined => {
  const languageLocaleFallbackKey = Object.keys(languageLocaleFallbacks).find(
    (languageLocale) => languageLocale.toLowerCase() === locale.toLowerCase(),
  );

  return languageLocaleFallbackKey
    ? languageLocaleFallbacks[languageLocaleFallbackKey]
    : undefined;
};
