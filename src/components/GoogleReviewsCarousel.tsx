"use client";

import { useEffect, useCallback } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const googleReviews = [
  {
    id: 1,
    name: "Ursula Wirtz",
    text: "Ein engagiertes team,flexibel, zuverlässig, kreativ.Ich bin sehr zufrieden mit der sorgfältigen Ausführung und werde farbexpress immer wieder gern für mein Haus engagieren.",
    rating: 5,
    googleUrl: "https://g.co/kgs/review1", // Placeholder URL
  },
  {
    id: 2,
    name: "Johanna Kelts",
    text: "Effizient, sehr professionell, sauber und zu einem zahlbaren Preis: So darf ich die Arbeit dieser beiden sympathischen Berufsleute zusammenfassen. Sie haben eine Wohnung in meinem über 200 Jahre alten MFH neu gestrichen. Die Aufgabe, Wände und Einbauschränke mit vielen Ecken und Kanten, Holztäfer, sowie Gips- und Mauerwerk kostengünstig und doch perfekt zu streichen, war nicht unbedingt einfach. Der Auftrag wurde jedoch zu meiner vollsten Zufriedenheit erledigt. Ich kann diese Firma wirklich sehr empfehlen!",
    rating: 5,
    googleUrl: "https://g.co/kgs/review2", // Placeholder URL
  },
  {
    id: 3,
    name: "Frau achternbusch",
    text: "Für unser neues Restaurant, haben wir ein passendes Farbkonzept gesucht. Durch die Kompetente Beratung von Herr Niedehauser konnten wir unsere Vorstellungen zu einem fairen Preis umsetzen.",
    rating: 5,
    googleUrl: "https://g.co/kgs/review3", // Placeholder URL
  },
  {
    id: 4,
    name: "Domi Fuchs",
    text: "Farbxpress hat unsere neue wohnung gestrichen in nur einem tag. Alles zu unserer besten zufriedenheit. Unkompliziert, speditiv und top qualität. Bin ich mir so nicht gewohnt ;) sehr zu empfehlen!!!",
    rating: 5,
    googleUrl: "https://g.co/kgs/review4", // Placeholder URL
  },
  {
    id: 5,
    name: "Beat Von Niederhäusern",
    text: "Perfekt. Tadellose Arbeit. Effizient, schnell, sauber, freundlich, rücksichtsvoll. Wir sind restlos zufrieden mit der Ausführung. Sehr gerne wieder.",
    rating: 5,
    googleUrl: "https://g.co/kgs/review5", // Placeholder URL
  },
];

export function GoogleReviewsCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const handleCardClick = (googleUrl: string) => {
    window.open(googleUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4">
        {googleReviews.map((review) => (
          <CarouselItem
            key={review.id}
            className="basis-full md:basis-1/2 lg:basis-1/3 pl-4 cursor-pointer"
            onClick={() => handleCardClick(review.googleUrl)}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20">
              {/* Quote Icon and Stars */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="h-6 w-6 text-[#d60475] flex-shrink-0" />
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm line-clamp-3">
                {review.text}
              </p>

              {/* Reviewer Name */}
              <div className="flex items-center">
                <span className="text-gray-900 font-semibold text-sm">
                  {review.name}
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons (Desktop only) */}
      <div className="hidden lg:block">
        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white hover:text-[#d60475] transition-colors" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white hover:text-[#d60475] transition-colors" />
      </div>
    </Carousel>
  );
}
