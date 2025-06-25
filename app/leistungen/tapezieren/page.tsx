import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tapezieren - Farbxpress",
  description:
    "Professionelles Tapezieren in Winterthur. Moderne oder klassische Tapeten fachgerecht angebracht.",
};

export default function Tapezieren() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tapezieren</h1>
          <p className="text-xl text-gray-600">
            Moderne oder klassische Tapeten – fachgerecht angebracht mit Auge
            fürs Detail
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Ob moderne Design-Tapeten oder klassische Wandbekleidungen – wir
            bringen Ihre Tapeten fachgerecht an und achten dabei auf jedes
            Detail für ein perfektes Ergebnis.
          </p>
        </div>
      </div>
    </div>
  );
}
