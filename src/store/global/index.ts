import { create } from "zustand";
import { persist } from "zustand/middleware";
import contentJson from "public/locales/en.json";
import { IProfile } from "@khofly/core";
import { IAppTheme } from "@ts/global.types";

export type ITranslations = typeof contentJson;

interface GlobalState {
  profile: IProfile | null;
  setProfile: (profile: IProfile | null) => void;

  language: "rs" | "en";
  content: ITranslations; // Content fetched from public/locales
  changeLanguage: (locale: "en") => void;

  appTheme: IAppTheme;
  setAppTheme: (theme: IAppTheme) => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),

      language: "en",
      content: require(`../../../public/locales/en.json`),
      changeLanguage: (locale) =>
        set({
          language: locale,
          content: require(`../../../public/locales/${locale}.json`),
        }),

      appTheme: "Mantine",
      setAppTheme: (appTheme) => set({ appTheme }),
    }),
    {
      name: "global-store", // name of the item in the storage (must be unique)
      partialize: (state) => ({
        profile: state.profile,
        language: state.language,
        appTheme: state.appTheme,
      }),
    }
  )
);

export * from "./hooks/use-translations";
