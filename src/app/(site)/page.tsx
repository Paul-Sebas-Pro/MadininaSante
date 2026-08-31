import Link from "next/link";
import { Ambulance, Pill, Stethoscope } from "lucide-react";

const quickLinks = [
  {
    href: "/pharmacies-de-garde",
    label: "Pharmacies de garde",
    description: "Ouvertes maintenant, près de vous",
    icon: Pill,
    tone: "bg-tropical/10 text-tropical-dark",
  },
  {
    href: "/urgences",
    label: "Urgences",
    description: "Numéros utiles et hôpitaux",
    icon: Ambulance,
    tone: "bg-urgence/10 text-urgence",
  },
  {
    href: "/annuaire",
    label: "Annuaire santé",
    description: "Médecins, cabinets, établissements",
    icon: Stethoscope,
    tone: "bg-caraibes/10 text-caraibes",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:py-16">
      <section className="text-center">
        <p className="text-caraibes font-heading text-sm font-semibold tracking-wide uppercase">
          Martinique · 972
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
          Votre santé en Martinique, simplifiée
        </h1>
        <p className="text-anthracite-soft mx-auto mt-4 max-w-2xl text-lg">
          Pharmacies de garde en temps réel, médecins, établissements de santé
          et numéros d&apos;urgence — pour les habitants et les visiteurs.
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
        Projet en construction — jalon 0 (fondations). Roadmap dans{" "}
        <code>PROJECT_STATE.md</code>.
      </section>
    </main>
  );
}
