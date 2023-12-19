import { Anchor, Flex, Image, Text } from "@mantine/core";
import { ISearXNGResultsVideos } from "@ts/searxng.types";
import React from "react";
import classes from "./styles.module.scss";
import { useResponsive } from "@hooks/use-responsive";
import { useGeneralStore } from "@store/general";

interface Props {
  videoData: ISearXNGResultsVideos["results"][0];
}

const VideoCell: React.FC<Props> = ({ videoData }) => {
  const { parsed_url, title, thumbnail, url } = videoData;

  const { openInNewTab } = useGeneralStore((state) => ({
    openInNewTab: state.openInNewTab,
  }));

  const isXs = useResponsive("max", "xs");
  const anchorTarget: React.HTMLAttributeAnchorTarget = isXs
    ? "_blank"
    : openInNewTab
    ? "_blank"
    : "_self";

  return (
    <Anchor href={url} target={anchorTarget}>
      <Flex
        className={classes.video_container}
        direction="column"
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
          fit="cover"
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
    </Anchor>
  );
};

export default VideoCell;
