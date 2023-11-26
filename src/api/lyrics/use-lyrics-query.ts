import useFetch from "../use-fetch";
import useSWRMutation from "swr/mutation";

const useLyricsSWR = () => {
  const { fetchData } = useFetch();

  // const searchParams = useSearchParams();
  // const q = (searchParams.get("q") as string) || "";

  const fetcher = (key: string, { arg }: { arg: string }) => {
    return fetchData(`${key}?q=${encodeURIComponent(arg)}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GENIUS_ACCESS_TOKEN}`,
      },
    });
  };

  return useSWRMutation<
    { lyrics: string; title: string; artist: string; image: string },
    any,
    any,
    string
  >(`/api/lyrics`, fetcher, {});
};

export default useLyricsSWR;
