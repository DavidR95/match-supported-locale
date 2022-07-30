import { findFirstSupportedLocale } from './find-first-supported-locale';

describe('find-first-supported-locale', () => {
  describe('findFirstSupportedLocale', () => {
    test.each([
      [[], [], undefined],
      [['zh'], [], undefined],
      [[], ['zh'], undefined],
      [[''], [''], ''],
      [['zh'], ['zh'], 'zh'],
      [['zh', 'zh-Hans'], ['zh'], 'zh'],
      [['zh', 'zh-Hans'], ['zh-Hans'], 'zh-Hans'],
      [['zh', 'zh-Hans'], ['zh', 'zh-Hans'], 'zh'],
      [['zh-Hans', 'zh'], ['zh', 'zh-Hans'], 'zh-Hans'],
      [['zh-Hans'], ['ZH-HANS'], 'zh-Hans'],
      [['ZH-HANS'], ['zh-Hans'], 'ZH-HANS'],
      [['zh-Hans'], ['zh-Hons'], undefined],
    ])(
      'from locales: %j, and supported locales %j, it should return "%s"',
      (
        locales: string[],
        supportedLocales: string[],
        expectedLocale: string | undefined,
      ) => {
        expect(findFirstSupportedLocale(locales, supportedLocales)).toEqual(
          expectedLocale,
        );
      },
    );
  });
});
