import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malerarbeiten - Farbxpress",
  description:
    "Professionelle Malerarbeiten in Winterthur. Innen- und Aussenanstriche mit hochwertigen Materialien.",
};

export default function Malerarbeiten() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Malerarbeiten
          </h1>
          <p className="text-xl text-gray-600">
            Innen- und Aussenanstriche mit hochwertigen Materialien und präziser
            Ausführung
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Unsere Malerarbeiten zeichnen sich durch höchste Qualität und
            Präzision aus. Wir verwenden ausschließlich hochwertige Materialien
            und modernste Techniken für langanhaltende Ergebnisse.
          </p>
        </div>
      </div>
    </div>
  );
}
