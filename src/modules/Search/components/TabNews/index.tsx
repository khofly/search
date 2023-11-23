import { Button, Divider, Flex, Stack, Text } from "@mantine/core";
import WikiWIP from "@module/Wiki/components/wip";
import { ISearXNGResultsNews } from "@ts/searxng.types";
import React, { useEffect } from "react";
import useSearXNGSWR from "src/api/searxng/use-searxng-query";

import classes from "./styles.module.scss";
import NewsRow from "./components/NewsRow";
import SearchResultSkeleton from "../TabGeneral/components/SearchResultSkeleton";
import ScrollToTop from "../ScrollToTop";

const TabNews = () => {
  const { data, error, isLoading, isValidating, size, setSize, mutate } =
    useSearXNGSWR<ISearXNGResultsNews>();

  useEffect(() => {
    // Don't fetch if previous data already exists to not spam the instance
    if (!data?.length) mutate();
  }, []);

  const isRateLimit = data?.includes("Too Many Requests" as any);

  return (
    <Flex align="flex-start">
      {/* Search results */}

      <Stack className={classes.stack} py="xl">
        {data?.map((res, i) => {
          if (!res?.results) return;
          return (
            <Stack gap="lg" key={i}>
              {i !== 0 && (
                <Divider label={`Page ${i + 1}`} labelPosition="left" />
              )}

              {res?.results.map((r, i) => (
                <NewsRow key={i} {...r} />
              ))}
            </Stack>
          );
        })}

        {(isLoading || isValidating) &&
          // Loading state
          Array.from(Array(10).keys()).map((e, i) => (
            <SearchResultSkeleton key={i} />
          ))}

        {error && (
          // Error state
          <Text>RIP results</Text>
        )}

        {isRateLimit && (
          // Rate limit
          <Text>Too Many Requests</Text>
        )}

        {!isLoading &&
          !isValidating &&
          data &&
          data?.length >= 1 &&
          !isRateLimit && (
            <Button
              variant="filled"
              onClick={() => setSize(size + 1)}
              size="md"
              color="dark.5"
            >
              Load more
            </Button>
          )}

        <ScrollToTop />
      </Stack>
    </Flex>
  );
};

export default TabNews;
