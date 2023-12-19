import { create } from "zustand";
import { persist } from "zustand/middleware";

export type IAutocompleteEngines = "google" | "duckduckgo" | "brave" | "qwant";

export type ISearchLang = "all" | "auto" | string;

export type ISafeSearch = 0 | 1 | 2;

export type IDateRange = "all" | "day" | "month" | "year";

export type ICategories =
  | "general"
  | "images"
  | "videos"
  | "news"
  | "maps"
  | "music"
  | "it"
  | "science"
  | "files"
  | "social-media";

interface GeneralState {
  categories: ICategories[];
  setCategories: (next: ICategories[]) => void;

  autocompleteEngine: IAutocompleteEngines;
  setAutocompleteEngine: (next: IAutocompleteEngines) => void;

  // Search options
  isSearchOptionsOpen: boolean;
  setIsSearchOptionsOpen: (next: boolean) => void;
  searchLanguage: ISearchLang;
  setSearchLanguage: (next: ISearchLang) => void;
  safeSearch: ISafeSearch;
  setSafeSearch: (next: ISafeSearch) => void;
  dateRange: IDateRange;
  setDateRange: (next: IDateRange) => void;

  visitedLinks: string[];
  updateVisitedLinks: (next: string) => void;
  resetVisitedLinks: () => void;

  displayFavicon: boolean;
  setDisplayFavicon: (next: boolean) => void;

  useAutocomplete: boolean;
  setUseAutocomplete: (next: boolean) => void;

  useInstantAnswers: boolean;
  setUseInstantAnswers: (next: boolean) => void;

  openInNewTab: boolean;
  setOpenInNewTab: (next: boolean) => void;
}

export const useGeneralStore = create<GeneralState>()(
  persist(
    (set) => ({
      categories: ["general", "images", "videos", "news", "maps"],
      setCategories: (next) => set({ categories: next }),

      autocompleteEngine: "google",
      setAutocompleteEngine: (next) => set({ autocompleteEngine: next }),

      // Search options
      isSearchOptionsOpen: false,
      setIsSearchOptionsOpen: (next) => set({ isSearchOptionsOpen: next }),
      searchLanguage: "all",
      setSearchLanguage: (next) => set({ searchLanguage: next }),
      safeSearch: 0,
      setSafeSearch: (next) => set({ safeSearch: next }),
      dateRange: "all",
      setDateRange: (next) => set({ dateRange: next }),

      visitedLinks: [],
      updateVisitedLinks: (next) =>
        set((state) => ({ visitedLinks: [...state.visitedLinks, next] })),
      resetVisitedLinks: () => set({ visitedLinks: [] }),

      displayFavicon: false,
      setDisplayFavicon: (displayFavicon) => set({ displayFavicon }),

      useAutocomplete: true,
      setUseAutocomplete: (next) => set({ useAutocomplete: next }),

      useInstantAnswers: true,
      setUseInstantAnswers: (next) => set({ useInstantAnswers: next }),

      openInNewTab: false,
      setOpenInNewTab: (next) => set({ openInNewTab: next }),
    }),
    {
      name: "general-store", // name of the item in the storage (must be unique)
      partialize: (state) => ({
        displayFavicon: state.displayFavicon,
        openInNewTab: state.openInNewTab,
        useAutocomplete: state.useAutocomplete,
        autocompleteEngine: state.autocompleteEngine,
        categories: state.categories,
      }),
    }
  )
);
