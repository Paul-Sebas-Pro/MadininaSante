# Madinina Santé

PWA qui centralise pour la **Martinique (972)** : pharmacies et médecins de garde,
annuaire des professionnels de santé, numéros d'urgence et conseils santé tropicale.
Gratuit, bilingue FR/EN, pour les habitants **et** les visiteurs.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19 + TypeScript
- **Tailwind CSS v4** (tokens de la charte dans `src/app/globals.css`)
- **Supabase** (Postgres + PostGIS + Auth + RLS) — accès via **Drizzle ORM**
- **next-intl** (FR/EN), **MapLibre GL** + tuiles OpenFreeMap _(à venir)_
- Hébergement cible : **Cloudflare Pages** (free tier) — coût d'infra visé : 0 €

## Démarrer

```bash
pnpm install
cp .env.example .env.local   # renseigner les clés Supabase (optionnel tant que le backend n'existe pas)
pnpm dev                     # http://localhost:3000
```

Le site vitrine fonctionne sans Supabase configuré.

## Scripts

| Commande           | Rôle                               |
| ------------------ | ---------------------------------- |
| `pnpm dev`         | Serveur de développement           |
| `pnpm build`       | Build de production                |
| `pnpm lint`        | ESLint                             |
| `pnpm typecheck`   | `tsc --noEmit`                     |
| `pnpm format`      | Prettier (écriture)                |
| `pnpm db:generate` | Diff de schéma Drizzle (garde-fou) |

## Base de données

Migrations SQL maintenues à la main dans `supabase/migrations/` (PostGIS, RLS,
triggers). `supabase/seed.sql` contient les numéros d'urgence.
`src/db/schema.ts` est le miroir Drizzle (typage + `db:check`).

## Structure

```
src/
  app/
    (site)/            # site public (header + footer)
    layout.tsx         # racine : polices, metadata, <html lang="fr">
    not-found.tsx
  components/site/      # header, footer
  db/                  # schéma Drizzle + connexion
  lib/                 # env, supabase, utils, navigation
supabase/migrations/   # SQL
docs/                  # specs, roadmap, décisions
docs/legacy/           # travaux préparatoires archivés (gelés)
```

## Roadmap

Voir **`PROJECT_STATE.md`** (état vivant) et `docs/`. Jalons : 0 Fondations ·
1 MVP consultable · 2 Gardes + back-office · 3 Contenu · 4 Monétisation ·
5 Durcissement · 6 Stores (optionnel).
