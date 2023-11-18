import { Anchor, Flex, Image, Text } from "@mantine/core";
import React from "react";
import classes from "./styles.module.scss";
import { ISearXNGResultsGeneral } from "@ts/searxng.types";
import { useGlobalStore } from "@store/global";

const SearchResultRow: React.FC<ISearXNGResultsGeneral["results"][0]> = ({
  title,
  url,
  parsed_url,
  content,
}) => {
  const { displayFavicon } = useGlobalStore((state) => ({
    displayFavicon: state.displayFavicon,
  }));

  return (
    <Anchor href={url} target="_self">
      <Flex className={classes.search_row} direction="column">
        {/* Website url */}
        <Flex align="center" gap="xs">
          {displayFavicon && (
            <Image
              w={16}
              h={16}
              // src="https://icon.horse/icon/youtube.com"
              src={`https://icons.duckduckgo.com/ip3/${parsed_url[1]}.ico`}
              alt=""
            />
          )}

          <Text size="sm">{url}</Text>
        </Flex>

        {/* Website title */}
        <Text className={classes.text_title} size="xl" c="white" mb={4}>
          {title}
        </Text>

        {/* Website description */}
        <Text size="sm" c="dimmed">
          {content}
        </Text>
      </Flex>
    </Anchor>
  );
};

export default SearchResultRow;
