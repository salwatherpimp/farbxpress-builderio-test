"use client";

import { usePathname } from "next/navigation";
import { useScrollDetection } from "@/hooks/useScrollDetection";
import { HeaderLogo } from "./HeaderLogo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { isScrolled } = useScrollDetection(0);

  // Special page detection
  const isContactPage = pathname === "/kontakt";
  const isDankePage = pathname === "/danke";
  const isUeberUnsPage = pathname === "/ueber-uns";
  const isReferenzenPage = pathname === "/referenzen";
  const isHomepage = pathname === "/";

  // Determine if header should be transparent
  const isTransparent = isHomepage && !isScrolled;

  // Hide navigation on special pages
  const hideNavigation = isContactPage || isDankePage;

  // Determine background and shadow classes
  let backgroundClasses = "";
  let shadowClasses = "";

  if (isContactPage) {
    backgroundClasses = "bg-gray-50";
    shadowClasses = "";
  } else if (isTransparent) {
    backgroundClasses = "bg-transparent";
    shadowClasses = "";
  } else {
    backgroundClasses = "bg-white";
    if (isUeberUnsPage || isReferenzenPage) {
      shadowClasses = "shadow-sm";
    } else if (isScrolled) {
      shadowClasses = "shadow-sm";
    }
  }

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
    backgroundClasses,
    shadowClasses,
  );

  return (
    <header className={headerClasses}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <HeaderLogo isScrolled={isScrolled} />

          {!hideNavigation && (
            <>
              <DesktopNavigation isTransparent={isTransparent} />
              <MobileNavigation isTransparent={isTransparent} />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
