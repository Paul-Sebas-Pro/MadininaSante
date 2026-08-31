# Roadmap

Rythme solo, ~0 €/mois. Première mise en ligne publique utile dès la fin du **jalon 1**.

## Jalon 0 — Fondations

Init Next.js, nettoyage repo, tokens charte, schéma Supabase + migrations, CI,
premier déploiement preview.

## Jalon 1 — MVP consultable _(1re mise en prod)_

Accueil · **Urgences** (statique, fiable) · **Annuaire** (import open data, filtres,
recherche, fiche, carte MapLibre, « autour de moi ») · **PWA** installable + offline ·
**i18n FR/EN** · SEO (metadata, JSON-LD, sitemap/robots) · pages légales + « Sources ».

## Jalon 2 — Gardes + back-office

`/admin` protégé (Supabase Auth) : CRUD gardes, calendrier hebdo, duplication de
semaine, journal. Pages publiques **Pharmacies de garde** / **Médecins de garde**
(garde du jour + 7 jours, carte, tri distance). Revalidation on-demand. Alerte mail
éditeur si aucune garde saisie à J+2.

## Jalon 3 — Contenu & acquisition

6–10 articles conseils santé tropicale (MDX, bilingues). Fiches pro enrichies +
formulaire « Je suis ce professionnel ». À propos / Contact. Analytics + Search Console.
SEO local : 1 page par commune.

## Jalon 4 — Monétisation

Fiche Pro Premium (Stripe Payment Links). Encarts sponsorisés natifs étiquetés.
Liens d'affiliation sur les articles.

## Jalon 5 — Durcissement

Sentry, budgets Lighthouse en CI (≥ 90), tests Vitest + Playwright, audit a11y,
sauvegarde Supabase, guides `docs/`. Tag v1.0.

## Jalon 6 — Stores _(optionnel, différé)_

Capacitor (APK/IPA), notifications push, comptes développeurs (25 USD Google /
99 USD/an Apple), fiches ASO FR/EN.

## Idées post-v1

Mode Urgence plein écran offline · partage de position (SMS/WhatsApp) · créole en 3e
langue · alertes sanitaires ARS (dengue, sargasses) · favoris locaux sans compte ·
widget/QR pour hôtels · signalement communautaire d'info erronée.
