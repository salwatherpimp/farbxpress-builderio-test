"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ContactDropdown } from "@/components/header/ContactDropdown";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  isTransparent: boolean;
  isScrolledOrSpecialPage: boolean;
}

export function DesktopNavigation({
  isTransparent,
  isScrolledOrSpecialPage,
}: DesktopNavigationProps) {
  // Dynamic styling based on header state
  const linkClasses = cn(
    // Base styles with Inter font (primary font system)
    "px-4 py-2 font-medium text-base transition-colors duration-150 rounded-md font-sans",
    // Conditional text colors and effects
    isTransparent
      ? "text-white hover:text-white/80 drop-shadow-lg"
      : "text-gray-800 hover:text-[#e7027e]",
  );

  const triggerClasses = cn(
    // Base styles matching the design specification
    "px-4 py-2 font-medium text-base transition-colors duration-150 focus:outline-none focus:ring-0 bg-transparent font-sans",
    // Dynamic color system
    isTransparent
      ? "text-white hover:text-white/80 drop-shadow-lg data-[state=open]:text-white/80"
      : "text-gray-800 hover:text-[#e7027e] data-[state=open]:text-[#e7027e]",
  );

  // Service links with 6 items as specified
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
    <nav className="hidden md:flex items-center space-x-1 relative z-50">
      {/* Radix UI NavigationMenu for Services Dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={triggerClasses}>
              Leistungen
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* 350px wide dropdown as specified */}
              <div className="w-[350px] p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 mb-3 font-sans">
                    Unsere Leistungen
                  </h3>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#e7027e] hover:bg-gray-50 rounded-md transition-colors duration-150 font-sans"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Direct navigation links */}
      <Link href="/ueber-uns" className={linkClasses}>
        Über uns
      </Link>

      <Link href="/referenzen" className={linkClasses}>
        Referenzen
      </Link>

      {/* Contact dropdown button */}
      <ContactDropdown
        isTransparent={isTransparent}
        isScrolledOrSpecialPage={isScrolledOrSpecialPage}
      />
    </nav>
  );
}
