import { Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/6474300/pexels-photo-6474300.jpeg')`,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 filter drop-shadow-lg">
            Ihr Maler in Winterthur für Präzision, Sauberkeit & Begeisterung
          </h1>

          {/* Subheadline */}
          <p className="text-white/95 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-4xl mx-auto filter drop-shadow-md">
            Mit mehr als 18 Jahren Erfahrung gestaltet Farbxpress Räume,
            Fassaden und mehr.
          </p>

          {/* Google Rating Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
              {/* Google Logo */}
              <div className="flex items-center mr-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
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
              </div>

              {/* Stars and Rating */}
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white font-medium text-sm ml-2">
                  5.0 Google
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="https://www.farbxpress.ch/kontakt"
              className="inline-flex items-center justify-center bg-slate-100 text-slate-900 px-8 py-3 rounded-lg font-medium text-base hover:bg-white transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              Jetzt unverbindlich kontaktieren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
