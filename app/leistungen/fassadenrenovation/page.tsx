import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fassadenrenovation - Farbxpress",
  description:
    "Professionelle Fassadenrenovation in Winterthur. Neue Ausstrahlung und langfristiger Schutz für Ihre Fassade.",
};

export default function Fassadenrenovation() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fassadenrenovation
          </h1>
          <p className="text-xl text-gray-600">
            Wir sorgen für neue Ausstrahlung und langfristigen Schutz Ihrer
            Fassade
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Unsere Fassadenrenovation verleiht Ihrem Gebäude nicht nur eine neue
            optische Ausstrahlung, sondern bietet auch langfristigen Schutz vor
            Witterungseinflüssen.
          </p>
        </div>
      </div>
    </div>
  );
}
