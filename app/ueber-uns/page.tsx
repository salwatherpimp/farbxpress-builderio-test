import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns - Farbxpress",
  description:
    "Erfahren Sie mehr über Farbxpress - Ihr Malerbetrieb in Winterthur mit über 18 Jahren Erfahrung.",
};

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Über uns</h1>
          <p className="text-xl text-gray-600">
            Lernen Sie Farbxpress kennen - Ihr vertrauensvoller Partner für
            Malerarbeiten in Winterthur
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <h2>Unser Unternehmen</h2>
          <p>
            Mit mehr als 18 Jahren Erfahrung und echter Leidenschaft für das
            Malerhandwerk bieten wir als Fachbetrieb hochwertige Innen- und
            Aussenarbeiten – präzise, termintreu und persönlich.
          </p>

          <h2>Unsere Leistungen</h2>
          <p>
            Ob Anstriche, Spritzarbeiten, fugenlose Wand- und
            Bodenbeschichtungen, Tapezierarbeiten, Fassadenrenovationen,
            Gipserarbeiten, individuelle Beschriftungen oder
            Schimmelbehandlungen – wir bieten Ihnen alles aus einer Hand.
          </p>

          <h2>Unsere Kunden</h2>
          <p>
            Farbxpress ist der verlässliche Partner für Privatkunden,
            Architekten, Verwaltungen und öffentliche Bauträger – vom Neubau bis
            zur sorgfältigen Sanierung.
          </p>
        </div>
      </div>
    </div>
  );
}
