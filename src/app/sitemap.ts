import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://madinina-sante.pages.dev";

/** Chemins publics indexables (hors locale). */
const paths = [
  "",
  "/urgences",
  "/annuaire",
  "/pharmacies-de-garde",
  "/conseils",
  "/a-propos",
  "/sources",
  "/contact",
  "/confidentialite",
];

function url(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteUrl}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: url(routing.defaultLocale, path),
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, url(locale, path)]),
      ),
    },
  }));
}
