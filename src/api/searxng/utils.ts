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

export const getEngineBangs = (
  tab: ISearchTabs,
  enginesGeneral: IGeneralEngines[],
  enginesImages: IImagesEngines[],
  enginesVideos: IVideosEngines[],
  enginesNews: INewsEngines[]
) => {
  let bangs = "";

  if (tab === "general") {
    enginesGeneral.map((eng) => {
      bangs = bangs + `${GENERAL_BANGS[eng]}%20`;
    });
  }

  if (tab === "images") {
    enginesImages.map((eng) => {
      bangs = bangs + `${IMAGES_BANGS[eng]}%20`;
    });
  }

  if (tab === "videos") {
    enginesVideos.map((eng) => {
      bangs = bangs + `${VIDEOS_BANGS[eng]}%20`;
    });
  }

  if (tab === "news") {
    enginesNews.map((eng) => {
      bangs = bangs + `${NEWS_BANGS[eng]}%20`;
    });
  }

  return bangs;
};
