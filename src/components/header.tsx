import LocaleSwitcher from './locale-switcher'
import CustomLink from './custom-link'

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/libs/dictionary'
import ThemeSwitcher from './theme-switcher'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
      <header className="py-6">
          <nav className="container flex items-center justify-between">
              <ul className="flex gap-x-8">
                  <li>
                      <CustomLink href="/" lang={lang}>
                          {navigation.home}
                      </CustomLink>
                  </li>
                  <li>
                      <CustomLink href="/about" lang={lang}>
                          {navigation.about}
                      </CustomLink>
                  </li>
              </ul>
              <ThemeSwitcher />
              <LocaleSwitcher />
          </nav>
      </header>
  );
}
