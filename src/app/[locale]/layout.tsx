import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Open_Sans } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://madinina-sante.pages.dev";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: { default: t("title"), template: "%s · Madinina Santé" },
    description: t("description"),
    applicationName: "Madinina Santé",
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      siteName: "Madinina Santé",
      url: locale === routing.defaultLocale ? siteUrl : `${siteUrl}/${locale}`,
    },
    twitter: { card: "summary_large_image" },
    icons: {
      icon: "/favicon.ico",
      apple: "/logo.png",
    },
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: { fr: "/", en: "/en" },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0077B6",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
