import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Roboto_Condensed } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, hasLocale, locales, type Locale } from "@/dictionaries";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "700"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: LayoutProps<"/[lang]">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.meta.title, description: dict.meta.description };
}

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${montserrat.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header lang={lang as Locale} dict={dict} />
        <main className="flex-1">{props.children}</main>
        <div aria-hidden className="h-2 bg-white" />
        <Footer lang={lang as Locale} dict={dict} />
      </body>
    </html>
  );
}
