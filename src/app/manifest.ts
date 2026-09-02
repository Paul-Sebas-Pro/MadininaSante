import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Madinina Santé",
    short_name: "Madinina Santé",
    description:
      "Pharmacies de garde, médecins, établissements de santé et numéros d'urgence en Martinique.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "fr",
    dir: "ltr",
    background_color: "#ffffff",
    theme_color: "#0077B6",
    categories: ["health", "medical", "navigation"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Pharmacies de garde",
        short_name: "Garde",
        url: "/pharmacies-de-garde",
      },
      { name: "Urgences", short_name: "Urgences", url: "/urgences" },
    ],
  };
}
