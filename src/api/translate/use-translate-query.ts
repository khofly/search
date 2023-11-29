import useFetch from "../use-fetch";
import { INominatimResults } from "@ts/nominatim.tyles";
import useSWRMutation from "swr/mutation";

interface Args {
  data: string;
  from: string;
  to: string;
}

const LT_URL = "https://api-b2b.backenster.com/b1/api/v3";

const useTranslateSWR = () => {
  const { fetchData } = useFetch();

  // const searchParams = useSearchParams();
  // const q = (searchParams.get("q") as string) || "";

  const fetcher = (key: string, { arg }: { arg: Args }) => {
    const { data, from, to } = arg;
    return fetchData(`${key}/translate`, {
      method: "POST",
      body: JSON.stringify({
        data,
        from,
        to,
        translateMode: "text",
        platform: "api",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_LINGVANEX_API_KEY}`,
      },
    });
  };

  return useSWRMutation<{ result: string; err: string }, any, any, Args>(
    `${LT_URL}`,
    fetcher,
    {}
  );
};

export default useTranslateSWR;
