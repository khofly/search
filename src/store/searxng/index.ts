import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearXNGState {
  domain: string;
  setDomain: (domain: string) => void;
}

export const useSearXNGStore = create<SearXNGState>()(
  persist(
    (set) => ({
      domain: process.env.NEXT_PUBLIC_SEARXNG_URL || "",
      setDomain: (domain) => set({ domain }),
    }),
    {
      name: "searxng-store", // name of the item in the storage (must be unique)
      partialize: (state) => ({
        domain: state.domain,
      }),
    }
  )
);
