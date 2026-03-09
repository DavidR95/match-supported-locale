/**
 * From the given list of locales, returns the first locale found in the given
 * list of "supported" locales. Returns undefined if no locale was supported.
 */
export const findFirstSupportedLocale = (
  locales: string[],
  supportedLocales: string[],
): string | undefined => {
  for (const locale of locales) {
    for (const supportedLocale of supportedLocales) {
      if (locale.toLowerCase() === supportedLocale.toLowerCase()) {
        return supportedLocale;
      }
    }
  }

  return undefined;
};
