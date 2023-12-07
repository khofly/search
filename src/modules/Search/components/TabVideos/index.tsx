import { Button, Center, SimpleGrid, Text } from "@mantine/core";
import { ISearXNGResultsVideos } from "@ts/searxng.types";
import React, { useEffect } from "react";
import useSearXNGSWR from "src/api/searxng/use-searxng-query";
import VideoCell from "./components/VideoCell";
import VideoSkeleton from "./components/VideoSkeleton";

const TabVideos = () => {
  const { data, error, isLoading, isValidating, setSize, size, mutate } =
    useSearXNGSWR<ISearXNGResultsVideos>();

  useEffect(() => {
    // Don't fetch if previous data already exists to not spam the instance
    if (!data?.length) mutate();
  }, []);

  return (
    <>
      {error && (
        // Error state
        <Text>RIP images</Text>
      )}
      <SimpleGrid
        cols={{ base: 2, sm: 3, md: 5, lg: 7 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        p="lg"
      >
        {data?.map((res) => {
          if (!res) return;
          return res?.results.map((img, i) => (
            <VideoCell key={i} videoData={img} />
          ));
        })}
        {(isLoading || isValidating) &&
          // Loading state
          Array.from(Array(30).keys()).map((e, i) => <VideoSkeleton key={i} />)}
      </SimpleGrid>

      {!isLoading && data && data?.length >= 1 && (
        <Center py="xl">
          <Button
            variant="filled"
            onClick={() => {
              setSize(size + 1);
            }}
            size="lg"
            color="dark.5"
          >
            Load more
          </Button>
        </Center>
      )}
    </>
  );
};

export default TabVideos;
