import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
    params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    const t = useTranslations("IndexPage");

    return (
        <div className="container">
            <h1 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                tenetur eligendi incidunt alias animi asperiores mollitia,
                dolorem officia accusamus ullam eius quasi? Ducimus quis
                cupiditate optio atque laudantium ratione, ipsam molestiae
                earum, accusamus obcaecati error eius eos. Optio dolore quas
                ipsum blanditiis, repellat voluptates quis pariatur. Dolores
                obcaecati eveniet iusto.
            </p>
        </div>
    );
}
