import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X-TRACK — Sécurité connectée pour flottes de poids lourds",
  description:
    "Boîtier GPS antivol nouvelle génération pour camions et remorques : géolocalisation temps réel, antivol intégré, contrôle à distance et détection d'accident.",
  keywords: [
    "tracker GPS camion",
    "antivol remorque",
    "géolocalisation flotte",
    "boîtier connecté poids lourd",
    "sécurité transport",
  ],
  openGraph: {
    title: "X-TRACK — Sécurité connectée pour flottes de poids lourds",
    description:
      "Surveillez, sécurisez et pilotez vos véhicules grâce à un boîtier intelligent conçu pour le transport professionnel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
