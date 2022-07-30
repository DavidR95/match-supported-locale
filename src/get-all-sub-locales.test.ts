import { getAllSubLocales } from './get-all-sub-locales';

describe('get-all-sub-locales', () => {
  describe('getAllSubLocales', () => {
    test.each([
      ['', ['']],
      ['zh', ['zh']],
      ['zh-Hans', ['zh-Hans', 'zh']],
      ['zh-Hans-HK', ['zh-Hans-HK', 'zh-Hans', 'zh']],
      ['zh_Hans_HK', ['zh_Hans_HK']],
      ['zh--Hans-HK', ['zh--Hans-HK', 'zh--Hans', 'zh-', 'zh']],
    ])(
      'from locale "%s" it should return sub-locales: %j',
      (locale: string, expectedSubLocales: string[]) => {
        expect(getAllSubLocales(locale)).toEqual(expectedSubLocales);
      },
    );
  });
});
