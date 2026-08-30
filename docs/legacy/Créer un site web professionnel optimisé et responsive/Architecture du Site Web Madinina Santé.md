# Architecture du Site Web Madinina Santé

## Structure des pages

### 1. Page d'accueil (/)
- Hero section avec logo et message principal
- Présentation des services principaux
- Recherche rapide de professionnels de santé
- Section "Urgences" avec numéros importants
- Témoignages/avis clients
- Call-to-action vers les fonctionnalités principales

### 2. Annuaire des professionnels (/annuaire)
- Recherche avancée par spécialité, localisation
- Filtres (médecins, pharmacies, cliniques, etc.)
- Cartes interactives
- Fiches détaillées des professionnels

### 3. Pharmacies de garde (/pharmacies-garde)
- Liste en temps réel des pharmacies de garde
- Géolocalisation
- Horaires et coordonnées
- Itinéraires

### 4. Urgences (/urgences)
- Numéros d'urgence locaux et nationaux
- Hôpitaux avec services d'urgence
- Médecins de garde
- Conseils premiers secours

### 5. Conseils santé (/conseils)
- Prévention maladies tropicales
- Conseils pour touristes
- Informations saisonnières
- Blog santé

### 6. À propos (/a-propos)
- Mission de Madinina Santé
- Équipe
- Partenaires
- Valeurs

### 7. Contact (/contact)
- Formulaire de contact
- Informations de contact
- FAQ

## Design System

### Couleurs principales
- Bleu Caraïbes (#0077B6) - Couleur primaire
- Vert Tropical (#2ECC71) - Couleur secondaire
- Jaune Soleil (#FFD700) - Accent
- Blanc Pur (#FFFFFF) - Fond
- Gris Anthracite (#34495E) - Texte

### Typographie
- Titres: Montserrat (Bold, Semi-Bold)
- Sous-titres: Montserrat (Medium)
- Corps de texte: Open Sans (Regular, Light)

### Composants UI
- Boutons avec animations hover
- Cards avec ombres subtiles
- Navigation sticky
- Modales pour les détails
- Formulaires avec validation
- Cartes interactives
- Animations de chargement

## Fonctionnalités techniques

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- Navigation mobile avec menu hamburger
- Grilles flexibles

### Animations
- Animations d'entrée (fade-in, slide-up)
- Transitions fluides entre pages
- Micro-interactions sur les boutons
- Parallax subtil sur le hero
- Loading animations

### SEO
- Meta tags optimisés
- Structure sémantique HTML5
- Schema.org markup pour les professionnels de santé
- Sitemap XML
- Robots.txt
- Open Graph et Twitter Cards

### Performance
- Lazy loading des images
- Compression des assets
- Minification CSS/JS
- CDN pour les ressources statiques
- Service Worker pour le cache

## Technologies

### Frontend
- React 18 avec TypeScript
- Next.js pour le SSR/SSG
- Tailwind CSS pour le styling
- Framer Motion pour les animations
- React Hook Form pour les formulaires
- React Query pour la gestion des données

### Cartes et géolocalisation
- Leaflet ou Google Maps API
- Géolocalisation HTML5
- Calcul d'itinéraires

### Déploiement
- Vercel ou Netlify pour l'hébergement
- GitHub pour le versioning
- CI/CD automatisé

