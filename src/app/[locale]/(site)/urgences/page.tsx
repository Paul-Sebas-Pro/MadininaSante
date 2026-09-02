import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  emergencyContacts,
  hospitals,
  type EmergencyContact,
} from "@/lib/emergency-data";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: PageProps<"/[locale]/urgences">,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "urgences" });
  return { title: t("title"), description: t("intro") };
}

function ContactCard({
  contact,
  locale,
  callLabel,
}: {
  contact: EmergencyContact;
  locale: string;
  callLabel: string;
}) {
  const description =
    locale === "fr" ? contact.descriptionFr : contact.descriptionEn;
  return (
    <li className="border-border bg-surface flex items-center justify-between gap-4 rounded-xl border p-4">
      <div>
        <p className="font-semibold">{contact.label}</p>
        <p className="text-anthracite-soft text-sm">{description}</p>
      </div>
      <a
        href={`tel:${contact.dial}`}
        aria-label={callLabel}
        className="bg-urgence shrink-0 rounded-lg px-3 py-2 text-lg font-bold text-white tabular-nums"
      >
        {contact.phone}
      </a>
    </li>
  );
}

export default async function UrgencesPage({
  params,
}: PageProps<"/[locale]/urgences">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "urgences" });

  const national = emergencyContacts.filter((c) => c.scope === "national");
  const local = emergencyContacts.filter((c) => c.scope === "local");
  const call = (phone: string) => t("call", { phone });

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold sm:text-4xl">{t("title")}</h1>

      <p className="bg-urgence/10 text-urgence mt-4 flex gap-2 rounded-xl p-4 text-sm font-medium">
        <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        {t("intro")}
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">{t("nationalHeading")}</h2>
        <ul className="mt-3 space-y-2">
          {national.map((c) => (
            <ContactCard
              key={c.label}
              contact={c}
              locale={locale}
              callLabel={call(c.phone)}
            />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">{t("localHeading")}</h2>
        <ul className="mt-3 space-y-2">
          {local.map((c) => (
            <ContactCard
              key={c.label}
              contact={c}
              locale={locale}
              callLabel={call(c.phone)}
            />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">{t("hospitalsHeading")}</h2>
        <ul className="mt-3 space-y-2">
          {hospitals.map((h) => (
            <li
              key={h.name}
              className="border-border bg-surface rounded-xl border p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">{h.name}</p>
                  <p className="text-anthracite-soft text-sm">
                    {h.city} — {locale === "fr" ? h.noteFr : h.noteEn}
                  </p>
                </div>
                <a
                  href={`tel:${h.dial}`}
                  aria-label={call(h.phone)}
                  className="text-caraibes shrink-0 text-sm font-semibold whitespace-nowrap"
                >
                  {h.phone}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
