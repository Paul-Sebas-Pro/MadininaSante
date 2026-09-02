import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/site/page-shell";
import { generateLocaleParams } from "@/lib/i18n-page";

export const generateStaticParams = generateLocaleParams;

export async function generateMetadata(
  props: PageProps<"/[locale]/confidentialite">,
): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: locale === "fr" ? "Confidentialité" : "Privacy",
    description:
      locale === "fr"
        ? "Aucune donnée de santé, pas de compte, pas de cookie publicitaire."
        : "No health data, no account, no advertising cookies.",
  };
}

export default async function ConfidentialitePage({
  params,
}: PageProps<"/[locale]/confidentialite">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const fr = locale === "fr";

  return (
    <PageShell title={fr ? "Confidentialité" : "Privacy"}>
      {fr ? (
        <>
          <p>
            Madinina Santé est conçu pour fonctionner sans collecter vos données
            personnelles.
          </p>
          <h2>Ce que nous ne faisons pas</h2>
          <p>
            Pas de compte utilisateur, pas de données de santé, pas de cookie
            publicitaire ni de traceur tiers.
          </p>
          <h2>Géolocalisation</h2>
          <p>
            La fonction « autour de moi » utilise la géolocalisation de votre
            navigateur, uniquement à votre demande. Votre position est utilisée
            sur votre appareil pour trier les résultats et n’est ni stockée ni
            transmise.
          </p>
          <h2>Mesure d’audience</h2>
          <p>
            Nous utilisons une mesure d’audience respectueuse de la vie privée,
            sans cookie et sans identification individuelle.
          </p>
          <h2>Formulaires</h2>
          <p>
            Les informations envoyées via le formulaire de contact servent
            uniquement à traiter votre demande.
          </p>
          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous pouvez nous contacter pour toute question
            relative à vos données : <Link href="/contact">page contact</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            Madinina Santé is built to work without collecting your personal
            data.
          </p>
          <h2>What we don’t do</h2>
          <p>
            No user account, no health data, no advertising cookie or
            third-party tracker.
          </p>
          <h2>Geolocation</h2>
          <p>
            The “near me” feature uses your browser’s geolocation, only when you
            ask for it. Your position is used on your device to sort results and
            is neither stored nor transmitted.
          </p>
          <h2>Analytics</h2>
          <p>
            We use privacy-friendly analytics, with no cookie and no individual
            identification.
          </p>
          <h2>Forms</h2>
          <p>
            Information sent through the contact form is used only to handle
            your request.
          </p>
          <h2>Your rights</h2>
          <p>
            Under the GDPR, you can contact us with any question about your
            data: <Link href="/contact">contact page</Link>.
          </p>
        </>
      )}
    </PageShell>
  );
}
