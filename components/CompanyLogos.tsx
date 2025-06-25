"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface CompanyLogosProps {
  className?: string;
  backgroundColor?: string;
}

export function CompanyLogos({
  className = "",
  backgroundColor = "bg-gray-50",
}: CompanyLogosProps) {
  // Carousel state management
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  // Company data with optimized Cloudinary URLs
  const companies = [
    {
      name: "Stadt Winterthur",
      logo: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit/v1749284819/logo-stadtWinterthur-1_pc7jkd.avif",
      logoMobile:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_128,h_64,c_fit/v1749284819/logo-stadtWinterthur-1_pc7jkd.avif",
    },
    {
      name: "Bank Zimmerberg",
      logo: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit/v1749284819/logo-bankZimmerberg_bvitfl.avif",
      logoMobile:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_128,h_64,c_fit/v1749284819/logo-bankZimmerberg_bvitfl.avif",
    },
    {
      name: "Derby Pizza",
      logo: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit/v1749284819/logo-derbyPizza_mmkedc.avif",
      logoMobile:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_128,h_64,c_fit/v1749284819/logo-derbyPizza_mmkedc.avif",
    },
    {
      name: "Stadt Zürich Sportamt",
      logo: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit/v1749284819/logo-sportamtstadtzu%CC%88rich_iemqys.avif",
      logoMobile:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_128,h_64,c_fit/v1749284819/logo-sportamtstadtzu%CC%88rich_iemqys.avif",
    },
  ];

  // Auto-rotation effect for mobile carousel (3-second interval)
  useEffect(() => {
    if (!emblaApi) return;

    const autoSlide = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(autoSlide);
  }, [emblaApi]);

  return (
    <section
      className={`${backgroundColor} border-t border-gray-100 py-8 md:py-10 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Empty header section as specified */}
        <div className="text-center mb-8 md:mb-10"></div>

        {/* Desktop Layout - Static horizontal row */}
        <div className="hidden md:flex items-center justify-center space-x-12 lg:space-x-16">
          {companies.map((company) => (
            <div key={company.name} className="flex-shrink-0">
              <picture>
                <source media="(min-width: 768px)" srcSet={company.logo} />
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={160}
                  height={80}
                  className="h-20 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Carousel with 2 logos per slide */}
        <div className="md:hidden">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {/* Create slides with 2 logos each */}
              <div className="embla__slide flex-shrink-0 basis-full flex items-center justify-center space-x-8">
                {companies.slice(0, 2).map((company) => (
                  <div
                    key={company.name}
                    className="basis-1/2 flex justify-center"
                  >
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcSet={company.logoMobile}
                      />
                      <Image
                        src={company.logoMobile}
                        alt={company.name}
                        width={128}
                        height={64}
                        className="h-16 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                ))}
              </div>

              <div className="embla__slide flex-shrink-0 basis-full flex items-center justify-center space-x-8">
                {companies.slice(2, 4).map((company) => (
                  <div
                    key={company.name}
                    className="basis-1/2 flex justify-center"
                  >
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcSet={company.logoMobile}
                      />
                      <Image
                        src={company.logoMobile}
                        alt={company.name}
                        width={128}
                        height={64}
                        className="h-16 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
