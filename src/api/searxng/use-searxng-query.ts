import useFetch from "../use-fetch";
import { useSearXNGStore } from "@store/searxng";
import { useSearchStore } from "@store/search";
import useSWRInfinite from "swr/infinite";
import { getEngineBangs } from "./utils";
import useSWRMutation from "swr/mutation";

interface IQueryArgs {
  q: string;
  tab: string;
  page: number;
}

// Restart SearXNG
// sudo systemctl reload nginx
// sudo service uwsgi restart searxng
// q: string, tab: string
const useSearXNGSWR = () => {
  const { fetchData } = useFetch();

  const { domain: searxngDomain } = useSearXNGStore((state) => ({
    domain: state.domain,
  }));

  const { enginesGeneral, selectedTab } = useSearchStore((state) => ({
    enginesGeneral: state.enginesGeneral,
    selectedTab: state.selectedTab,
  }));

  // ----------------------------------------------------------------------------
  // General search results - default
  // ----------------------------------------------------------------------------

  const fetcher = (_key: string, { arg }: { arg: IQueryArgs }) => {
    const { q, tab, page } = arg;

    const engineBangs = getEngineBangs(enginesGeneral, selectedTab);

    return fetchData(
      `${searxngDomain}/search?q=${engineBangs}${q}&categories=${tab}&format=json&pageno=${page}`,
      {
        method: "POST",
      }
    );
  };

  return useSWRMutation("searxng-search", fetcher);
};

export default useSearXNGSWR;
