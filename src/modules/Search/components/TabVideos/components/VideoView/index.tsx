import { Drawer, Text } from "@mantine/core";

import { ISearXNGResultsVideos } from "@ts/searxng.types";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  viewVideo: ISearXNGResultsVideos["results"][0] | null;
}

const VideoView: React.FC<Props> = ({ isOpen, handleClose, viewVideo }) => {
  return (
    <Drawer
      opened={isOpen}
      onClose={handleClose}
      title="View image"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      position="right"
      size="lg"
      closeButtonProps={{
        size: "xl",
      }}
    >
      <Text mt="xl" size="lg" c="white">
        {viewVideo?.title}
      </Text>

      <Text size="md">
        {viewVideo?.parsed_url[0]}://{viewVideo?.parsed_url[1]}
      </Text>

      <iframe src={viewVideo?.iframe_src} />
    </Drawer>
  );
};

export default VideoView;
