# Stratégie de données

## Annuaire (seed initial, rejouable ~1×/trimestre)

| Script                       | Source                                                                              | Licence                                                | Contenu                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| `scripts/import-datagouv.ts` | Annuaire Santé (CNAM) + FINESS, via data.gouv.fr                                    | Licence Ouverte / Etalab                               | Professionnels + établissements, filtre `département = 972`  |
| `scripts/import-osm.ts`      | Overpass API (`amenity=pharmacy\|hospital\|clinic\|doctors`) sur la bbox Martinique | ODbL → **attribution « © OpenStreetMap » obligatoire** | Complète horaires (`opening_hours`), coordonnées, téléphones |
| `scripts/geocode.ts`         | Nominatim OSM (batch, 1 req/s, cache)                                               | —                                                      | Coordonnées des adresses manquantes                          |

Déduplication : nom + distance < 50 m. Chaque fiche garde `source` et `external_id`
(clé unique `(source, external_id)`). `verified_at` = null tant que non contrôlée.

## Gardes (récurrent, manuel — jalon 2)

Back-office `/admin`. L'éditeur reporte le planning officiel affiché par l'ARS
Martinique / Résogardes / la presse locale dans la table `shifts`.
**Pas de scraping automatisé** (zone grise juridique + fragilité).
Charge : ~15 min/semaine. Badge « mis à jour le … » public + alerte mail si trou à J+2.

## Conformité (RGPD / données de santé)

- Aucune donnée de santé d'utilisateur stockée.
- Géolocalisation = API navigateur, jamais persistée ni transmise.
- Données affichées = **publiques** (annuaires officiels).
- Page `/sources` : origine des données + avertissement « urgence vitale = 15 ».
- Analytics sans cookie (Cloudflare Web Analytics / Umami) → pas de bandeau lourd.
