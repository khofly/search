import { Flex, Skeleton } from "@mantine/core";

import classes from "./styles.module.scss";

const VideoSkeleton = () => {
  return (
    <Flex
      className={classes.image_container}
      direction="column"
      // w={getDynamicWidth()}
      px={6}
    >
      <Skeleton w={200} h={220} radius={8} />

      <Skeleton w={150} h={8} radius={2} mt={12} mb={18} />
      <Skeleton w={120} h={5} radius={2} />
    </Flex>
  );
};

export default VideoSkeleton;
