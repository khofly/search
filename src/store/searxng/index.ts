import { create } from "zustand";

interface SearXNGState {
  domain: string;
  setDomain: (domain: string) => void;
}

export const useSearXNGStore = create<SearXNGState>()((set) => ({
  domain: process.env.NEXT_PUBLIC_SEARXNG_URL || "",
  setDomain: (domain) => set({ domain }),
}));
