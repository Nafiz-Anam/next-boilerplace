import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import ThemeSwitcher from "./theme-switcher";

export default function Navigation() {
    const t = useTranslations("Navigation");

    return (
        <div className="container dark:bg-slate-850 bg-slate">
            <nav className="container flex justify-between py-2 px-0 text-black dark:text-white">
                <div>
                    <h1 className="text-xl font-bol cursor-pointer">Logo</h1>
                </div>
                <div>
                    <NavigationLink href="/">{t("home")}</NavigationLink>
                    <NavigationLink href="/pathnames">
                        {t("pathnames")}
                    </NavigationLink>
                </div>
                <div>
                    <ThemeSwitcher />
                    <LocaleSwitcher />
                </div>
            </nav>
        </div>
    );
}
