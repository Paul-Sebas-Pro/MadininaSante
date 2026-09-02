import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  // FR (défaut) servi à la racine, EN sous /en
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
