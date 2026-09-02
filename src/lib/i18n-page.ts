import { routing } from "@/i18n/routing";

/** À réexporter comme `generateStaticParams` dans les pages sous `[locale]`. */
export function generateLocaleParams() {
  return routing.locales.map((locale) => ({ locale }));
}
