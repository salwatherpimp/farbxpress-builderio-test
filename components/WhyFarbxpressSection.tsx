"use client";

import { Award, Heart, Clock, MapPin, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface WhyFarbxpressSectionProps {
  className?: string;
}

export function WhyFarbxpressSection({
  className = "",
}: WhyFarbxpressSectionProps) {
  // Content structure with 4 reason cards
  const reasonCards = [
    {
      id: "experience",
      icon: Award,
      title: "Über 18 Jahre Erfahrung",
      description:
        "Ein fundiertes Handwerk mit jahrzehntelanger Erfahrung bietet Ihnen professionelle Arbeiten in höchster Qualität. Unsere Expertise erfolgt durch bewährte Techniken und moderne Verfahren für langanhaltende Ergebnisse.",
    },
    {
      id: "personal",
      icon: Heart,
      title: "Inhabergeführt & persönlich",
      description:
        "Als inhabergeführter Betrieb stehen wir für direkten Kontakt und individuelle Betreuung. Sie sprechen direkt mit den Entscheidungsträgern und erhalten persönliche Beratung für ihr Projekt.",
    },
    {
      id: "reliable",
      icon: Clock,
      title: "Zuverlässig & termingerecht",
      description:
        "Termintreue und Zuverlässigkeit sind die Grundpfeiler unserer Arbeit. Was wir versprechen, halten wir auch – für eine reibungslose Abwicklung Ihres Projekts ohne Verzögerungen.",
    },
    {
      id: "regional",
      icon: MapPin,
      title: "Regional verwurzelt",
      description:
        "Seit Jahren im Grossraum Winterthur tätig, kennen wir die lokalen Gegebenheiten und Anforderungen. Kurze Anfahrtswege und schnelle Verfügbarkeit ist stets garantiert.",
    },
  ];

  // Desktop card component with glassmorphism design
  const DesktopCard = ({ card }: { card: (typeof reasonCards)[0] }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold flex-1 font-sans text-gray-900">
          {card.title}
        </h3>
        <div className="bg-primary/10 rounded-full p-3 ml-4 flex-shrink-0">
          <card.icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed font-sans">
        {card.description}
      </p>
    </div>
  );

  // Mobile accordion item component
  const MobileAccordionItem = ({ card }: { card: (typeof reasonCards)[0] }) => (
    <AccordionItem value={card.id} className="border-white/20">
      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline [&[data-state=open]>div>svg]:rotate-45">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
              <card.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-sans text-gray-900">
              {card.title}
            </h3>
          </div>
          <div className="flex-shrink-0">
            <Plus className="h-5 w-5 text-gray-400 transition-transform duration-200" />
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4 pt-0">
        <div className="pl-[72px]">
          <p className="text-gray-600 text-sm leading-relaxed font-sans">
            {card.description}
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <section
      className={`py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-[#eddde5] to-[#f7f2f5] ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold leading-tight font-sans">
            Warum Farbxpress wählen?
          </h2>
        </div>

        {/* Desktop Layout - Static Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasonCards.map((card) => (
              <DesktopCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Mobile Layout - Vertical Accordion */}
        <div className="md:hidden">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20">
            <Accordion type="single" collapsible className="space-y-0">
              {reasonCards.map((card) => (
                <MobileAccordionItem key={card.id} card={card} />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
