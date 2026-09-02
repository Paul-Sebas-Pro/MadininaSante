import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/site/page-shell";
import { generateLocaleParams } from "@/lib/i18n-page";

export const generateStaticParams = generateLocaleParams;

export async function generateMetadata(
  props: PageProps<"/[locale]/mentions-legales">,
): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: locale === "fr" ? "Mentions légales" : "Legal notice",
    robots: { index: false },
  };
}

// TODO: compléter l'identité de l'éditeur (nom, statut, SIRET, directeur de
// publication) et l'hébergeur exact une fois le déploiement en place.
export default async function MentionsLegalesPage({
  params,
}: PageProps<"/[locale]/mentions-legales">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const fr = locale === "fr";

  return (
    <PageShell title={fr ? "Mentions légales" : "Legal notice"}>
      {fr ? (
        <>
          <h2>Éditeur</h2>
          <p>
            Madinina Santé — projet en cours de constitution. Les coordonnées
            complètes de l’éditeur seront publiées ici avant la mise en ligne
            officielle. Contact : <Link href="/contact">page contact</Link>.
          </p>
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San
            Francisco, CA 94107, États-Unis.
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les contenus rédactionnels de Madinina Santé sont protégés. Les
            données de l’annuaire et de la cartographie restent soumises aux
            licences de leurs sources (voir <Link href="/sources">Sources</Link>
            ).
          </p>
          <h2>Responsabilité</h2>
          <p>
            Les informations sont fournies à titre indicatif, sans garantie
            d’exactitude ni d’exhaustivité. En cas d’urgence vitale, appelez le
            15 ou le 112.
          </p>
        </>
      ) : (
        <>
          <h2>Publisher</h2>
          <p>
            Madinina Santé — project being set up. The publisher’s full details
            will be published here before the official launch. Contact:{" "}
            <Link href="/contact">contact page</Link>.
          </p>
          <h2>Hosting</h2>
          <p>
            The site is hosted by Cloudflare, Inc., 101 Townsend Street, San
            Francisco, CA 94107, USA.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Madinina Santé’s editorial content is protected. Directory and map
            data remain subject to their sources’ licences (see{" "}
            <Link href="/sources">Sources</Link>).
          </p>
          <h2>Liability</h2>
          <p>
            Information is provided for guidance only, with no guarantee of
            accuracy or completeness. In a life-threatening emergency, call 15
            or 112.
          </p>
        </>
      )}
    </PageShell>
  );
}
