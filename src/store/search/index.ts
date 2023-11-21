import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ISearchTabs = "general" | "images" | "videos" | "news" | "maps";

export type IAutocompleteEngines = "google" | "duckduckgo";

export type IGeneralEngines =
  | "google"
  | "duckduckgo"
  | "bing"
  | "brave"
  | "qwant";

export type IImagesEngines = "google" | "duckduckgo" | "qwant";

export type IVideosEngines = "google" | "duckduckgo" | "qwant";

interface SearchState {
  enginesGeneral: IGeneralEngines[];
  setEnginesGeneral: (next: IGeneralEngines[]) => void;

  enginesImages: IImagesEngines[];
  setEnginesImages: (next: IImagesEngines[]) => void;

  enginesVideos: IImagesEngines[];
  setEnginesVideos: (next: IImagesEngines[]) => void;

  autocompleteEngine: IAutocompleteEngines;
  setAutocompleteEngine: (next: IAutocompleteEngines) => void;

  visitedLinks: string[];
  updateVisitedLinks: (next: string) => void;
  resetVisitedLinks: () => void;

  displayFavicon: boolean;
  setDisplayFavicon: (next: boolean) => void;

  useAutocomplete: boolean;
  setUseAutocomplete: (next: boolean) => void;

  openInNewTab: boolean;
  setOpenInNewTab: (next: boolean) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      enginesGeneral: ["duckduckgo"],
      setEnginesGeneral: (next) => set({ enginesGeneral: next }),

      enginesImages: ["duckduckgo", "qwant"],
      setEnginesImages: (next) => set({ enginesImages: next }),

      enginesVideos: ["duckduckgo", "qwant"],
      setEnginesVideos: (next) => set({ enginesImages: next }),

      autocompleteEngine: "google",
      setAutocompleteEngine: (next) => set({ autocompleteEngine: next }),

      visitedLinks: [],
      updateVisitedLinks: (next) =>
        set((state) => ({ visitedLinks: [...state.visitedLinks, next] })),
      resetVisitedLinks: () => set({ visitedLinks: [] }),

      displayFavicon: false,
      setDisplayFavicon: (displayFavicon) => set({ displayFavicon }),

      useAutocomplete: false,
      setUseAutocomplete: (next) => set({ useAutocomplete: next }),

      openInNewTab: false,
      setOpenInNewTab: (next) => set({ openInNewTab: next }),
    }),
    {
      name: "search-store", // name of the item in the storage (must be unique)
      partialize: (state) => ({
        visitedLinks: state.visitedLinks,
        displayFavicon: state.displayFavicon,
        openInNewTab: state.openInNewTab,
        useAutocomplete: state.useAutocomplete,
        autocompleteEngine: state.autocompleteEngine,
        enginesGeneral: state.enginesGeneral,
        enginesImages: state.enginesImages,
        enginesVideos: state.enginesVideos,
      }),
    }
  )
);
