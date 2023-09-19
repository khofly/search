import { create } from "zustand";

export type ISearchTabs = "general" | "images" | "videos" | "news" | "maps";

interface SearchState {
  selectedTab: ISearchTabs;
  setSelectedTab: (setSelectedTab: ISearchTabs) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  selectedTab: "general",
  setSelectedTab: (selectedTab) => set({ selectedTab }),
}));
