import useFetch from "../use-fetch";
import { INominatimResults } from "@ts/nominatim.tyles";
import useSWRMutation from "swr/mutation";

const NOMINATIM_URL = "https://nominatim.openstreetmap.org";
const MAPSCO_URL = "https://geocode.maps.co";

const useNominatimSWR = () => {
  const { fetchData } = useFetch();

  // const searchParams = useSearchParams();
  // const q = (searchParams.get("q") as string) || "";

  const fetcher = (key: string, { arg }: { arg: string }) => {
    return fetchData(`${key}/search?q=${arg}`);
  };

  return useSWRMutation<INominatimResults[], any, any, string>(
    `${MAPSCO_URL}`,
    fetcher,
    {}
  );
};

export default useNominatimSWR;
