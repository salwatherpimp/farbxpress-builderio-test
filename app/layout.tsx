import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
