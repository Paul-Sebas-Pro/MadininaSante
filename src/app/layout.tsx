import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://madinina-sante.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Madinina Santé — Pharmacies de garde, médecins et urgences en Martinique",
    template: "%s · Madinina Santé",
  },
  description:
    "Trouvez rapidement les pharmacies de garde, médecins, établissements de santé et numéros d'urgence en Martinique. Gratuit, pour les habitants et les visiteurs.",
  applicationName: "Madinina Santé",
  keywords: [
    "Martinique",
    "pharmacie de garde",
    "médecin Martinique",
    "urgences Martinique",
    "santé Martinique",
    "Madinina",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Madinina Santé",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0077B6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
