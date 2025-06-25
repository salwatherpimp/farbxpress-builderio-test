import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weitere Dienstleistungen - Farbxpress",
  description:
    "Zusätzliche Dienstleistungen von Farbxpress: Beschriftungen, Schimmelbehandlung und fugenlose Beschichtungen.",
};

export default function WeitereDialistleistungen() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Weitere Dienstleistungen
          </h1>
          <p className="text-xl text-gray-600">
            Beschriftungen, Schimmelbehandlung und fugenlose Wand- und
            Bodenbeschichtungen
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <h2>Beschriftungen</h2>
          <p>
            Individuelle Beschriftungen für Unternehmen, Schilder und
            Werbeflächen – präzise und langlebig.
          </p>

          <h2>Schimmelbehandlung</h2>
          <p>
            Professionelle Schimmelbehandlung und -sanierung für ein gesundes
            Raumklima.
          </p>

          <h2>Fugenlose Beschichtungen</h2>
          <p>
            Fugenlose Wand- und Bodenbeschichtungen für moderne, hygienische
            Oberflächen.
          </p>
        </div>
      </div>
    </div>
  );
}
