"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type PropertyStateContextValue = {
  wishlist: string[];
  compare: string[];
  toggleWishlist: (id: string) => void;
  toggleCompare: (id: string) => void;
  removeWishlist: (id: string) => void;
  removeCompare: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  isCompared: (id: string) => boolean;
};

const PropertyStateContext = createContext<PropertyStateContextValue | null>(null);

const wishlistKey = "dream-habitat-wishlist";
const compareKey = "dream-habitat-compare";

function readStorage(key: string) {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
}

export function PropertyStateProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);

  useEffect(() => {
    setWishlist(readStorage(wishlistKey));
    setCompare(readStorage(compareKey));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    window.localStorage.setItem(compareKey, JSON.stringify(compare));
  }, [compare]);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }, []);

  const toggleCompare = useCallback((id: string) => {
    setCompare((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      return [...current.slice(-2), id];
    });
  }, []);

  const removeWishlist = useCallback((id: string) => {
    setWishlist((current) => current.filter((item) => item !== id));
  }, []);

  const removeCompare = useCallback((id: string) => {
    setCompare((current) => current.filter((item) => item !== id));
  }, []);

  const value = useMemo(
    () => ({
      wishlist,
      compare,
      toggleWishlist,
      toggleCompare,
      removeWishlist,
      removeCompare,
      isWishlisted: (id: string) => wishlist.includes(id),
      isCompared: (id: string) => compare.includes(id)
    }),
    [compare, removeCompare, removeWishlist, toggleCompare, toggleWishlist, wishlist]
  );

  return <PropertyStateContext.Provider value={value}>{children}</PropertyStateContext.Provider>;
}

export function usePropertyState() {
  const context = useContext(PropertyStateContext);

  if (!context) {
    throw new Error("usePropertyState must be used inside PropertyStateProvider");
  }

  return context;
}
