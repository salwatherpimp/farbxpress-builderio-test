"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import { ContactDropdown } from "./ContactDropdown";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  isTransparent: boolean;
}

export function DesktopNavigation({ isTransparent }: DesktopNavigationProps) {
  const linkClasses = cn(
    "px-4 py-2 font-medium transition-colors duration-150 rounded-md",
    isTransparent
      ? "text-white hover:text-white/80 drop-shadow-lg"
      : "text-gray-800 hover:text-[#e7027e]",
  );

  const triggerClasses = cn(
    "px-4 py-2 font-medium transition-colors duration-150 focus:outline-none focus:ring-0 bg-transparent",
    isTransparent
      ? "text-white hover:text-white/80 drop-shadow-lg data-[state=open]:text-white/80"
      : "text-gray-800 hover:text-[#e7027e] data-[state=open]:text-[#e7027e]",
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
    <nav className="hidden md:flex items-center space-x-1 relative z-50">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={triggerClasses}>
              Leistungen
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[350px] p-4 bg-white">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Unsere Leistungen
                  </h3>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#e7027e] hover:bg-gray-50 rounded-md transition-colors duration-150"
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

      <Link href="/ueber-uns" className={linkClasses}>
        Über uns
      </Link>

      <Link href="/referenzen" className={linkClasses}>
        Referenzen
      </Link>

      <ContactDropdown isTransparent={isTransparent} />
    </nav>
  );
}
