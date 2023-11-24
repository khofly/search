import useFetch from "../use-fetch";
import { useSearXNGStore } from "@store/searxng";
import {
  IGeneralEngines,
  IImagesEngines,
  IVideosEngines,
  ISearchTabs,
  useSearchStore,
  INewsEngines,
} from "@store/search";
import useSWRInfinite from "swr/infinite";
import { getEngineBangs } from "./utils";
import { useSearchParams } from "next/navigation";

const getKey = (
  pageIndex: number,
  previousPageData: any,
  tab: ISearchTabs,
  q: string,
  enginesSelected: string[]
) => {
  if (previousPageData && !previousPageData?.results?.length) return null; // reached the end

  const engineBangs = getEngineBangs(tab, enginesSelected);

  return `/search?q=${engineBangs}${q}&categories=${tab}&pageno=${
    pageIndex + 1
  }`; // SWR key
};

// Restart SearXNG
// sudo systemctl reload nginx
// sudo service uwsgi restart searxng

const useSearXNGSWR = <IResults>() => {
  const { fetchData } = useFetch();

  const { domain: searxngDomain } = useSearXNGStore((state) => ({
    domain: state.domain,
  }));

  const { enginesGeneral, enginesImages, enginesVideos, enginesNews } =
    useSearchStore((state) => ({
      enginesGeneral: state.enginesGeneral,
      enginesImages: state.enginesImages,
      enginesVideos: state.enginesVideos,
      enginesNews: state.enginesNews,
    }));

  const searchParams = useSearchParams();
  const q = (searchParams.get("q") as string) || "";
  const tab = (searchParams.get("tab") as ISearchTabs) || "general";

  const fetcher = (_key: string) => {
    return fetchData(`${searxngDomain}${_key}&format=json`);
  };

  const enginesSelected = {
    general: enginesGeneral,
    images: enginesImages,
    videos: enginesVideos,
    news: enginesNews,
    maps: [],
  }[tab];

  return useSWRInfinite<IResults>(
    (idx, prev) => getKey(idx, prev, tab, q, enginesSelected),
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
