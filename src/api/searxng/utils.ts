import {
  IGeneralEngines,
  IImagesEngines,
  INewsEngines,
  ISearchTabs,
  IVideosEngines,
} from "@store/search";

const GENERAL_BANGS = {
  google: "!go",
  duckduckgo: "!ddg",
  bing: "!bi",
  qwant: "!qw",
  brave: "!br",
  yahoo: "!yh",

  wikipedia: "!wp",
  wikidata: "!wd",
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

const NEWS_BANGS = {
  google: "!gon",
  duckduckgo: "!ddn",
  bing: "!bin",
  qwant: "!qwn",
  yahoo: "!yhn",

  wikinews: "!wn",
};

export const getEngineBangs = (tab: ISearchTabs, enginesSelected: any[]) => {
  let bangs = "";

  if (tab === "general") {
    enginesSelected.map((eng) => {
      // @ts-ignore
      bangs = bangs + `${GENERAL_BANGS[eng]}%20`;
    });
  }

  if (tab === "images") {
    enginesSelected.map((eng) => {
      // @ts-ignore
      bangs = bangs + `${IMAGES_BANGS[eng]}%20`;
    });
  }

  if (tab === "videos") {
    enginesSelected.map((eng) => {
      // @ts-ignore
      bangs = bangs + `${VIDEOS_BANGS[eng]}%20`;
    });
  }

  if (tab === "news") {
    enginesSelected.map((eng) => {
      // @ts-ignore
      bangs = bangs + `${NEWS_BANGS[eng]}%20`;
    });
  }

  return bangs;
};
