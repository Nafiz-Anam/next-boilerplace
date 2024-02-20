import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import ThemeSwitcher from "./theme-switcher";

export default function Navigation() {
    const t = useTranslations("Navigation");

    return (
        <div className="dark:bg-slate-850 bg-slate">
            <nav className="container flex justify-between p-2 text-black dark:text-white">
                <div>
                    <NavigationLink href="/">{t("home")}</NavigationLink>
                    <NavigationLink href="/pathnames">
                        {t("pathnames")}
                    </NavigationLink>
                </div>
                <ThemeSwitcher />
                <LocaleSwitcher />
            </nav>
        </div>
    );
}
