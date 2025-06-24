import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-slate-800 mb-4">
          404 - Seite nicht gefunden
        </h1>
        <p className="mt-4 text-slate-600 max-w-md mb-6">
          Die angeforderte Seite konnte nicht gefunden werden.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
