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

  // Determine if we're on a scrolled state or special page (for styling)
  const isScrolledOrSpecialPage = isScrolled || !isHomepage;

  // Hide navigation on special pages
  const hideNavigation = isContactPage || isDankePage;

  // Dynamic background system based on page type and scroll position
  let backgroundClasses = "";
  let shadowClasses = "";

  if (isContactPage) {
    // Gray background for contact page
    backgroundClasses = "bg-gray-50";
    shadowClasses = "";
  } else if (isTransparent) {
    // Transparent background on homepage without scroll
    backgroundClasses = "bg-transparent";
    shadowClasses = "";
  } else {
    // White background when scrolled or on other pages
    backgroundClasses = "bg-white";
    if (isUeberUnsPage || isReferenzenPage || isScrolled) {
      shadowClasses = "shadow-sm";
    }
  }

  const headerClasses = cn(
    // Fixed positioning with high z-index for overlay
    "fixed top-0 left-0 right-0 z-50",
    // Smooth transitions for all state changes
    "transition-all duration-300 ease-in-out",
    // Dynamic background and shadow classes
    backgroundClasses,
    shadowClasses,
  );

  return (
    <header className={headerClasses}>
      {/* Container with max width and centered positioning */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Flex layout: logo left, navigation right */}
        <div className="flex items-center justify-between">
          <HeaderLogo isTransparent={isTransparent} />

          {!hideNavigation && (
            <>
              {/* Desktop navigation (hidden on mobile) */}
              <DesktopNavigation
                isTransparent={isTransparent}
                isScrolledOrSpecialPage={isScrolledOrSpecialPage}
              />
              {/* Mobile navigation (hidden on desktop) */}
              <MobileNavigation
                isTransparent={isTransparent}
                isScrolledOrSpecialPage={isScrolledOrSpecialPage}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
