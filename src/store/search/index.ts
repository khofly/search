import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ISearchTabs = "general" | "images" | "videos" | "news" | "maps";

export type IAutocompleteEngines = "google" | "duckduckgo" | "brave" | "qwant";

export type IGeneralEngines =
  | "google"
  | "duckduckgo"
  | "bing"
  | "brave"
  | "qwant"
  | "yahoo"
  | "wikipedia"
  | "wikidata";

export type IImagesEngines =
  | "google"
  | "duckduckgo"
  | "bing"
  | "brave"
  | "qwant";

export type IVideosEngines =
  | "google"
  | "duckduckgo"
  | "bing"
  | "brave"
  | "qwant";

export type INewsEngines =
  | "google"
  | "duckduckgo"
  | "bing"
  | "qwant"
  | "yahoo"
  | "wikinews";

interface SearchState {
  enginesGeneral: IGeneralEngines[];
  setEnginesGeneral: (next: IGeneralEngines[]) => void;

  enginesImages: IImagesEngines[];
  setEnginesImages: (next: IImagesEngines[]) => void;

  enginesVideos: IImagesEngines[];
  setEnginesVideos: (next: IImagesEngines[]) => void;

  enginesNews: INewsEngines[];
  setEnginesNews: (next: INewsEngines[]) => void;

  autocompleteEngine: IAutocompleteEngines;
  setAutocompleteEngine: (next: IAutocompleteEngines) => void;

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

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      enginesGeneral: ["duckduckgo", "brave", "wikipedia"],
      setEnginesGeneral: (next) => set({ enginesGeneral: next }),

      enginesImages: ["duckduckgo", "bing", "qwant"],
      setEnginesImages: (next) => set({ enginesImages: next }),

      enginesVideos: ["duckduckgo", "brave", "qwant"],
      setEnginesVideos: (next) => set({ enginesImages: next }),

      enginesNews: ["duckduckgo", "bing", "wikinews"],
      setEnginesNews: (next) => set({ enginesNews: next }),

      autocompleteEngine: "google",
      setAutocompleteEngine: (next) => set({ autocompleteEngine: next }),

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
