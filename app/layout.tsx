import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header/Header";

export const metadata: Metadata = {
  title:
    "Farbxpress - Ihr Maler in Winterthur für Präzision, Sauberkeit & Begeisterung",
  description:
    "Mit mehr als 18 Jahren Erfahrung gestaltet Farbxpress Räume, Fassaden und mehr. Professionelle Malerarbeiten in Winterthur und Umgebung.",
  keywords:
    "Maler Winterthur, Malerarbeiten, Fassadenrenovation, Gipserarbeiten, Spritzarbeiten, Tapezieren",
  openGraph: {
    title: "Farbxpress - Ihr Maler in Winterthur",
    description:
      "Mit mehr als 18 Jahren Erfahrung gestaltet Farbxpress Räume, Fassaden und mehr.",
    type: "website",
    locale: "de_CH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&family=Aktiv+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
