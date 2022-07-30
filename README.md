# Match Supported Locale

A small, zero-dependency, TypeScript-compatible utility for best-matching a locale against a list of supported locales.

## Installation

```bash
npm install match-supported-locale
```

## Usage

```typescript
import { matchSupportedLocale } from 'match-supported-locale';

matchSupportedLocale('zh-Hans-HK', ['en', 'zh-Hans', 'fr-FR']); // = 'zh-Hans'
matchSupportedLocale('en-US', ['en', 'zh-Hans', 'fr-FR']); // = 'en'
matchSupportedLocale('zh-Hant', ['en', 'zh-Hans', 'fr-FR'], {
  zh: 'zh-Hans',
}); // = 'zh-Hans' (with optional language locale fallback)
```

### Options

- `locale: string`

  The locale to find a best-match against. Usually taken from `navigator.language`.

- `supportedLocales: string[]`

  The list of locales your application supports.

- `languageLocaleFallbacks?: Record<string, string>`

  Optional. Allows specifying language-wide fallbacks when no direct matches can be found. For example:

  ```typescript
  matchSupportedLocale('en-US', ['en-GB', 'en-NZ'], {
    en: 'en-GB',
  }); // = 'en-GB'
  ```

## More Details & Real Examples

This will mostly be useful when trying to set the initial language of an internalization plugin - where you want to restrict that value to a list of officially supported languages.

Usually this initial language will be derived from `navigator.language` when running in a browser environment, but this value can be unpredictable depending on the device/browser.

If your application specifically supports `zh-Hans`, you'll likely want to use that locale regardless of whether `navigator.language` returns `zh`, `zh-Hans` or `zh-Hans-HK`.

```typescript
const defaultLocale = 'en-US';

const supportedLocales = ['en-GB', 'en-US', 'fr-FR', 'de-DE', 'de-LI'];

const locale =
  matchSupportedLocale(navigator.language, supportedLocales, {
    en: 'en-GB',
    fr: 'fr-FR',
    de: 'de-DE',
  }) ?? defaultLocale;
```

Using the code above, `locale` can now be passed to your internalization plugin with confidence that it is definitely one of your supported locales, and that it has matched as closely as it can.
