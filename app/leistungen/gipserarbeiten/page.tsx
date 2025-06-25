import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gipserarbeiten - Farbxpress",
  description:
    "Professionelle Gipserarbeiten in Winterthur. Innenputz, Aussenputz und dekorative Oberflächen.",
};

export default function Gipserarbeiten() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gipserarbeiten
          </h1>
          <p className="text-xl text-gray-600">
            Innenputz, Aussenputz und dekorative Oberflächen – sauber und
            langlebig
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Unsere Gipserarbeiten schaffen die perfekte Grundlage für
            hochwertige Malerarbeiten. Von Innenputz über Aussenputz bis hin zu
            dekorativen Oberflächen – wir arbeiten präzise und sauber.
          </p>
        </div>
      </div>
    </div>
  );
}
