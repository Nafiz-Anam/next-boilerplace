// Use type safe locales keys with `next-intl`
type Locales = typeof import("./src/locales/en.json");
declare interface IntlLocales extends Locales {}
