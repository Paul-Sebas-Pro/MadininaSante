import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/site/page-shell";
import { generateLocaleParams } from "@/lib/i18n-page";

export const generateStaticParams = generateLocaleParams;

export async function generateMetadata(
  props: PageProps<"/[locale]/sources">,
): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: locale === "fr" ? "Sources des données" : "Data sources",
    description:
      locale === "fr"
        ? "Origine des données affichées et avertissement d'usage."
        : "Where the displayed data comes from, and usage disclaimer.",
  };
}

export default async function SourcesPage({
  params,
}: PageProps<"/[locale]/sources">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const fr = locale === "fr";

  return (
    <PageShell title={fr ? "Sources des données" : "Data sources"}>
      {fr ? (
        <>
          <h2>Annuaire des professionnels et établissements</h2>
          <p>
            Construit à partir de données publiques : l’Annuaire Santé
            (Assurance Maladie) et la base FINESS, diffusées sur data.gouv.fr
            sous Licence Ouverte / Etalab, complétées par OpenStreetMap.
          </p>
          <h2>Cartographie</h2>
          <p>
            Fonds de carte et positions : © les contributeurs OpenStreetMap,
            données sous licence ODbL.
          </p>
          <h2>Pharmacies et médecins de garde</h2>
          <p>
            Les plannings de garde sont saisis et vérifiés manuellement à partir
            des informations officielles (ARS Martinique, Résogardes, presse
            locale). Une date de mise à jour est indiquée sur la page concernée.
          </p>
          <h2>Avertissement</h2>
          <p>
            Ces informations sont fournies à titre indicatif et peuvent contenir
            des erreurs ou être périmées. Elles ne remplacent pas un avis
            médical. En cas d’urgence vitale, appelez le 15 (SAMU) ou le 112.
          </p>
          <p>
            Une erreur ? <Link href="/contact">Signalez-la-nous</Link>.
          </p>
        </>
      ) : (
        <>
          <h2>Directory of professionals and facilities</h2>
          <p>
            Built from public data: the Annuaire Santé (French health insurance)
            and the FINESS database, published on data.gouv.fr under the Etalab
            Open Licence, complemented by OpenStreetMap.
          </p>
          <h2>Mapping</h2>
          <p>
            Base map and locations: © OpenStreetMap contributors, data under the
            ODbL licence.
          </p>
          <h2>On-call pharmacies and doctors</h2>
          <p>
            On-call schedules are entered and checked manually from official
            sources (ARS Martinique, Résogardes, local press). An update date is
            shown on the relevant page.
          </p>
          <h2>Disclaimer</h2>
          <p>
            This information is provided for guidance only and may contain
            errors or be out of date. It does not replace medical advice. In a
            life-threatening emergency, call 15 or 112.
          </p>
          <p>
            Found an error? <Link href="/contact">Let us know</Link>.
          </p>
        </>
      )}
    </PageShell>
  );
}
