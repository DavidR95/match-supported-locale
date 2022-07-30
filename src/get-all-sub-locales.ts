/**
 * Returns all sub-locales derived from the given locale. The sub-locales
 * are returned in order of most to least "detailed".
 *
 * By "sub-locales" we mean the set of individually valid locale substrings
 * that can be derived from the original locale.
 *
 * For example: "zh-Hans-HK" -> ["zh-Hans-HK", "zh-Hans", "zh"]
 */
export const getAllSubLocales = (locale: string): string[] =>
  locale
    .split('-')
    .flatMap((_, i, subTags) => subTags.slice(0, i + 1).join('-'))
    .reverse();
