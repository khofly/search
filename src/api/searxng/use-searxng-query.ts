import useFetch from "../use-fetch";
import { useSearXNGStore } from "@store/searxng";
import { ISearchTabs, useSearchStore } from "@store/search";
import useSWRInfinite from "swr/infinite";
import { getEngineBangs } from "./utils";
import { useSearchParams } from "next/navigation";

const getKey = (pageIndex: number, previousPageData: any, tab: ISearchTabs) => {
  if (previousPageData && !previousPageData?.results?.length) return null; // reached the end
  return `/search?categories=${tab}&pageno=${pageIndex + 1}`; // SWR key
};

// Restart SearXNG
// sudo systemctl reload nginx
// sudo service uwsgi restart searxng

const useSearXNGSWR = <IResults>() => {
  const { fetchData } = useFetch();

  const { domain: searxngDomain } = useSearXNGStore((state) => ({
    domain: state.domain,
  }));

  const { enginesGeneral, enginesImages } = useSearchStore((state) => ({
    enginesGeneral: state.enginesGeneral,
    enginesImages: state.enginesImages,
  }));

  const searchParams = useSearchParams();
  const q = (searchParams.get("q") as string) || "";
  const tab = (searchParams.get("tab") as ISearchTabs) || "general";

  const fetcher = (_key: string) => {
    const engineBangs = getEngineBangs(tab, enginesGeneral, enginesImages);

    return fetchData(
      `${searxngDomain}${_key}&q=${engineBangs}${q}&format=json`
    );
  };

  return useSWRInfinite<IResults>(
    (idx, prev) => getKey(idx, prev, tab),
    fetcher,
    {
      // populateCache
      revalidateOnMount: false,
      revalidateOnFocus: false,
      revalidateFirstPage: false,
      // keepPreviousData: false,
    }
  );
};

export default useSearXNGSWR;
