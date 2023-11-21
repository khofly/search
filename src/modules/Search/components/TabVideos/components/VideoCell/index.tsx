import { Flex, Image, Text } from "@mantine/core";
import { ISearXNGResultsVideos } from "@ts/searxng.types";
import React from "react";
import classes from "./styles.module.scss";

interface Props {
  openVideoInView: (img: ISearXNGResultsVideos["results"][0]) => void;
  videoData: ISearXNGResultsVideos["results"][0];
}

const VideoCell: React.FC<Props> = ({ openVideoInView, videoData }) => {
  const { parsed_url, title, thumbnail } = videoData;

  return (
    <Flex
      className={classes.video_container}
      direction="column"
      onClick={() => openVideoInView(videoData)}
      p="xs"
      //   href={url}
      //   target={"_blank"}
      //   rel="noreferrer noopener"
    >
      <Image
        src={thumbnail}
        w="100%"
        h="auto"
        alt={title}
        fit="contain"
        radius="md"
        // unoptimized
      />

      <Text component="span" size="sm" c="white" lineClamp={2} mt={4}>
        {title}
      </Text>

      <Text size="xs" lineClamp={1} mt="xs">
        {parsed_url[0]}://{parsed_url[1]}
      </Text>
    </Flex>
  );
};

export default VideoCell;
