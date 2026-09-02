# PROJECT_STATE — Madinina Santé

> État vivant du projet. Mis à jour à chaque fin de session.
> Dernière mise à jour : 2026-09-02 — jalon 1 **en cours** (branche `feat/jalon-1-mvp`) : i18n + page Urgences faits.
> Jalon 0 mergé dans `main` (PR #2, `bbddfb8`).

## Le projet en une phrase

PWA (Next.js) qui centralise pour la Martinique (972) : pharmacies/médecins de garde,
annuaire des professionnels de santé, urgences et conseils santé tropicale — gratuit,
FR/EN, habitants + touristes, hébergement à coût 0 €.

## Décisions validées

Voir `docs/decisions.md`. Résumé : PWA web-first · Next.js neuf · annuaire open data +
gardes en curation manuelle via `/admin` · infra strictement 0 €/mois.
Roadmap : `docs/roadmap.md` (+ plan détaillé dans `~/.claude/plans/…snoopy-cocke.md`).

## Stack en place

- Next.js **16.3.3** (App Router, Turbopack) + React 19 + TS
- Tailwind CSS v4 — tokens charte dans `src/app/globals.css`
- Supabase (Postgres/PostGIS/Auth/RLS) + Drizzle ORM — **schéma écrit, base pas encore créée**
- Déps : `@supabase/{supabase-js,ssr}`, `drizzle-orm`, `postgres`, `zod`, `clsx`,
  `tailwind-merge`, `class-variance-authority`, `lucide-react`, `next-intl`, `server-only`
  ; dev : `prettier` (+ plugin tailwind), `drizzle-kit`, `tsx`, `dotenv`, `@types/pg`
- pnpm via corepack. `pnpm-workspace.yaml` → `allowBuilds` esbuild=true.

## Fait — jalon 0 (terminé)

- [x] Branche `feat/jalon-0-suite`.
- [x] `src/app/globals.css` : tokens charte (caraibes/tropical/soleil/anthracite/urgence, polices).
- [x] `src/app/layout.tsx` : polices Montserrat + Open Sans, `lang="fr"`, metadata SEO, viewport themeColor.
- [x] Route group `(site)` : `layout.tsx` (header + footer), `page.tsx` (accueil coquille).
- [x] `src/components/site/{header,footer}.tsx` + `src/lib/navigation.ts` (nav + disclaimer urgence).
- [x] `src/app/not-found.tsx`.
- [x] `src/lib/env.ts` (validation zod) + `.env.example` + `.gitignore` (`!.env.example`).
- [x] `src/lib/supabase/{client,server}.ts` (via `@supabase/ssr`), `src/lib/utils.ts` (`cn`).
- [x] `src/db/schema.ts` (Drizzle) + `src/db/index.ts` (connexion tolérante à l'absence de `DATABASE_URL`).
- [x] `drizzle.config.ts` (out → `drizzle/`, gitignoré, garde-fou anti-dérive).
- [x] `supabase/migrations/0001_init.sql` : PostGIS, enums, tables
      (`establishments` avec `location geography` générée + GIST + trigram,
      `shifts` **table unique avec `kind`**, `emergency_contacts`, `articles`,
      `pro_claims`, `profiles`), triggers `updated_at`, `handle_new_user`, `is_editor()`,
      **RLS** (lecture publique du contenu, écriture éditeurs, insert claim public).
- [x] `supabase/seed.sql` : 10 numéros d'urgence (SAMU, pompiers, SOS Médecins 972, CROSS AG…).
- [x] Scripts `package.json` : `format`, `format:check`, `typecheck`, `db:generate`, `db:check`.
- [x] `.prettierrc.json` + `.prettierignore` ; `eslint.config.mjs` ignore `docs/legacy/**`.
- [x] `.github/workflows/ci.yml` : install + format:check + lint + typecheck + build.
- [x] `README.md` réécrit ; `docs/{README,decisions,roadmap,data-strategy}.md`.
- [x] **Vérifié** : `pnpm build` OK (`/` + `/_not-found` prérendus statiques), `typecheck` OK,
      `lint` OK, `format:check` OK, smoke test `next start` (home + 404) OK.
- [x] CI verte après 2 correctifs : `PROJECT_STATE.md` formaté prettier ;
      `typecheck` = `next typegen && tsc --noEmit` (type global `LayoutProps` sinon absent en CI).

## Reste à faire — jalon 0 (hors code, avec l'utilisateur)

- [ ] Créer le projet Supabase réel, remplir `.env.local`, appliquer
      `supabase/migrations/0001_init.sql` + `supabase/seed.sql` (SQL editor ou `supabase` CLI).
- [ ] Créer le repo GitHub distant + brancher **Cloudflare Pages** (build `pnpm build`,
      sortie `.next`, var `NEXT_PUBLIC_SITE_URL`), obtenir l'URL `*.pages.dev`.
- [ ] Ajouter `logo_madinina_sante.png` (dans `docs/legacy/.../`) → `public/` + favicons/icônes PWA.

## Fait — jalon 1 (en cours, branche `feat/jalon-1-mvp`)

- [x] `src/lib/env.ts` : `z.string().url()` (déprécié zod 4) → `z.url()`.
- [x] **i18n next-intl** (FR défaut, EN sous `/en`, `localePrefix: as-needed`) :
      `src/i18n/{routing,navigation,request}.ts`, `src/proxy.ts` (Next 16 : `proxy` pas `middleware`),
      plugin dans `next.config.ts`, `messages/{fr,en}.json`.
- [x] Routes déplacées sous `src/app/[locale]/` : root `layout.tsx` = pass-through,
      `[locale]/layout.tsx` = `<html lang>` + polices + `NextIntlClientProvider` +
      `generateStaticParams` + `generateMetadata` localisée + `setRequestLocale`.
      `[locale]/not-found.tsx`, `[locale]/[...rest]/page.tsx` (catch-all → 404),
      root `not-found.tsx` (html/body complet).
- [x] `SiteHeader`/`SiteFooter` traduits ; `LangSwitcher` (client) ;
      `src/lib/navigation.ts` → `mainNav` avec `labelKey`.
- [x] **Page Urgences** `/urgences` : `src/lib/emergency-data.ts` (10 numéros + 4 hôpitaux,
      FR/EN), liens `tel:`, groupée national/local/hôpitaux, metadata.
- [x] **Vérifié** : build OK (`/fr`, `/en`, `/fr/urgences`, `/en/urgences` en **SSG**),
      typecheck/lint/format OK, smoke test (FR/EN home + urgences + 404 + redirect `/fr`→`/`).

## Reste — jalon 1

1. Page **Annuaire** : `scripts/import-datagouv.ts` + `import-osm.ts`, liste + filtres
   - recherche plein texte + fiche détaillée + carte MapLibre + « autour de moi » (PostGIS).
2. Câbler Urgences sur `emergency_contacts` (DB) avec fallback statique quand pas de DB.
3. shadcn/ui (init), composants `Map`, `SearchBar`, `ProCard`.
4. PWA (`next-pwa` compatible Next 16), `manifest.ts`, `sitemap.ts`, `robots.ts`.
5. Pages légales : `/mentions-legales`, `/confidentialite`, `/sources`, `/contact`, `/a-propos`
   (footer y pointe déjà → 404 pour l'instant).
6. JSON-LD (`Pharmacy`, `Hospital`, `MedicalBusiness`) sur les fiches + page Urgences.
7. Vrai menu burger mobile (client component).

## Notes / points d'attention

- **Next.js 16** : lire `node_modules/next/dist/docs/` avant d'écrire du code Next
  (imposé par `AGENTS.md`, importé par `CLAUDE.md`). Layouts typés : `LayoutProps<"/">`.
  `cookies()` est **async**.
- Migration SQL 0001 pas encore appliquée sur une vraie base → à tester au 1er déploiement.
- `shifts` = 1 table (`kind` = pharmacie|medecin|mmg), pas 2 tables comme le plan initial.
- Contraste : `soleil #FFD700` sur blanc échoue WCAG AA → fonds/icônes only, jamais texte.
- Attribution **© OpenStreetMap** déjà dans le footer — garder dès l'import OSM + page `/sources`.
- Header : menu mobile = simple wrap pour l'instant ; vrai burger (client component) au jalon 1.
