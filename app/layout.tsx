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
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>"
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
