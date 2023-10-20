import { create } from "zustand";
import contentJson from "public/locales/en.json";
import { IProfile } from "@khofly/core";

export type ITranslations = typeof contentJson;

interface GlobalState {
  profile: IProfile | null;
  setProfile: (profile: IProfile | null) => void;

  language: "rs" | "en";
  content: ITranslations; // Content fetched from public/locales
  changeLanguage: (locale: "en") => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),

  language: "en",
  content: require(`../../../public/locales/en.json`),
  changeLanguage: (locale) =>
    set({
      language: locale,
      content: require(`../../../public/locales/${locale}.json`),
    }),
}));

export * from "./translations";
