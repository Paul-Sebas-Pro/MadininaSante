import Link from "next/link";
import { EMERGENCY_DISCLAIMER } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-border bg-surface mt-16 border-t">
      <div className="text-anthracite-soft mx-auto max-w-6xl space-y-4 px-4 py-8 text-sm">
        <p className="text-foreground font-heading font-semibold">
          Madinina Santé
        </p>
        <p className="max-w-2xl">{EMERGENCY_DISCLAIMER}</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li>
            <Link href="/a-propos" className="hover:text-caraibes">
              À propos
            </Link>
          </li>
          <li>
            <Link href="/sources" className="hover:text-caraibes">
              Sources des données
            </Link>
          </li>
          <li>
            <Link href="/mentions-legales" className="hover:text-caraibes">
              Mentions légales
            </Link>
          </li>
          <li>
            <Link href="/confidentialite" className="hover:text-caraibes">
              Confidentialité
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-caraibes">
              Contact
            </Link>
          </li>
        </ul>
        <p className="text-xs">
          Données cartographiques © les contributeurs OpenStreetMap. Annuaire
          issu des données publiques (data.gouv.fr, FINESS).
        </p>
      </div>
    </footer>
  );
}
