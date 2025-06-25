import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Farbxpress",
  description:
    "Kontaktieren Sie Farbxpress für professionelle Malerarbeiten in Winterthur. Telefon, E-Mail und Kontaktformular.",
};

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kontakt aufnehmen
          </h1>
          <p className="text-xl text-gray-600">
            Sprechen Sie direkt mit uns oder senden Sie eine unverbindliche
            Anfrage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Kontaktinformationen
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Adresse</h3>
                  <p className="text-gray-600">
                    Farbxpress GmbH
                    <br />
                    Rychenbergstrasse 223
                    <br />
                    8404 Winterthur
                    <br />
                    Schweiz
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Telefon</h3>
                  <a
                    href="tel:+41762288071"
                    className="text-pink-600 hover:text-pink-700"
                  >
                    +41 76 228 80 71
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">E-Mail</h3>
                  <a
                    href="mailto:info@farbxpress.ch"
                    className="text-pink-600 hover:text-pink-700"
                  >
                    info@farbxpress.ch
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Geschäftszeiten
              </h3>
              <div className="text-gray-600 space-y-1">
                <div>Montag - Freitag: 8:00 - 17:00</div>
                <div>Samstag: 8:00 - 12:00</div>
                <div>Sonntag: Geschlossen</div>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Kontaktformular
            </h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-center py-12">
                Kontaktformular wird hier implementiert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
