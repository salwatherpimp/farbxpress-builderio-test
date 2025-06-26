"use client";

import { useState } from "react";
import Link from "next/link";
import { Hand, Phone, ChevronDown } from "lucide-react";
import { useBusinessHours } from "@/hooks/useBusinessHours";
import { cn } from "@/lib/utils";

interface ContactDropdownProps {
  isTransparent: boolean;
  isScrolledOrSpecialPage: boolean;
  isMobile?: boolean;
}

export function ContactDropdown({
  isTransparent,
  isScrolledOrSpecialPage,
  isMobile = false,
}: ContactDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: isBusinessOpen } = useBusinessHours();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  // Responsive design based on mobile/desktop with enhanced styling
  const buttonClasses = cn(
    "flex items-center font-medium gap-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 font-sans",
    // Responsive sizing and shape
    isMobile
      ? "px-2 py-1.5 rounded-lg text-xs min-h-[44px]" // Compact mobile with touch target
      : "px-6 py-3 rounded-full text-base", // Pill-shape for desktop
    // Dynamic color system
    isTransparent
      ? "bg-white/20 text-white border border-white/30 hover:bg-white/30 drop-shadow-lg"
      : "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200",
  );

  // Dropdown positioning with high z-index management
  const dropdownClasses = cn(
    "absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[280px] z-[9999]",
  );

  return (
    <div className="relative">
      {/* Contact button with icons and responsive behavior */}
      <button
        className={buttonClasses}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Kontakt-Optionen öffnen"
      >
        {/* Hand icon for "Kontaktiere uns" */}
        <Hand className="h-4 w-4 flex-shrink-0" />

        {/* Responsive text display */}
        <span className="whitespace-nowrap">
          {isMobile ? "Kontakt" : "Kontaktiere uns"}
        </span>

        {/* Dropdown indicator with smooth rotation */}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200 flex-shrink-0",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Dropdown content with business hours integration */}
      {isOpen && (
        <>
          {/* Backdrop for outside click handling */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={closeDropdown}
            aria-hidden="true"
          />

          {/* Dropdown panel */}
          <div className={dropdownClasses}>
            <div className="space-y-3">
              {/* Header section */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 font-sans">
                  Kontakt aufnehmen
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-sans">
                  Sprechen Sie direkt mit uns oder senden Sie eine
                  unverbindliche Anfrage.
                </p>
              </div>

              {/* Contact options */}
              <div className="space-y-2">
                {/* Phone link - only during business hours */}
                {isBusinessOpen && (
                  <a
                    href="tel:+41762288071"
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200 hover:bg-green-100 transition-colors duration-150"
                    onClick={closeDropdown}
                    aria-label="Jetzt anrufen - Wir sind erreichbar"
                  >
                    <div className="flex-shrink-0">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-green-800 font-sans">
                        Jetzt anrufen
                      </div>
                      <div className="text-sm text-green-600 font-sans">
                        +41 76 228 80 71
                      </div>
                      <div className="text-xs text-green-500 font-sans">
                        Wir sind gerade erreichbar
                      </div>
                    </div>
                  </a>
                )}

                {/* Contact form link - always available */}
                <Link
                  href="/kontakt"
                  className="block p-3 rounded-lg bg-pink-50 border border-pink-200 hover:bg-pink-100 transition-colors duration-150"
                  onClick={closeDropdown}
                >
                  <div className="font-medium text-pink-800 font-sans">
                    Kontaktformular
                  </div>
                  <div className="text-sm text-pink-600 font-sans">
                    Unverbindliche Anfrage senden
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
