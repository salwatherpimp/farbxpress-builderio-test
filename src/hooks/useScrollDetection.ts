"use client";

import { useState, useEffect } from "react";

interface UseScrollDetectionReturn {
  isScrolled: boolean;
  scrollY: number;
}

export function useScrollDetection(
  threshold: number = 0,
): UseScrollDetectionReturn {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, scrollY };
}
