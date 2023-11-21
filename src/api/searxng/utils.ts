import { IGeneralEngines, IImagesEngines, ISearchTabs } from "@store/search";

const GENERAL_BANGS = {
  google: "!go",
  duckduckgo: "!ddg",
  bing: "!bi",
  qwant: "!qw",
  brave: "!br",
};

const IMAGES_BANGS = {
  google: "!goi",
  duckduckgo: "!ddi",
  qwant: "!qwi",
};

const VIDEOS_BANGS = {
  google: "!gov",
  duckduckgo: "!ddv",
  qwant: "!qwv",
};

export const getEngineBangs = (
  tab: ISearchTabs,
  enginesGeneral: IGeneralEngines[],
  enginesImages: IImagesEngines[]
) => {
  let bangs = "";

  if (tab === "general") {
    enginesGeneral.map((eng, i) => {
      bangs = bangs + `${GENERAL_BANGS[eng]}%20`;
    });
  }

  if (tab === "images") {
    enginesImages.map((eng, i) => {
      bangs = bangs + `${IMAGES_BANGS[eng]}%20`;
    });
  }

  return bangs;
};
