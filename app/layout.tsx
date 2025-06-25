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
          rel="preload"
          href="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1920,h_800,c_fill,f_avif,q_auto/v1748344821/comprised_m7hork.avif"
          as="image"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
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
