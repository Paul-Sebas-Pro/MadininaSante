import Link from "next/link";
import "./globals.css";

// Rendu quand aucune locale ne correspond (hors du segment [locale]).
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="text-caraibes font-heading text-5xl font-bold">404</p>
        <h1 className="mt-4 text-xl font-semibold">Page introuvable</h1>
        <p className="text-anthracite-soft mt-2 text-sm">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="bg-caraibes mt-6 rounded-lg px-5 py-2.5 text-sm font-medium text-white"
        >
          Retour à l&apos;accueil
        </Link>
      </body>
    </html>
  );
}
