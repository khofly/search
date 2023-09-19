import { create } from "zustand";
import contentJson from "public/locales/en.json";
import { DotNestedKeys } from "@ts/global.types";
import { getValueByString } from "./translations";
import { IProfile } from "@tsuvah/core";

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

export const useTranslations = () => {
  const content = useGlobalStore((state) => state.content);

  const t = (keysString: DotNestedKeys<ITranslations>, ...args: string[]) => {
    const label = getValueByString(content, keysString);

    if (args.length) {
      const formattedContent = label?.replace(/{(\d+)}/g, (match) => {
        return args[parseInt(match.substring(1, 2))];
      });

      return formattedContent || "<-- untranslated -->";
    }

    return label || "<-- untranslated -->";
  };

  return t;
};
