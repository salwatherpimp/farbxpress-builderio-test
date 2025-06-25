import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Award,
  Heart,
  Clock,
  MapPin,
  ChevronDown,
  Phone,
  Instagram,
  Quote,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-24 md:pb-20 text-white bg-gradient-to-r from-[#e7027e] to-[#c9026a]">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1920,h_800,c_fill/v1748344821/comprised_m7hork.avif"
            alt="Professional painter working in Winterthur"
            width={1920}
            height={800}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Main Headline */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6 filter drop-shadow-lg">
            xIhr Maler in Winterthur für Präzision, Sauberkeit & Begeisterung
          </h1>

          {/* Subtitle Text */}
          <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto mb-6 md:mb-8 filter drop-shadow-md">
            Mit mehr als 18 Jahren Erfahrung gestaltet Farbxpress Räume,
            Fassaden und mehr.
          </p>

          {/* Google Rating Badge */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div
              className="flex items-center rounded-md border bg-white/20 backdrop-blur-sm border-white/30"
              style={{ padding: "10px 14px" }}
            >
              {/* Google Logo */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="flex-shrink-0 mr-2"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>

              {/* Stars and Rating */}
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white font-medium text-sm ml-2">
                  5.0 Google
                </span>
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <Link
              href="/kontakt"
              className="w-full md:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-150"
            >
              Jetzt unverbindlich kontaktieren
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Column (Left) */}
            <div>
              {/* Title */}
              <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4">
                Regionaler Malerbetrieb für Umbau, Renovation & Neubau
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mit langjähriger Erfahrung und echter Leidenschaft für das
                Malerhandwerk bieten wir als Fachbetrieb hochwertige Innen- und
                Aussenarbeiten – präzise, termintreu und persönlich. Ob
                Anstriche, Spritzarbeiten, fugenlose Wand- und
                Bodenbeschichtungen, Tapezierarbeiten, Fassadenrenovationen,
                Gipserarbeiten, individuelle Beschriftungen oder
                Schimmelbehandlungen – wir bieten Ihnen alles aus einer Hand.
                Farbxpress ist der verlässliche Partner für Privatkunden,
                Architekten, Verwaltungen und öffentliche Bauträger – vom Neubau
                bis zur sorgfältigen Sanierung.
              </p>

              {/* Call-to-Action Button */}
              <Link
                href="#leistungen"
                className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-150"
              >
                Leistungen Entdecken
              </Link>
            </div>

            {/* Image Column (Right) - CRITICAL IMAGE POSITIONING */}
            <div className="relative">
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://res.cloudinary.com/dwlk9of7h/image/upload/v1748417853/ross-samir-farbxpress_gsnje4.avif"
                  />
                  <Image
                    src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1748417853/ross-samir-farbxpress_gsnje4.avif"
                    alt="Unser erfahrenes Team bei der Arbeit"
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/15 to-transparent" />

                {/* Text Overlay (Bottom left) */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-gray-900 font-medium text-sm">
                    Unser erfahrenes Team
                  </p>
                  <p className="text-gray-600 text-xs">
                    Über 18 Jahre Expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-purple-100 to-pink-50 py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 text-3xl font-bold leading-tight mb-4">
              Warum Farbxpress wählen?
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Award,
                title: "Über 18 Jahre Erfahrung",
                description:
                  "Ein fundiertes Handwerk mit jahrzehntelanger Erfahrung bietet Ihnen professionelle Arbeiten in höchster Qualität. Unsere Expertise erfolgt durch bewährte Techniken und moderne Verfahren für langanhaltende Ergebnisse.",
              },
              {
                icon: Heart,
                title: "Inhabergeführt & persönlich",
                description:
                  "Als inhabergeführter Betrieb stehen wir für direkten Kontakt und individuelle Betreuung. Sie sprechen direkt mit den Entscheidungsträgern und erhalten persönliche Beratung für ihr Projekt.",
              },
              {
                icon: Clock,
                title: "Zuverlässig & termingerecht",
                description:
                  "Termintreue und Zuverlässigkeit sind die Grundpfeiler unserer Arbeit. Was wir versprechen, halten wir auch – für eine reibungslose Abwicklung Ihres Projekts ohne Verzögerungen.",
              },
              {
                icon: MapPin,
                title: "Regional verwurzelt",
                description:
                  "Seit Jahren im Grossraum Winterthur tätig, kennen wir die lokalen Gegebenheiten und Anforderungen. Kurze Anfahrtswege und schnelle Verfügbarkeit ist stets garantiert.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold flex-1">
                    {feature.title}
                  </h3>
                  <div className="bg-pink-100 rounded-full p-3 ml-4 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-16">
            <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit/v1749284819/logo-stadtWinterthur-1_pc7jkd.avif"
              alt="Stadt Winterthur"
              width={160}
              height={80}
              className="h-20 object-contain"
            />
            <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit/v1749284819/logo-bankZimmerberg_bvitfl.avif"
              alt="Bank Zimmerberg"
              width={160}
              height={80}
              className="h-20 object-contain"
            />
            <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit/v1749284819/logo-derbyPizza_mmkedc.avif"
              alt="Derby Pizza"
              width={160}
              height={80}
              className="h-20 object-contain"
            />
            <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit/v1749284819/logo-sportamtstadtzu%CC%88rich_iemqys.avif"
              alt="Stadt Zürich Sportamt"
              width={160}
              height={80}
              className="h-20 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-gray-900 text-3xl font-bold leading-tight mb-4">
              Unsere Leistungen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                href: "/leistungen/malerarbeiten",
                image:
                  "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-malen_gdvdci.avif",
                title: "Malerarbeiten",
                description:
                  "Innen- und Aussenanstriche mit hochwertigen Materialien und präziser Ausführung.",
              },
              {
                href: "/leistungen/fassadenrenovation",
                image:
                  "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1750015382/altbauwohnung-meilen_lrttoc.avif",
                title: "Fassadenrenovation",
                description:
                  "Wir sorgen für neue Ausstrahlung und langfristigen Schutz Ihrer Fassade.",
              },
              {
                href: "/leistungen/gipserarbeiten",
                image:
                  "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1749930415/verputz-malerarbeiten-duebendorf-1_zxk4wi.avif",
                title: "Gipserarbeiten",
                description:
                  "Innenputz, Aussenputz und dekorative Oberflächen – sauber und langlebig.",
              },
              {
                href: "/leistungen/tapezieren",
                image:
                  "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-tapezieren_jvtgyo.avif",
                title: "Tapezieren",
                description:
                  "Moderne oder klassische Tapeten – fachgerecht angebracht mit Auge fürs Detail.",
              },
              {
                href: "/leistungen/spritzarbeiten",
                image:
                  "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-spritzen_ij8jsj.avif",
                title: "Spritzarbeiten",
                description:
                  "Effiziente, gleichmässige Beschichtung grosser Flächen in Top-Qualität.",
              },
              {
                href: "/leistungen/weitere-dienstleistungen",
                image:
                  "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-weitereLeistungen_cyduu7.avif",
                title: "Weitere Dienstleistungen",
                description:
                  "Erfahren Sie mehr über unsere Zusatzleistungen: Beschriftungen, Schimmelbehandlung und fugenlose Wand- und Bodenbeschichtungen.",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden h-full transition-all duration-300 hover:shadow-md group-hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-150 group-hover:text-pink-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-purple-100 to-pink-50 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 text-3xl font-bold leading-tight mb-6">
              Das sagen unsere Kunden
            </h2>
            <p className="text-gray-900 mb-10 max-w-3xl mx-auto">
              Überzeugen Sie sich von der Qualität unserer Arbeit und senden sie
              uns noch heute eine unverbindliche Kontaktanfrage.
            </p>

            {/* Google Reviews Badge */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 border-2 border-white/20 shadow-lg">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span className="text-gray-900 font-bold text-sm ml-2">
                  Google Bewertungen
                </span>
                <div className="flex items-center ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-1"
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium text-sm ml-2">
                  (5/5)
                </span>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Ein engagiertes team,flexibel, zuverlässig, kreativ.Ich bin sehr zufrieden mit der sorgfältigen Ausführung und werde farbexpress immer wieder gern für mein Haus engagieren.",
                author: "Ursula Wirtz",
              },
              {
                text: "Effizient, sehr professionell, sauber und zu einem zahlbaren Preis: So darf ich die Arbeit dieser beiden sympathischen Berufsleute zusammenfassen. Sie haben eine Wohnung in meinem über 200 Jahre alten MFH neu gestrichen. Die Aufgabe, Wände und Einbauschränke mit vielen Ecken und Kanten, Holztäfer, sowie Gips- und Mauerwerk kostengünstig und doch perfekt zu streichen, war nicht unbedingt einfach. Der Auftrag wurde jedoch zu meiner vollsten Zufriedenheit erledigt. Ich kann diese Firma wirklich sehr empfehlen!",
                author: "Johanna Kelts",
              },
              {
                text: "Für unser neues Restaurant, haben wir ein passendes Farbkonzept gesucht. Durch die Kompetente Beratung von Herr Niedehauser konnten wir unsere Vorstellungen zu einem fairen Preis umsetzen.",
                author: "Frau achternbusch",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-8 border-2 border-white/20 h-full transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
              >
                <div className="flex items-start">
                  <Quote className="h-6 w-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div className="ml-1 flex-1">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm overflow-hidden">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <span className="text-gray-900 font-semibold">
                        {testimonial.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white relative">
        <div className="relative w-full">
          <Image
            src="https://res.cloudinary.com/dwlk9of7h/image/upload/f_webp,q_90,w_1920,h_600,c_fill/v1748418221/farbxpress-footerImage_l29cqf.avif"
            alt="Renovierter Raum mit hochwertiger Malerarbeit"
            width={1920}
            height={600}
            className="w-full h-[28rem] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-start px-4 md:px-12 py-12">
            <div className="max-w-lg text-left">
              <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-9 filter drop-shadow-lg">
                Farbxpress – persönlich, zuverlässig, hochwertig
              </h2>
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-150"
              >
                Jetzt unverbindlich kontaktieren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <div>
              <div className="text-gray-400 text-sm">
                <p>Farbxpress GmbH</p>
                <p>Rychenbergstrasse 223</p>
                <p>8404 Winterthur</p>
                <p>Schweiz</p>
              </div>
              <div className="mt-3">
                <p className="flex items-center text-sm">
                  <Phone className="h-3 w-3 mr-2" />
                  <a
                    href="tel:+41762288071"
                    className="hover:text-gray-300 transition-colors duration-150"
                  >
                    +41 76 228 80 71
                  </a>
                </p>
                <p className="text-gray-400 text-sm mt-1">info@farbxpress.ch</p>
              </div>
              <div className="mt-3">
                <a
                  href="https://www.instagram.com/farbxpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-150"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <button className="flex items-center text-sm font-medium mb-2">
                <span>Leistungen</span>
                <ChevronDown className="ml-2 h-3 w-3" />
              </button>
              <div className="mt-2">
                <Link
                  href="/ueber-uns"
                  className="block text-sm font-medium mb-2 hover:text-gray-300 transition-colors duration-150"
                >
                  Über uns
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  href="/referenzen"
                  className="block text-sm font-medium hover:text-gray-300 transition-colors duration-150"
                >
                  Referenzen
                </Link>
              </div>
            </div>

            {/* Service Areas */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-medium mb-3">
                Unsere Servicegebiete
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Maler Region Winterthur",
                  "Fassadenrenovation Region Winterthur",
                  "Spritzarbeiten Region Winterthur",
                  "Tapezieren Region Winterthur",
                  "Gipserarbeiten Region Winterthur",
                ].map((area, index) => (
                  <button key={index} className="flex items-center text-left">
                    <span className="text-xs font-medium">
                      {area.split(" ").slice(0, -2).join(" ")}
                      <span className="block">
                        {area.split(" ").slice(-2).join(" ")}
                      </span>
                    </span>
                    <ChevronDown className="ml-2 h-2 w-2 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-6 pt-6">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-gray-400 text-xs">
                  © 2025 Farbxpress. Alle Rechte vorbehalten.
                </p>
                <p className="text-gray-400 text-xs">
                  Gemacht mit ♥️ in Winterthur
                </p>
              </div>
              <div className="flex">
                <Link
                  href="/datenschutz"
                  className="text-gray-400 text-xs hover:text-gray-300 transition-colors duration-150"
                >
                  Datenschutzerklärung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
