import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  | "brave"
  | "qwant"
  | "yahoo"
  | "presearch"
  | "wikinews";

export type IMusicEngines =
  | "genius"
  | "radiobrowser"
  | "bandcamp"
  | "mixcloud"
  | "pipedmusic"
  | "soundcloud"
  | "youtube";

export type IITEngines =
  | "dockerhub"
  | "npm"
  | "pypi"
  | "askubuntu"
  | "stackoverflow"
  | "superuser"
  | "codeberg"
  | "github"
  | "gitlab"
  | "archwiki"
  | "gentoo"
  | "mdn";

export type IScienceEngines =
  | "arxiv"
  | "crossref"
  | "googlescholar"
  | "archive"
  | "pubmed"
  | "semanticscholar"
  | "wikispecies"
  | "openairedatasets"
  | "openairepublications"
  | "pdbe";

interface SearchState {
  enginesGeneral: IGeneralEngines[];
  setEnginesGeneral: (next: IGeneralEngines[]) => void;

  enginesImages: IImagesEngines[];
  setEnginesImages: (next: IImagesEngines[]) => void;

  enginesVideos: IImagesEngines[];
  setEnginesVideos: (next: IImagesEngines[]) => void;

  enginesNews: INewsEngines[];
  setEnginesNews: (next: INewsEngines[]) => void;

  enginesMusic: IMusicEngines[];
  setEnginesMusic: (next: IMusicEngines[]) => void;

  enginesIT: IITEngines[];
  setEnginesIT: (next: IITEngines[]) => void;

  enginesScience: IScienceEngines[];
  setEnginesScience: (next: IScienceEngines[]) => void;
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

      enginesMusic: ["radiobrowser", "soundcloud", "youtube"],
      setEnginesMusic: (next) => set({ enginesMusic: next }),

      enginesIT: ["dockerhub", "stackoverflow", "github", "archwiki"],
      setEnginesIT: (next) => set({ enginesIT: next }),

      enginesScience: ["arxiv", "googlescholar", "pubmed", "pdbe"],
      setEnginesScience: (next) => set({ enginesScience: next }),
    }),
    {
      name: "search-store", // name of the item in the storage (must be unique)
      partialize: (state) => ({
        enginesGeneral: state.enginesGeneral,
        enginesImages: state.enginesImages,
        enginesVideos: state.enginesVideos,
        enginesNews: state.enginesNews,
        enginesMusic: state.enginesMusic,
        enginesIT: state.enginesIT,
        enginesScience: state.enginesScience,
      }),
    }
  )
);
