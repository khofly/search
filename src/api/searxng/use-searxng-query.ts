import useSWR from "swr";
import useFetch from "../use-fetch";
import { useSearXNGStore } from "@store/searxng";

// Restart SearXNG
// sudo systemctl reload nginx
// sudo service uwsgi restart searxng

const useSearXNGSWR = <ResultsInterface>(q: string, tab: string) => {
  const { fetchData } = useFetch();

  const { domain: searxngDomain } = useSearXNGStore((state) => ({
    domain: state.domain,
  }));

  // ----------------------------------------------------------------------------
  // General search results - default
  // ----------------------------------------------------------------------------

  const fetcher = async (_key: string) => {
    const res = await fetchData(
      `${searxngDomain}/search?q=${q}&categories=${tab}&format=json&engines=duckduckgo&enabled_engines=duckduckgo&disabled_engines=brave,google,qwant`
    );

    return res;
  };

  return useSWR<ResultsInterface>("searxng-results", fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
  });
};

export default useSearXNGSWR;
