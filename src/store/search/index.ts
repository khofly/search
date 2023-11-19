import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ISearchTabs = "general" | "images" | "videos" | "news" | "maps";

export type IAutocompleteEngines = "google" | "duckduckgo";

interface SearchState {
  selectedTab: ISearchTabs;
  setSelectedTab: (setSelectedTab: ISearchTabs) => void;

  visitedLinks: string[];
  updateVisitedLinks: (next: string) => void;
  resetVisitedLinks: () => void;

  displayFavicon: boolean;
  setDisplayFavicon: (next: boolean) => void;

  useAutocomplete: boolean;
  setUseAutocomplete: (next: boolean) => void;

  autocompleteEngine: IAutocompleteEngines;
  setAutocompleteEngine: (next: IAutocompleteEngines) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      selectedTab: "general",
      setSelectedTab: (selectedTab) => set({ selectedTab }),
      visitedLinks: [],
      updateVisitedLinks: (next) =>
        set((state) => ({ visitedLinks: [...state.visitedLinks, next] })),
      resetVisitedLinks: () => set({ visitedLinks: [] }),

      displayFavicon: false,
      setDisplayFavicon: (displayFavicon) => set({ displayFavicon }),

      useAutocomplete: false,
      setUseAutocomplete: (next) => set({ useAutocomplete: next }),

      autocompleteEngine: "duckduckgo",
      setAutocompleteEngine: (next) => set({ autocompleteEngine: next }),
    }),
    {
      name: "search-store", // name of the item in the storage (must be unique)
      partialize: (state) => ({
        visitedLinks: state.visitedLinks,
        displayFavicon: state.displayFavicon,
        useAutocomplete: state.useAutocomplete,
        autocompleteEngine: state.autocompleteEngine,
      }),
    }
  )
);
