Tu es une intelligence artificielle experte en développement mobile multiplateforme (iOS/Android), conception UI/UX mobile-first, intégration API santé officielles, et optimisation SEO/performances.  
Tu maîtrises les frameworks cross-platform (Flutter ou React Native), l’approche responsive mobile-first avec Tailwind via CDN, les intégrations API, la gestion d’état/navigation/cache local, et le déploiement sur Apple Store et Google Play Store.  

Mon contexte est le suivant :  
Je veux développer une application mobile clé en main appelée **Madinina Santé**, destinée aux habitants et visiteurs de la Martinique (Département 972).  

Elle doit :  
- Centraliser les horaires des médecins, cabinets médicaux, pharmacies et autres établissements de santé.  
- Fournir la liste des médecins et pharmacies de garde en temps réel via des API officielles.  
- Inclure un annuaire avec fiches détaillées (coordonnées, horaires, services, géolocalisation).  
- Proposer les numéros d’urgence locaux et nationaux, hôpitaux et conseils premiers secours.  
- Contenir une section de **conseils santé spécifiques à la Martinique** (maladies tropicales, précautions soleil, moustiques, etc.).  
- Être multilingue (FR/EN) pour cibler habitants et touristes.  
- Être gratuite sur les stores tout en intégrant un modèle de monétisation.  
- Respecter le RGPD et la législation française en matière de santé.  
- Inclure une charte graphique, un nom et un **logo (fourni en pièce jointe)** adaptés à la Martinique et aux Antilles françaises.  

Pour ça, voici les étapes à suivre :  

1. Créer une application mobile-first avec la structure **obligatoire** :  
   `header + nav (menu hamburger mobile) → hero → about → features → testimonials → faq → contact → footer`.  

2. Développer les pages principales :  
   - Accueil (hero, services, recherche rapide, urgences, témoignages, call-to-action)  
   - Annuaire des professionnels (recherche, filtres, cartes interactives, fiches pros)  
   - Pharmacies de garde (liste temps réel, géolocalisation, itinéraires)  
   - Urgences (numéros, hôpitaux, médecins de garde)  
   - Conseils santé (prévention maladies tropicales, conseils touristes, blog)  
   - À propos (mission, équipe, partenaires, valeurs)  
   - Contact (formulaire, infos, FAQ)  

3. Intégrer les fonctionnalités clés :  
   - Géolocalisation et calcul d’itinéraires (Google Maps API, OSM ou Mapbox)  
   - Mode hors ligne partiel (cache avec Hive ou sqflite)  
   - Historique et favoris utilisateurs  
   - Évaluations et commentaires modérés  
   - Notifications push (alertes santé, pharmacies de garde)  

4. UI/UX :  
   - Design clair, tropical et médical (couleurs : Bleu Caraïbes #0077B6, Vert Tropical #2ECC71, Jaune Soleil #FFD700, Blanc Pur #FFFFFF, Gris Anthracite #34495E)  
   - Typographies : Montserrat/Open Sans pour titres, Roboto/Lato pour corps  
   - Boutons animés, cards avec ombres subtiles, navigation sticky, modales, micro-interactions  
   - Animations (fade-in, slide-up, parallax subtil, loading animations)  

5. Performance et SEO :  
   - Lazy loading des images  
   - Minification CSS/JS  
   - Cache via Service Worker  
   - Meta tags optimisés, Schema.org, Open Graph, Twitter Cards  
   - Sitemap XML et robots.txt  

6. Architecture et stack technique :  
   - Framework cross-platform stable (Flutter recommandé)  
   - Architecture modulaire (Clean Architecture ou MVVM)  
   - Couche UI → Couche Domaine → Couche Data (APIs, cache local)  
   - Tests adaptés à un débutant  

7. Générer l’identité visuelle complète :  
   - Utiliser le **logo fourni en pièce jointe**  
   - Palette de couleurs et typographies respectées  
   - Version multilingue intégrée  

Voici les caractéristiques du résultat attendu :  
- Application **clé en main prête à déployer** sur Apple Store et Play Store  
- 100% responsive, mobile-first, avec Tailwind via CDN (pas de CSS classique sauf strict nécessaire)  
- UI harmonieuse et professionnelle adaptée **au secteur médical, au tourisme et surtout à la population locale martiniquaise**  
- Code sans commentaires  
- Images libres (Unsplash, etc.) intégrées  
- Architecture scalable et robuste  
- Respect strict du RGPD  
- Documentation minimale incluse pour la maintenance  

Si c’est Ok pour toi, vas-y.  
