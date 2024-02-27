import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { locales } from "@/config";
import Navigation from "@/components/Navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params: { locale },
}: Omit<Props, "children">) {
    const t = await getTranslations({ locale, namespace: "LocaleLayout" });

    return {
        title: t("title"),
    };
}

export default function RootLayout({ children, params: { locale } }: Props) {
    // Enable static rendering
    unstable_setRequestLocale(locale);
    const messages = useMessages();
    return (
        <html className="h-full" lang={locale}>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <Navigation />
                        <main>{children}</main>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
