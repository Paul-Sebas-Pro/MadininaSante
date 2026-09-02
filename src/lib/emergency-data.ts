export type EmergencyCategory = "medical" | "secours" | "securite" | "social";
export type EmergencyScope = "national" | "local";

export interface EmergencyContact {
  label: string;
  phone: string;
  /** Numéro composable (sans espaces) pour le lien `tel:`. */
  dial: string;
  category: EmergencyCategory;
  scope: EmergencyScope;
  descriptionFr: string;
  descriptionEn: string;
}

/**
 * Numéros d'urgence — source de vérité statique (aussi dans `supabase/seed.sql`).
 * Fiables, sans dépendance externe : affichés même si la base est indisponible.
 */
export const emergencyContacts: EmergencyContact[] = [
  {
    label: "SAMU",
    phone: "15",
    dial: "15",
    category: "medical",
    scope: "national",
    descriptionFr: "Aide médicale urgente",
    descriptionEn: "Medical emergencies",
  },
  {
    label: "Pompiers",
    phone: "18",
    dial: "18",
    category: "secours",
    scope: "national",
    descriptionFr: "Incendie et secours",
    descriptionEn: "Fire and rescue",
  },
  {
    label: "Police / Gendarmerie",
    phone: "17",
    dial: "17",
    category: "securite",
    scope: "national",
    descriptionFr: "Police secours",
    descriptionEn: "Police",
  },
  {
    label: "Numéro d'urgence européen",
    phone: "112",
    dial: "112",
    category: "medical",
    scope: "national",
    descriptionFr: "Depuis un mobile, partout en Europe",
    descriptionEn: "From a mobile, anywhere in Europe",
  },
  {
    label: "Urgence pour personnes sourdes ou malentendantes",
    phone: "114",
    dial: "114",
    category: "medical",
    scope: "national",
    descriptionFr: "Par SMS ou fax",
    descriptionEn: "By SMS or fax",
  },
  {
    label: "Centre antipoison",
    phone: "0800 59 59 59",
    dial: "0800595959",
    category: "medical",
    scope: "national",
    descriptionFr: "Antilles-Guyane",
    descriptionEn: "French West Indies / Guiana",
  },
  {
    label: "Sauvetage en mer (CROSS Antilles-Guyane)",
    phone: "196",
    dial: "196",
    category: "secours",
    scope: "national",
    descriptionFr: "Urgences en mer",
    descriptionEn: "Emergencies at sea",
  },
  {
    label: "Violences femmes info",
    phone: "3919",
    dial: "3919",
    category: "social",
    scope: "national",
    descriptionFr: "Écoute et orientation",
    descriptionEn: "Support and guidance",
  },
  {
    label: "SOS Amitié",
    phone: "09 72 39 40 50",
    dial: "0972394050",
    category: "social",
    scope: "national",
    descriptionFr: "Souffrance psychique, 24h/24",
    descriptionEn: "Emotional distress, 24/7",
  },
  {
    label: "SOS Médecins Martinique",
    phone: "0810 37 39 72",
    dial: "0810373972",
    category: "medical",
    scope: "local",
    descriptionFr: "Consultations et visites d'urgence",
    descriptionEn: "Urgent consultations and home visits",
  },
];

export interface Hospital {
  name: string;
  city: string;
  phone: string;
  dial: string;
  noteFr: string;
  noteEn: string;
}

export const hospitals: Hospital[] = [
  {
    name: "CHU de Martinique — Hôpital Pierre Zobda-Quitman",
    city: "Fort-de-France",
    phone: "0596 55 20 00",
    dial: "0596552000",
    noteFr: "Urgences adultes et pédiatriques",
    noteEn: "Adult and pediatric emergency department",
  },
  {
    name: "CHU de Martinique — La Meynard (urgences)",
    city: "Fort-de-France",
    phone: "0596 55 23 66",
    dial: "0596552366",
    noteFr: "Service des urgences",
    noteEn: "Emergency department",
  },
  {
    name: "Hôpital du Saint-Esprit (CHU)",
    city: "Saint-Esprit",
    phone: "0596 55 90 00",
    dial: "0596559000",
    noteFr: "Centre-Sud de la Martinique",
    noteEn: "South-central Martinique",
  },
  {
    name: "Clinique Saint-Paul",
    city: "Fort-de-France",
    phone: "0596 60 50 50",
    dial: "0596605050",
    noteFr: "Établissement privé, urgences",
    noteEn: "Private facility, emergencies",
  },
];
