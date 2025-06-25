"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { ContactDropdown } from "./ContactDropdown";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isTransparent: boolean;
}

export function MobileNavigation({ isTransparent }: MobileNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const menuButtonClasses = cn(
    "p-2 rounded-md border transition-colors duration-150",
    isTransparent
      ? "bg-white/20 border-white/30 text-white"
      : "bg-gray-100 border-gray-300 text-gray-800",
  );

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
      <div className="flex items-center space-x-2">
        <ContactDropdown isTransparent={isTransparent} isMobile />

        <button
          className={menuButtonClasses}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Menü öffnen"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mx-4 z-50">
            <div className="p-4 space-y-3">
              {/* Services Section */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-left font-medium text-gray-800 hover:text-[#e7027e] transition-colors duration-150"
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

                {isServicesOpen && (
                  <div className="mt-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-[#e7027e] hover:bg-gray-50 rounded-md transition-colors duration-150"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link
                href="/ueber-uns"
                className="block px-3 py-2 font-medium text-gray-800 hover:text-[#e7027e] transition-colors duration-150"
                onClick={closeMenu}
              >
                Über uns
              </Link>

              <Link
                href="/referenzen"
                className="block px-3 py-2 font-medium text-gray-800 hover:text-[#e7027e] transition-colors duration-150"
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
