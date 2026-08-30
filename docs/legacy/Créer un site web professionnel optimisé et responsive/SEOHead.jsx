import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "Madinina Santé - Votre santé en Martinique",
  description = "Trouvez facilement des professionnels de santé, pharmacies de garde et services médicaux en Martinique. Votre santé, notre priorité.",
  keywords = "santé martinique, médecin martinique, pharmacie garde, urgence médicale, madinina santé, professionnel santé antilles",
  image = "/logo_madinina_sante.png",
  url = "https://madinina-sante.fr"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Madinina Santé",
    "description": description,
    "url": url,
    "logo": `${url}${image}`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Martinique",
      "addressCountry": "FR"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Martinique"
    },
    "serviceType": [
      "Annuaire médical",
      "Pharmacies de garde",
      "Services d'urgence",
      "Géolocalisation médicale"
    ],
    "availableService": [
      {
        "@type": "MedicalService",
        "name": "Recherche de professionnels de santé",
        "description": "Trouvez rapidement des médecins et spécialistes en Martinique"
      },
      {
        "@type": "MedicalService", 
        "name": "Pharmacies de garde",
        "description": "Localisez les pharmacies ouvertes 24h/24 en Martinique"
      },
      {
        "@type": "EmergencyService",
        "name": "Services d'urgence",
        "description": "Accès rapide aux numéros d'urgence médicale"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "Martinique",
      "availableLanguage": "French"
    }
  }

  return (
    <Helmet>
      {/* Métadonnées de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Madinina Santé" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      <meta name="geo.region" content="MQ" />
      <meta name="geo.placename" content="Martinique" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Madinina Santé" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      
      {/* Données structurées */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Liens canoniques et hreflang */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="fr" href={url} />
      <link rel="alternate" hrefLang="fr-mq" href={url} />
      
      {/* Préconnexions pour les performances */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Polices Google Fonts optimisées */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap" 
        rel="stylesheet" 
      />
    </Helmet>
  )
}

export default SEOHead

