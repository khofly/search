import useFetch from "../use-fetch";
import { useSearXNGStore } from "@store/searxng";
import { useSearchStore } from "@store/search";
import useSWRInfinite from "swr/infinite";
import { getEngineBangs } from "./utils";
import { useSearchParams } from "next/navigation";
import {
  ICategories,
  IDateRange,
  ISafeSearch,
  ISearchLang,
  useGeneralStore,
} from "@store/general";

const getKey = (
  pageIndex: number,
  previousPageData: any,
  tab: ICategories,
  q: string,
  enginesSelected: string[],
  safeSearch: ISafeSearch,
  dateRange: IDateRange,
  searchLanguage: ISearchLang
) => {
  if (previousPageData && !previousPageData?.results?.length) return null; // reached the end

  const engineBangs = getEngineBangs(tab, enginesSelected);

  const catgParam = `&categories=${tab}`;
  const pageParam = `&pageno=${pageIndex + 1}`;
  const safeParam = `&safesearch=${safeSearch}`;
  const dateParam = dateRange === "all" ? "" : `&time_range=${dateRange}`;
  const langParam =
    searchLanguage === "all" ? "" : `&language=${searchLanguage}`;

  // SWR key
  return `/search?q=${engineBangs}${encodeURIComponent(
    q
  )}${catgParam}${pageParam}${safeParam}${dateParam}${langParam}`;
};

// Restart SearXNG
// sudo systemctl reload nginx
// sudo service uwsgi restart searxng

const useSearXNGSWR = <IResults>() => {
  const { fetchData } = useFetch();

  const { domain: searxngDomain } = useSearXNGStore((state) => ({
    domain: state.domain,
  }));

  const {
    enginesGeneral,
    enginesImages,
    enginesVideos,
    enginesNews,
    enginesMusic,
    enginesIT,
  } = useSearchStore((state) => ({
    enginesGeneral: state.enginesGeneral,
    enginesImages: state.enginesImages,
    enginesVideos: state.enginesVideos,
    enginesNews: state.enginesNews,
    enginesMusic: state.enginesMusic,
    enginesIT: state.enginesIT,
  }));

  const { safeSearch, dateRange, searchLanguage } = useGeneralStore(
    (state) => ({
      safeSearch: state.safeSearch,
      dateRange: state.dateRange,
      searchLanguage: state.searchLanguage,
    })
  );

  const searchParams = useSearchParams();
  const q = (searchParams.get("q") as string) || "";
  const tab = (searchParams.get("tab") as ICategories) || "general";

  const fetcher = (_key: string) => {
    return fetchData(`${searxngDomain}${_key}&format=json`);
  };

  const enginesSelected = {
    general: enginesGeneral,
    images: enginesImages,
    videos: enginesVideos,
    news: enginesNews,
    maps: [],
    music: enginesMusic,
    it: enginesIT,
    science: [],
    files: [],
    "social-media": [],
  }[tab];

  return useSWRInfinite<IResults>(
    (idx, prev) =>
      getKey(
        idx,
        prev,
        tab,
        q,
        enginesSelected,
        safeSearch,
        dateRange,
        searchLanguage
      ),
    fetcher,
    {
      // populateCache
      revalidateOnMount: false,
      revalidateOnFocus: false,
      revalidateFirstPage: false,
      keepPreviousData: false,
      // keepPreviousData: false,
    }
  );
};

export default useSearXNGSWR;
