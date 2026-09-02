import { getTranslations, setRequestLocale } from "next-intl/server";
import { Ambulance, Pill, Stethoscope } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const quickLinks = [
    {
      href: "/pharmacies-de-garde",
      label: t("quick.pharmacies"),
      description: t("quick.pharmaciesDesc"),
      icon: Pill,
      tone: "bg-tropical/10 text-tropical-dark",
    },
    {
      href: "/urgences",
      label: t("quick.urgences"),
      description: t("quick.urgencesDesc"),
      icon: Ambulance,
      tone: "bg-urgence/10 text-urgence",
    },
    {
      href: "/annuaire",
      label: t("quick.annuaire"),
      description: t("quick.annuaireDesc"),
      icon: Stethoscope,
      tone: "bg-caraibes/10 text-caraibes",
    },
  ] as const;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:py-16">
      <section className="text-center">
        <p className="text-caraibes font-heading text-sm font-semibold tracking-wide uppercase">
          {t("region")}
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{t("title")}</h1>
        <p className="text-anthracite-soft mx-auto mt-4 max-w-2xl text-lg">
          {t("subtitle")}
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {quickLinks.map(({ href, label, description, icon: Icon, tone }) => (
          <Link
            key={href}
            href={href}
            className="border-border bg-surface hover:border-caraibes rounded-2xl border p-5 transition-colors"
          >
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tone}`}
            >
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-4 text-lg font-semibold">{label}</h2>
            <p className="text-anthracite-soft mt-1 text-sm">{description}</p>
          </Link>
        ))}
      </section>

      <section className="border-border text-anthracite-soft mt-12 rounded-2xl border border-dashed p-5 text-sm">
        {t("wip")}
      </section>
    </main>
  );
}
