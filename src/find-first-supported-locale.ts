/**
 * From the given list of locales, returns the first locale found in the given
 * list of "supported" locales. Returns undefined if no locale was supported.
 */
export const findFirstSupportedLocale = (
  locales: string[],
  supportedLocales: string[],
): string | undefined => {
  const lowerCaseSupportedLocales = supportedLocales.map((supportedLocale) =>
    supportedLocale.toLowerCase(),
  );

  return locales.find((locale) =>
    lowerCaseSupportedLocales.includes(locale.toLowerCase()),
  );
};
