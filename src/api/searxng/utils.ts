import { IGeneralEngines, ISearchTabs } from "@store/search";

const GENERAL_BANGS = {
  google: "!go",
  duckduckgo: "!ddg",
  bing: "!bi",
  qwant: "!qw",
  brave: "!br",
};

export const getEngineBangs = (
  engines: IGeneralEngines[],
  tab: ISearchTabs
) => {
  let bangs = "";

  if (tab === "general") {
    engines.map((eng, i) => {
      bangs = bangs + `${GENERAL_BANGS[eng]}%20`;
    });
  }

  return bangs;
};
