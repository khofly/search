import useSWR from "swr";
import useFetch from "../use-fetch";
import { INominatimResults } from "@ts/nominatim.tyles";

const NOMINATIM_URL = "https://nominatim.openstreetmap.org";
const MAPSCO_URL = "https://geocode.maps.co";

const useNominatimSWR = (q: string) => {
  const { fetchData } = useFetch();

  // const searchParams = useSearchParams();
  // const q = (searchParams.get("q") as string) || "";

  const fetcher = (key: string) => {
    return fetchData(key);
  };

  return useSWR<INominatimResults[]>(`${MAPSCO_URL}/search?q=${q}`, fetcher, {
    revalidateOnMount: true,
    revalidateOnFocus: false,
  });
};

export default useNominatimSWR;
