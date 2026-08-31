# Décisions

## Produit / stratégie

| #   | Décision                                                                                                                                   | Raison                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| D1  | **PWA web-first** pour la v1 (pas d'app native au lancement)                                                                               | Un seul codebase, installable, hébergement gratuit, mise en ligne rapide. Stores via Capacitor plus tard (jalon 6, si traction). |
| D2  | **Repartir d'un projet Next.js neuf**                                                                                                      | Les 4 dossiers IA (`docs/legacy/`) ne sont pas exécutables. On récupère charte, logo, contenu, specs — pas le code.              |
| D3  | **Annuaire = open data ; gardes = curation manuelle** via back-office `/admin`                                                             | Résogardes / ARS n'ont pas d'API ouverte. Saisie hebdo (~15 min) : légale, fiable, sans dépendance fragile.                      |
| D4  | **Infra strictement 0 €/mois**                                                                                                             | Free tiers uniquement. Domaine et comptes stores = coûts optionnels différés.                                                    |
| D5  | Monétisation : Fiche Pro Premium (Stripe), encarts sponsorisés natifs, affiliation, partenariats. **Pas** de vente de données anonymisées. | Rester gratuit pour l'usager ; éviter le risque RGPD/réputation sur une app santé.                                               |

## Technique

| #   | Décision                                             | Raison                                                                                                                             |
| --- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| T1  | Next.js 16 App Router + TypeScript                   | SSR/SSG = SEO natif (acquisition), RSC, route handlers pour l'admin.                                                               |
| T2  | Supabase (Postgres + PostGIS) + Drizzle ORM          | Free tier généreux en lecture ; PostGIS pour « autour de moi ». Migrations SQL **à la main** (PostGIS/RLS), Drizzle = miroir typé. |
| T3  | Table `shifts` unique avec colonne `kind`            | Plutôt que `pharmacy_shifts` / `doctor_shifts` séparées — même forme, requêtes simples.                                            |
| T4  | Carto : MapLibre GL + tuiles OpenFreeMap             | 0 € sans clé ni quota. Itinéraire = deep-link vers l'app carto du téléphone.                                                       |
| T5  | Route group `(site)` + `/admin` séparé               | Chrome public vs back-office isolés.                                                                                               |
| T6  | Hébergement Cloudflare Pages (fallback Vercel Hobby) | Bande passante illimitée, builds illimités.                                                                                        |
