"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LangSwitcher() {
  const active = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-xs">
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          aria-current={locale === active ? "true" : undefined}
          className={
            locale === active
              ? "text-caraibes font-semibold"
              : "text-anthracite-soft hover:text-caraibes"
          }
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
