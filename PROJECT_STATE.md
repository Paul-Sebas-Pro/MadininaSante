# PROJECT_STATE — Madinina Santé

> État vivant du projet. Mis à jour à chaque fin de session.
> Dernière mise à jour : 2026-08-30 (fin de session)

## Le projet en une phrase

PWA (Next.js) qui centralise pour la Martinique (972) : pharmacies/médecins de garde,
annuaire des professionnels de santé, urgences et conseils santé tropicale — gratuit,
FR/EN, habitants + touristes, hébergement à coût 0 €.

## Décisions validées (avec l'utilisateur)

1. **Plateforme v1** : PWA web-first. Stores plus tard via Capacitor (jalon 6, optionnel).
2. **Codebase** : Next.js App Router + TypeScript, repartir propre. Les 4 dossiers IA
   d'origine sont archivés dans `docs/legacy/` (référence figée, cahier des charges).
3. **Données** : open data (data.gouv.fr Annuaire Santé / FINESS + OSM) pour l'annuaire ;
   **curation manuelle via back-office `/admin`** pour le calendrier des gardes.
   Pas de scraping, pas d'attente de partenariat pour lancer.
4. **Budget infra** : strictement 0 €/mois (free tiers uniquement).

Roadmap détaillée : `/home/pablo/.claude/plans/prendre-connaissance-du-contexte-snoopy-cocke.md`

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 (tokens charte dans `src/app/globals.css`) + shadcn/ui (à ajouter au jalon 1)
- next-intl (FR défaut + EN) — à câbler au jalon 1
- Supabase (Postgres + PostGIS + Auth + RLS) — schéma à créer
- Drizzle ORM + drizzle-kit (migrations versionnées)
- Carto : MapLibre GL + tuiles OpenFreeMap (jalon 1)
- Hébergement : Cloudflare Pages (ou Vercel Hobby)
- Déps déjà installées : `@supabase/supabase-js`, `@supabase/ssr`, `drizzle-orm`,
  `postgres`, `zod`, `clsx`, `tailwind-merge`, `class-variance-authority`,
  `lucide-react`, `next-intl` ; dev : `prettier`, `prettier-plugin-tailwindcss`,
  `drizzle-kit`, `@types/pg`, `tsx`, `dotenv`.
- pnpm (via corepack). `pnpm-workspace.yaml` : `allowBuilds` esbuild=true, sharp/swc/parcel=false.

## Fait cette session (jalon 0 — en cours)

- [x] Branche `feat/jalon-0-fondations` créée.
- [x] Nettoyage racine : 4 dossiers IA + `Prompt.md` déplacés dans `docs/legacy/`.
- [x] Scaffold `create-next-app` (TS, Tailwind v4, App Router, src/, alias `@/*`, ESLint, Turbopack).
- [x] Dépendances runtime + dev installées.
- [x] `src/app/globals.css` : tokens de la charte (caraibes/tropical/soleil/anthracite/urgence, polices).
- [x] `src/app/layout.tsx` : polices Montserrat + Open Sans, `lang="fr"`, metadata SEO de base, viewport themeColor.

## Reste à faire — jalon 0

- [ ] `src/app/page.tsx` : remplacer la home create-next-app par la coquille d'accueil
      (hero + accès rapides Garde/Urgences/Annuaire). **Brouillon prêt, non écrit** (session en pause).
- [ ] `src/lib/env.ts` (validation zod des variables d'env) + `.env.example`.
- [ ] `src/lib/supabase/{client,server}.ts` + `src/lib/utils.ts` (`cn`).
- [ ] `src/db/schema.ts` (Drizzle) + `supabase/migrations/0001_init.sql` :
      tables `establishments` (PostGIS), `pharmacy_shifts`, `doctor_shifts`,
      `emergency_contacts`, `articles`, `pro_claims` + RLS lecture publique.
- [ ] `drizzle.config.ts`.
- [ ] Scripts `package.json` : `format`, `typecheck`, `db:generate`, `db:migrate`.
- [ ] `.prettierrc` + `prettier-plugin-tailwindcss`.
- [ ] `.github/workflows/ci.yml` : install + lint + typecheck + build (+ Lighthouse CI plus tard).
- [ ] `README.md` : réécrire (create-next-app l'a écrasé) — présentation, setup, scripts.
- [ ] `docs/` : déplacer/synthétiser les specs hors de `legacy/` (architecture.md, data-strategy.md).
- [ ] Créer projet Supabase réel + remplir `.env.local` + `pnpm db:migrate`.
- [ ] Premier déploiement preview Cloudflare Pages.

## Prochaine session — reprendre ici

1. Écrire `src/app/page.tsx` (coquille d'accueil).
2. Enchaîner la liste "Reste à faire — jalon 0" ci-dessus.
3. Puis jalon 1 (MVP consultable) — voir le plan.

## Notes / points d'attention

- **Next.js 16** (pas 15) : conventions modifiées vs training data. `AGENTS.md` (auto-généré,
  importé par `CLAUDE.md`) impose de lire `node_modules/next/dist/docs/` avant d'écrire du code Next.
- `README.md` original (15 o) écrasé par create-next-app — à réécrire, pas une perte.
- Contraste : `soleil #FFD700` sur blanc échoue WCAG AA → réservé aux fonds/icônes, jamais texte.
- Attribution **© OpenStreetMap** obligatoire (footer + page sources) dès qu'on importe les données OSM.
- Disclaimer « urgence vitale = 15 » à afficher sur Accueil / Urgences / Garde.
