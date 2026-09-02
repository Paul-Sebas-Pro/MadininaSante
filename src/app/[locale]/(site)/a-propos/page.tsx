import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/site/page-shell";
import { generateLocaleParams } from "@/lib/i18n-page";

export const generateStaticParams = generateLocaleParams;

export async function generateMetadata(
  props: PageProps<"/[locale]/a-propos">,
): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: locale === "fr" ? "À propos" : "About",
    description:
      locale === "fr"
        ? "La mission de Madinina Santé et l'origine de ses données."
        : "Madinina Santé's mission and where its data comes from.",
  };
}

export default async function AProposPage({
  params,
}: PageProps<"/[locale]/a-propos">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const fr = locale === "fr";

  return (
    <PageShell
      title={fr ? "À propos" : "About"}
      lead={
        fr
          ? "Faciliter l'accès aux soins en Martinique, pour les habitants comme pour les visiteurs."
          : "Making healthcare easier to reach in Martinique, for residents and visitors alike."
      }
    >
      {fr ? (
        <>
          <h2>Notre mission</h2>
          <p>
            Madinina Santé regroupe au même endroit les informations pratiques
            de santé en Martinique : pharmacies et médecins de garde, annuaire
            des professionnels, numéros d&apos;urgence et conseils adaptés au
            climat tropical.
          </p>
          <h2>Gratuit et indépendant</h2>
          <p>
            Le service est gratuit pour les utilisateurs. Il n&apos;exige aucun
            compte et ne collecte aucune donnée de santé.
          </p>
          <h2>D&apos;où viennent les données</h2>
          <p>
            L&apos;annuaire s&apos;appuie sur les données publiques
            (data.gouv.fr, FINESS) et OpenStreetMap. Les gardes sont saisies et
            vérifiées manuellement. Voir la page{" "}
            <Link href="/sources">Sources des données</Link>.
          </p>
          <p className="text-anthracite-soft text-sm">
            En cas d&apos;urgence vitale, appelez le 15 ou le 112.
          </p>
        </>
      ) : (
        <>
          <h2>Our mission</h2>
          <p>
            Madinina Santé brings together practical health information for
            Martinique in one place: on-call pharmacies and doctors, a directory
            of professionals, emergency numbers and advice suited to the
            tropical climate.
          </p>
          <h2>Free and independent</h2>
          <p>
            The service is free for users. It requires no account and collects
            no health data.
          </p>
          <h2>Where the data comes from</h2>
          <p>
            The directory is based on public data (data.gouv.fr, FINESS) and
            OpenStreetMap. On-call schedules are entered and checked manually.
            See the <Link href="/sources">Data sources</Link> page.
          </p>
          <p className="text-anthracite-soft text-sm">
            In a life-threatening emergency, call 15 or 112.
          </p>
        </>
      )}
    </PageShell>
  );
}
