import { typeLocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: typeLocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
