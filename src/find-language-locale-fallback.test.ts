import {
  findLanguageLocaleFallback,
  LanguageLocaleFallbacks,
} from './find-language-locale-fallback';

describe('find-language-locale-fallback', () => {
  describe('findLanguageLocaleFallback', () => {
    test.each([
      ['', {}, undefined],
      ['zh', {}, undefined],
      ['zh', { en: 'zh-Hans' }, undefined],
      ['zh', { zh: 'zh-Hans' }, 'zh-Hans'],
      ['zh-Hans', { zh: 'zh-Hans' }, 'zh-Hans'],
      ['zh-Hans-HK', { zh: 'zh-Hans' }, 'zh-Hans'],
      ['zh-Hant', { zh: 'zh-Hans' }, 'zh-Hans'],
      ['zh-Hant-HK', { zh: 'zh-Hans' }, 'zh-Hans'],
      ['zh', { ZH: 'zh-Hans' }, 'zh-Hans'],
    ])(
      'from locale "%s", and language locale fallbacks: %j, it should return "%s"',
      (
        locale: string,
        languageLocaleFallbacks: LanguageLocaleFallbacks,
        expectedLocale: string | undefined,
      ) => {
        expect(
          findLanguageLocaleFallback(locale, languageLocaleFallbacks),
        ).toEqual(expectedLocale);
      },
    );
  });
});
