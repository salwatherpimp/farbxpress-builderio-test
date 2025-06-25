"use client";

import { useState, useEffect } from "react";

interface BusinessHours {
  isOpen: boolean;
  nextOpenTime?: string;
}

export function useBusinessHours(): BusinessHours {
  const [businessHours, setBusinessHours] = useState<BusinessHours>({
    isOpen: false,
  });

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;

      // Business hours: Monday-Friday 8:00-17:00, Saturday 8:00-12:00
      let isOpen = false;
      let nextOpenTime = "";

      if (currentDay >= 1 && currentDay <= 5) {
        // Monday to Friday
        isOpen = currentTime >= 8 * 60 && currentTime < 17 * 60; // 8:00-17:00
        if (!isOpen) {
          nextOpenTime =
            currentTime < 8 * 60 ? "heute um 8:00" : "morgen um 8:00";
        }
      } else if (currentDay === 6) {
        // Saturday
        isOpen = currentTime >= 8 * 60 && currentTime < 12 * 60; // 8:00-12:00
        if (!isOpen) {
          nextOpenTime =
            currentTime < 8 * 60 ? "heute um 8:00" : "Montag um 8:00";
        }
      } else {
        // Sunday
        isOpen = false;
        nextOpenTime = "Montag um 8:00";
      }

      setBusinessHours({ isOpen, nextOpenTime });
    };

    // Check immediately
    checkBusinessHours();

    // Check every minute
    const interval = setInterval(checkBusinessHours, 60000);

    return () => clearInterval(interval);
  }, []);

  return businessHours;
}
