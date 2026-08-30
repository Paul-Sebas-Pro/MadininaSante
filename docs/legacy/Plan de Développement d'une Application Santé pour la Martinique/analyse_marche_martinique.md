# Analyse du marché et de la concurrence pour une application de santé en Martinique

## 1. Applications mobiles de santé existantes en Martinique

Plusieurs applications et plateformes sont déjà présentes en Martinique, principalement axées sur la prise de rendez-vous médicaux et la recherche de pharmacies. Parmi elles, on retrouve :

*   **ClikOdoc**: Permet de prendre rendez-vous en ligne avec des professionnels de santé en Guadeloupe, Martinique, Réunion et Guyane. C'est une plateforme généraliste de prise de rendez-vous.
*   **CHU Martinique**: Une application dédiée au Centre Hospitalier Universitaire de Martinique, offrant une nouvelle expérience utilisateur.
*   **Mon Espace Santé**: Le carnet de santé numérique national, accessible également en Martinique, qui centralise les données de santé des assurés sociaux.
*   **SOS Pharmacie de Garde**: Une application permettant de chercher les pharmacies de garde.
*   **Pharmacie Cluny**: Cette pharmacie a lancé sa propre application mobile, DigitecPharma.
*   **Entr'Actes - CPTS Madinina**: Une application mobile destinée aux professionnels de santé exerçant en Martinique pour faciliter la coordination des parcours de soins.

## 2. Besoins spécifiques des habitants et des touristes en Martinique

### Besoins des habitants :

La Martinique fait face à des défis sanitaires spécifiques, notamment une faible densité médicale et un vieillissement de la population. L'état de santé général de la population martiniquaise est également préoccupant, avec une proportion plus faible de personnes se déclarant en bonne santé par rapport à la France métropolitaine. Les besoins identifiés incluent :

*   **Accès aux soins**: Difficulté à trouver des professionnels de santé disponibles, notamment en raison de la faible densité médicale.
*   **Information sur les services de santé**: Manque d'information centralisée sur les horaires des cabinets, les pharmacies de garde, et les établissements de santé.
*   **Suivi des parcours de soins**: Besoin de fluidifier les parcours de santé complexes, comme le montre l'initiative 


Appui Santé Martinique.
*   **Prévention et information santé**: Nécessité d'informer sur les risques sanitaires locaux (dengue, chikungunya, zika, chlordécone) et les mesures de prévention.

### Besoins des touristes :

Les touristes ont des besoins spécifiques liés à leur séjour, notamment en cas d'urgence médicale ou de besoin de soins courants. Leurs préoccupations incluent :

*   **Accès rapide aux soins d'urgence**: Savoir où trouver un médecin ou une pharmacie en cas de problème inattendu.
*   **Informations pratiques**: Connaître les horaires d'ouverture des établissements de santé, les pharmacies de garde, et les contacts d'urgence.
*   **Conseils de santé spécifiques à la destination**: Informations sur les précautions à prendre (moustiques, soleil, etc.) et les vaccins recommandés.
*   **Barrière linguistique**: Pour les touristes non francophones, la difficulté de communication peut être un obstacle supplémentaire.

## 3. Analyse concurrentielle et lacunes du marché

Les applications existantes comme ClikOdoc sont axées sur la prise de rendez-vous, mais ne centralisent pas toutes les informations pratiques sur les établissements de santé (horaires, spécialités, etc.) ni ne fournissent une liste en temps réel des médecins et pharmacies de garde de manière exhaustive pour toute la Martinique. Mon Espace Santé est un carnet de santé numérique, mais pas une application de services de santé au quotidien.

**Lacunes identifiées :**

*   **Centralisation des informations**: Il n'existe pas d'application unique qui centralise les horaires de tous les professionnels de santé (médecins, cabinets, pharmacies, etc.) et établissements de santé en Martinique.
*   **Données en temps réel**: La disponibilité en temps réel des médecins et pharmacies de garde n'est pas toujours clairement accessible ou centralisée dans une seule application.
*   **Ciblage touristique**: Aucune application ne semble cibler spécifiquement les touristes avec des informations de santé adaptées à leurs besoins (conseils de voyage, urgences, etc.).
*   **Expérience utilisateur locale**: Les applications existantes ne sont pas toujours conçues avec une identité visuelle et une expérience utilisateur fortement ancrées dans la culture martiniquaise et antillaise, ce qui pourrait créer un sentiment d'appartenance et de confiance pour les utilisateurs locaux.
*   **Informations sur les spécialités et services**: Manque de détails sur les spécialités des médecins, les services offerts par les pharmacies, etc.

Ces lacunes représentent une opportunité significative pour une nouvelle application qui offrirait une solution complète et localisée pour les habitants et les touristes de la Martinique.



## 4. Recherche des API officielles et réglementations

Pour assurer la fiabilité et l'exhaustivité des données, l'application devra s'appuyer sur des API officielles et respecter les réglementations en vigueur.

### API potentielles :

*   **data.gouv.fr**: Cette plateforme centralise de nombreux jeux de données publics en France. L'"Annuaire des pharmacies et pharmacies de garde en France" est une ressource potentiellement très utile pour obtenir les informations sur les pharmacies, y compris celles de garde. Il faudra vérifier la fréquence de mise à jour et la couverture géographique spécifique à la Martinique.
*   **Agence du Numérique en Santé (ANS) - api.gouv.fr**: L'ANS propose des API, notamment "Pro Santé Connect" pour l'authentification des professionnels de santé. Bien que cela ne soit pas directement pour les données d'horaires, cela pourrait être pertinent pour des fonctionnalités futures liées aux professionnels.
*   **Health Data Hub**: Cette plateforme donne accès à des données de santé pour la recherche. Il est moins probable qu'elle fournisse des données en temps réel sur les horaires ou les gardes, mais elle pourrait être une source pour des données agrégées ou statistiques.
*   **ARS Martinique**: L'Agence Régionale de Santé de Martinique mentionne "Résogardes" pour les pharmacies de garde. Il sera crucial de vérifier si Résogardes propose une API accessible publiquement ou si un partenariat est nécessaire pour accéder à ces données en temps réel.
*   **OpenStreetMap (OSM)**: Bien que non officielle au sens gouvernemental, des données géolocalisées d'établissements de santé en France (incluant les hôpitaux, cliniques, pharmacies) sont disponibles via OSM et pourraient être utilisées pour la cartographie et la localisation des structures, en complément des données officielles.

### Réglementations :

*   **Règlement Général sur la Protection des Données (RGPD)**: Toute application traitant des données personnelles de santé doit être en conformité avec le RGPD. Cela inclut la collecte, le stockage, le traitement et la sécurisation des données. Une attention particulière devra être portée à la minimisation des données, au consentement de l'utilisateur et à la transparence.
*   **Législation française sur les données de santé**: La France a des lois spécifiques encadrant l'utilisation des données de santé, notamment le secret médical. L'application ne devra pas stocker de données médicales sensibles des utilisateurs, mais plutôt se concentrer sur la fourniture d'informations publiques et la mise en relation.
*   **Réglementations locales**: Il faudra s'assurer qu'il n'y a pas de réglementations spécifiques à la Martinique concernant la diffusion des informations sur les professionnels de santé ou les pharmacies de garde, au-delà des cadres nationaux.

Il sera essentiel de contacter les organismes responsables de ces API et bases de données pour comprendre les modalités d'accès, les conditions d'utilisation et la fraîcheur des données, en particulier pour les informations en temps réel sur les gardes.

