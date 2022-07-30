import { matchSupportedLocale } from './';

describe('index', () => {
  describe('matchSupportedLocale', () => {
    test.each([
      ['', [], {}, undefined],
      ['', [''], {}, undefined],
      ['zh', [''], {}, undefined],
      ['zh', ['zh'], {}, 'zh'],
      ['zh-Hans', ['zh-Hans'], {}, 'zh-Hans'],
      ['zh-Hans', ['zh', 'zh-Hans', 'zh-Hans-HK'], {}, 'zh-Hans'],
      ['zh-Hans-HK', ['zh', 'zh-Hans', 'zh-Hans-HK'], {}, 'zh-Hans-HK'],
      ['zh', ['zh-Hans'], { zh: 'zh-Hans' }, 'zh-Hans'],
      ['zh-Hant', ['zh-Hans'], { zh: 'zh-Hans' }, 'zh-Hans'],
      ['zh-Hans-HK', ['zh-Hans'], { zh: 'zh-Hant' }, 'zh-Hans'],
    ])(
      'from locale "%s", supported locales: %j and language locale fallbacks: %j, it should return "%s"',
      (
        locale: string,
        supportedLocales: string[],
        languageLocaleFallbacks: Record<string, string>,
        expectedLocale: string | undefined,
      ) => {
        expect(
          matchSupportedLocale(
            locale,
            supportedLocales,
            languageLocaleFallbacks,
          ),
        ).toEqual(expectedLocale);
      },
    );
  });
});
