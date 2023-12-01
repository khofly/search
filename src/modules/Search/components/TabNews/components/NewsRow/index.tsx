"use client";

import { Anchor, Flex, Image, Text } from "@mantine/core";
import React from "react";
import classes from "./styles.module.scss";
import { ISearXNGResultsNews } from "@ts/searxng.types";
import { useSearchStore } from "@store/search";
import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  IconCalendar,
  IconCalendarMonth,
  IconClock,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import { IconCalendarSad } from "@tabler/icons-react";
import { IconCalendarFilled } from "@tabler/icons-react";

dayjs.extend(relativeTime);

const NewsRow: React.FC<ISearXNGResultsNews["results"][0]> = ({
  title,
  url,
  parsed_url,
  content,
  engines,
  publishedDate,
}) => {
  const { displayFavicon } = useSearchStore((state) => ({
    displayFavicon: state.displayFavicon,
  }));

  const { visitedLinks, updateVisitedLinks, openInNewTab } = useSearchStore(
    (state) => ({
      visitedLinks: state.visitedLinks,
      updateVisitedLinks: state.updateVisitedLinks,
      openInNewTab: state.openInNewTab,
    })
  );

  return (
    <Anchor
      href={url}
      target={openInNewTab ? "_blank" : "_self"}
      onClick={() => updateVisitedLinks(url)}
      rel="noreferrer noopener"
    >
      <Flex className={classes.news_row} direction="column">
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

          <Text size="xs" truncate="end">
            {parsed_url[0]}://{parsed_url[1]}
            {parsed_url[2]}
          </Text>
        </Flex>

        {/* Website title */}
        <Text
          className={clsx(classes.text_title, {
            [classes.text_title_visited]: visitedLinks.includes(url),
          })}
          mb={4}
          truncate="end"
        >
          {title}
        </Text>

        {/* Date */}
        <Flex align="center" mb={4}>
          <IconClock style={getIconStyle(18)} />

          <Text size="sm" ml={6}>
            {dayjs(publishedDate).fromNow()}
          </Text>
        </Flex>

        {/* Website description */}
        <Text size="sm" c="dimmed">
          {content}
        </Text>

        <Text size="xs" c="dimmed" ta="right">
          {engines.join(", ")}
        </Text>
      </Flex>
    </Anchor>
  );
};

export default NewsRow;
