import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spritzarbeiten - Farbxpress",
  description:
    "Professionelle Spritzarbeiten in Winterthur. Effiziente, gleichmässige Beschichtung grosser Flächen.",
};

export default function Spritzarbeiten() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Spritzarbeiten
          </h1>
          <p className="text-xl text-gray-600">
            Effiziente, gleichmässige Beschichtung grosser Flächen in
            Top-Qualität
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Unsere Spritzarbeiten ermöglichen eine effiziente und gleichmässige
            Beschichtung grosser Flächen. Ideal für Fassaden, Hallen und andere
            grossflächige Bereiche.
          </p>
        </div>
      </div>
    </div>
  );
}
