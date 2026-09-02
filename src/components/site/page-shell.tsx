import type { ReactNode } from "react";

/** Conteneur standard pour les pages de contenu (largeur lecture, titre h1). */
export function PageShell({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      {lead ? (
        <p className="text-anthracite-soft mt-3 text-lg">{lead}</p>
      ) : null}
      <div className="[&_a]:text-caraibes [&_h2]:font-heading mt-6 space-y-4 leading-relaxed [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold">
        {children}
      </div>
    </main>
  );
}
