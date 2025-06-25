import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen - Farbxpress",
  description:
    "Sehen Sie unsere erfolgreich abgeschlossenen Projekte und überzeugen Sie sich von der Qualität unserer Malerarbeiten.",
};

export default function Referenzen() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Referenzen</h1>
          <p className="text-xl text-gray-600">
            Überzeugen Sie sich von der Qualität unserer Arbeit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              Referenzprojekte
            </h3>
            <p className="text-gray-600">
              Unsere Referenzprojekte werden hier dargestellt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
