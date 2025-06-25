import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Farbxpress",
  description: "Datenschutzerklärung von Farbxpress GmbH, Winterthur.",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Datenschutzerklärung
          </h1>
        </div>

        <div className="prose prose-lg mx-auto">
          <h2>Verantwortlicher</h2>
          <p>
            Farbxpress GmbH
            <br />
            Rychenbergstrasse 223
            <br />
            8404 Winterthur
            <br />
            Schweiz
            <br />
            <br />
            E-Mail: info@farbxpress.ch
            <br />
            Telefon: +41 76 228 80 71
          </p>

          <h2>Datenerfassung</h2>
          <p>
            Diese Datenschutzerklärung informiert Sie über die Art, den Umfang
            und Zweck der Verarbeitung von personenbezogenen Daten auf unserer
            Website.
          </p>

          <h2>Kontaktaufnahme</h2>
          <p>
            Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail
            oder Telefon) werden die Angaben des Nutzers zur Bearbeitung der
            Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO
            verarbeitet.
          </p>

          <h2>Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder
            Einschränkung der Verarbeitung Ihrer gespeicherten Daten, ein
            Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf
            Datenübertragbarkeit.
          </p>
        </div>
      </div>
    </div>
  );
}
