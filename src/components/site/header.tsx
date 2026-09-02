import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { mainNav } from "@/lib/navigation";
import { LangSwitcher } from "./lang-switcher";

export function SiteHeader() {
  const t = useTranslations();

  return (
    <header className="border-border bg-background sticky top-0 z-40 border-b">
      <div className="bg-urgence text-white">
        <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-1.5 text-center text-xs sm:text-sm">
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          <span>
            {t.rich("header.emergencyBanner", {
              b: (chunks) => <strong>{chunks}</strong>,
            })}
          </span>
        </p>
      </div>

      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
        <Link href="/" className="font-heading text-caraibes text-lg font-bold">
          Madinina Santé
        </Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <ul className="text-anthracite-soft flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-caraibes transition-colors"
                >
                  {t(`nav.${item.labelKey}`)}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitcher />
        </div>
      </nav>
    </header>
  );
}
