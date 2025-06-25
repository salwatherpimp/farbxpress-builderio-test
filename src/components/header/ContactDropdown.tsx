"use client";

import { useState } from "react";
import Link from "next/link";
import { Hand, Phone, ChevronDown } from "lucide-react";
import { useBusinessHours } from "@/hooks/useBusinessHours";
import { cn } from "@/lib/utils";

interface ContactDropdownProps {
  isTransparent: boolean;
  isMobile?: boolean;
}

export function ContactDropdown({
  isTransparent,
  isMobile = false,
}: ContactDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: isBusinessOpen } = useBusinessHours();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const buttonClasses = cn(
    "flex items-center font-medium gap-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0",
    isMobile
      ? "px-2 py-1.5 rounded-lg text-sm"
      : "px-6 py-3 rounded-full text-sm",
    isTransparent
      ? "bg-white/20 text-white border border-white/30 hover:bg-white/30"
      : "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200",
  );

  const dropdownClasses = cn(
    "absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[280px]",
    isMobile ? "z-[9999]" : "z-[9999]",
  );

  return (
    <div className="relative">
      <button
        className={buttonClasses}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Hand className="h-4 w-4" />
        <span className="whitespace-nowrap">Kontaktiere uns</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998]"
            onClick={closeDropdown}
            aria-hidden="true"
          />
          <div className={dropdownClasses}>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Kontakt aufnehmen
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Sprechen Sie direkt mit uns oder senden Sie eine
                  unverbindliche Anfrage.
                </p>
              </div>

              <div className="space-y-2">
                {isBusinessOpen && (
                  <a
                    href="tel:+41762288071"
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200 hover:bg-green-100 transition-colors duration-150"
                    onClick={closeDropdown}
                  >
                    <div className="flex-shrink-0">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-green-800">
                        Jetzt anrufen
                      </div>
                      <div className="text-sm text-green-600">
                        +41 76 228 80 71
                      </div>
                      <div className="text-xs text-green-500">
                        Wir sind gerade erreichbar
                      </div>
                    </div>
                  </a>
                )}

                <Link
                  href="/kontakt"
                  className="block p-3 rounded-lg bg-pink-50 border border-pink-200 hover:bg-pink-100 transition-colors duration-150"
                  onClick={closeDropdown}
                >
                  <div className="font-medium text-pink-800">
                    Kontaktformular
                  </div>
                  <div className="text-sm text-pink-600">
                    Unverbindliche Anfrage senden
                  </div>
                </Link>

                <div className="pt-2 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    <div className="font-medium mb-1">Geschäftszeiten:</div>
                    <div>Mo-Fr: 8:00-17:00</div>
                    <div>Sa: 8:00-12:00</div>
                    <div>So: Geschlossen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
