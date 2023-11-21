import { Button, Flex, SimpleGrid, Text } from "@mantine/core";
import { ISearXNGResultsVideos } from "@ts/searxng.types";
import React, { useEffect, useState } from "react";
import useSearXNGSWR from "src/api/searxng/use-searxng-query";
import VideoCell from "./components/VideoCell";
import VideoSkeleton from "./components/VideoSkeleton";
import VideoView from "./components/VideoView";
import { useDisclosure } from "@mantine/hooks";

const TabVideos = () => {
  const { data, error, isLoading, isValidating, setSize, size, mutate } =
    useSearXNGSWR<ISearXNGResultsVideos>();

  const [isOpenVideoView, { open: openVideoView, close: closeVideoView }] =
    useDisclosure(false);
  const [viewVideo, setViewVideo] = useState<
    ISearXNGResultsVideos["results"][0] | null
  >(null);

  const openVideoInView = (img: ISearXNGResultsVideos["results"][0]) => {
    setViewVideo(img);
    openVideoView();
  };

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
            <VideoCell
              key={i}
              videoData={img}
              openVideoInView={openVideoInView}
            />
          ));
        })}
        {(isLoading || isValidating) &&
          // Loading state
          Array.from(Array(30).keys()).map((e, i) => <VideoSkeleton key={i} />)}
      </SimpleGrid>
      {!isLoading && data && data?.length >= 1 && (
        <Button
          variant="filled"
          onClick={() => {
            setSize(size + 1);
          }}
          size="md"
          color="dark.5"
        >
          Load more
        </Button>
      )}

      <VideoView
        isOpen={isOpenVideoView}
        handleClose={closeVideoView}
        viewVideo={viewVideo}
      />
    </>
  );
};

export default TabVideos;
