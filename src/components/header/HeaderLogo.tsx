"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLogoProps {
  isTransparent: boolean;
}

export function HeaderLogo({ isTransparent }: HeaderLogoProps) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Intelligent navigation behavior
  const handleClick = (e: React.MouseEvent) => {
    if (isHomepage) {
      // On homepage: smooth scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // On other pages: normal navigation to homepage (handled by Link)
  };

  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="cursor-pointer"
        onClick={handleClick}
        aria-label={isHomepage ? "Scroll to top" : "Go to homepage"}
      >
        {/* Performance-optimized picture element with AVIF format */}
        <picture>
          {/* Desktop version with responsive srcSet */}
          <source
            media="(min-width: 768px)"
            srcSet="https://res.cloudinary.com/dwlk9of7h/image/upload/w_200,h_74,c_fit/v1748417852/farbXpress_logo_1_wiyumg.avif"
          />
          {/* Mobile version */}
          <Image
            src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_130,h_48,c_fit/v1748417852/farbXpress_logo_1_wiyumg.avif"
            alt="Farbxpress Logo"
            width={130}
            height={48}
            className="h-12 md:h-14 w-auto object-scale-down transition-transform duration-150 hover:scale-105"
            priority
            loading="lazy"
            decoding="async"
          />
        </picture>
      </Link>
    </div>
  );
}
