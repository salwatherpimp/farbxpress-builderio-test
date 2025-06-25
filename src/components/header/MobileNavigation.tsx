"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { ContactDropdown } from "@/components/header/ContactDropdown";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isTransparent: boolean;
  isScrolledOrSpecialPage: boolean;
}

export function MobileNavigation({
  isTransparent,
  isScrolledOrSpecialPage,
}: MobileNavigationProps) {
  // Mobile menu state management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Toggle functions
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Touch-optimized hamburger menu button (min 44px touch target)
  const menuButtonClasses = cn(
    "p-2 rounded-md border transition-colors duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center",
    isTransparent
      ? "bg-white/20 border-white/30 text-white"
      : "bg-gray-100 border-gray-300 text-gray-800",
  );

  // Service links array (6 services as specified)
  const services = [
    { name: "Malerarbeiten", href: "/leistungen/malerarbeiten" },
    { name: "Fassadenrenovation", href: "/leistungen/fassadenrenovation" },
    { name: "Gipserarbeiten", href: "/leistungen/gipserarbeiten" },
    { name: "Tapezieren", href: "/leistungen/tapezieren" },
    { name: "Spritzarbeiten", href: "/leistungen/spritzarbeiten" },
    {
      name: "Weitere Dienstleistungen",
      href: "/leistungen/weitere-dienstleistungen",
    },
  ];

  return (
    <div className="md:hidden">
      {/* Compact mobile header arrangement */}
      <div className="flex items-center space-x-2">
        {/* Contact dropdown (compact mobile version) */}
        <ContactDropdown
          isTransparent={isTransparent}
          isScrolledOrSpecialPage={isScrolledOrSpecialPage}
          isMobile
        />

        {/* Hamburger menu button */}
        <button
          className={menuButtonClasses}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop for outside click to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Mobile menu overlay - positioned under header */}
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mx-4 z-50">
            <div className="p-4 space-y-3">
              {/* Categorized Services Section with accordion-style dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-left font-medium text-sm text-gray-800 hover:text-[#e7027e] transition-colors duration-150 min-h-[44px] font-sans"
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                >
                  <span>Leistungen</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isServicesOpen && "rotate-180",
                    )}
                  />
                </button>

                {/* Slide-in animation for services submenu */}
                {isServicesOpen && (
                  <div className="mt-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-[#e7027e] hover:bg-gray-50 rounded-md transition-colors duration-150 font-sans min-h-[44px] flex items-center"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct navigation links with touch-optimized spacing */}
              <Link
                href="/ueber-uns"
                className="block px-3 py-2 font-medium text-sm text-gray-800 hover:text-[#e7027e] transition-colors duration-150 font-sans min-h-[44px] flex items-center"
                onClick={closeMenu}
              >
                Über uns
              </Link>

              <Link
                href="/referenzen"
                className="block px-3 py-2 font-medium text-sm text-gray-800 hover:text-[#e7027e] transition-colors duration-150 font-sans min-h-[44px] flex items-center"
                onClick={closeMenu}
              >
                Referenzen
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
