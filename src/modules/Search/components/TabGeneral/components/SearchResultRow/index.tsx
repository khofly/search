"use client";

import { Anchor, Box, Flex, Image, Text } from "@mantine/core";
import React from "react";
import classes from "./styles.module.scss";
import { ISearXNGResultsGeneral } from "@ts/searxng.types";
import { useGlobalStore } from "@store/global";
import { useSearchStore } from "@store/search";
import clsx from "clsx";
import { IconChevronRight } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";

const SearchResultRow: React.FC<ISearXNGResultsGeneral["results"][0]> = ({
  title,
  url,
  parsed_url,
  content,
}) => {
  const { displayFavicon } = useSearchStore((state) => ({
    displayFavicon: state.displayFavicon,
  }));

  const { visitedLinks, updateVisitedLinks } = useSearchStore((state) => ({
    visitedLinks: state.visitedLinks,
    updateVisitedLinks: state.updateVisitedLinks,
  }));

  return (
    <Anchor
      href={url}
      target="_self"
      onClick={() => updateVisitedLinks(url)}
      rel="noreferrer noopener"
    >
      <Flex className={classes.search_row} direction="column">
        {/* Website url */}
        <Flex align="center" gap="xs">
          {displayFavicon && (
            <Image
              w={16}
              h={16}
              src={`https://icons.duckduckgo.com/ip3/${parsed_url[1]}.ico`}
              alt=""
            />
          )}

          <Flex align="center" gap={2}>
            <Text size="xs">
              {parsed_url[0]}://{parsed_url[1]}
            </Text>
            {
              parsed_url[2].split("/").map(
                (str, i) =>
                  str.length !== 0 && (
                    <>
                      <Text size="xs">{str}</Text>
                      {parsed_url[2].split("/").length !== i + 1 && (
                        <IconChevronRight style={getIconStyle(12)} />
                      )}
                    </>
                  )
              )
              // parsed_url[2].map((str) => (str))
            }
          </Flex>
        </Flex>

        {/* Website title */}
        <Text
          className={clsx(classes.text_title, {
            [classes.text_title_visited]: visitedLinks.includes(url),
          })}
          size="xl"
          mb={4}
          truncate="end"
        >
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
