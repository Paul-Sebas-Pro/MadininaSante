import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function SiteFooter() {
  const t = useTranslations();
  const links = [
    { href: "/a-propos", label: t("nav.aPropos") },
    { href: "/sources", label: t("footer.sources") },
    { href: "/mentions-legales", label: t("footer.legal") },
    { href: "/confidentialite", label: t("footer.privacy") },
    { href: "/contact", label: t("footer.contact") },
  ] as const;

  return (
    <footer className="border-border bg-surface mt-16 border-t">
      <div className="text-anthracite-soft mx-auto max-w-6xl space-y-4 px-4 py-8 text-sm">
        <p className="text-foreground font-heading font-semibold">
          Madinina Santé
        </p>
        <p className="max-w-2xl">{t("footer.disclaimer")}</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-caraibes">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs">{t("footer.attribution")}</p>
      </div>
    </footer>
  );
}
