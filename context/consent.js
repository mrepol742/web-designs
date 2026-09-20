"use client";

import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent_v1";

const ConsentContext = createContext(null);

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setConsent(JSON.parse(stored));
    }
  }, []);

  const updateConsent = (prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));

    setConsent(prefs);
  };

  const openBanner = () => setBannerOpen(true);
  const closeBanner = () => setBannerOpen(false);

  return (
    <ConsentContext.Provider
      value={{ consent, updateConsent, bannerOpen, openBanner, closeBanner }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => {
  const ctx = useContext(ConsentContext);

  if (!ctx) {
    throw new Error("useConsent must be used inside ConsentProvider");
  }

  return ctx;
};
