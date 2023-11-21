import React, { useEffect } from "react";
import InstantAnswer from "../InstantAnswer";
import SearchResultRow from "./components/SearchResultRow";
import { Button, Divider, Stack, Text } from "@mantine/core";

import classes from "./styles.module.scss";
import ScrollToTop from "../ScrollToTop";
import useSearXNGSWR from "src/api/searxng/use-searxng-query";
import { ISearXNGResultsGeneral } from "@ts/searxng.types";
import SearchResultSkeleton from "./components/SearchResultSkeleton";
import Suggestions from "./components/Suggestions";
import { useNonInitialEffect } from "@hooks/use-non-initial-effect";
import { useSearchParams } from "next/navigation";

const TabGeneral = () => {
  const searchParams = useSearchParams();

  const { data, error, isLoading, isValidating, setSize, size, mutate } =
    useSearXNGSWR<ISearXNGResultsGeneral>();

  useEffect(() => {
    // Don't fetch if previous data already exists to not spam the instance
    if (!data?.length) mutate();
  }, []);

  const q = searchParams.get("q");
  useNonInitialEffect(() => {
    if (!q) return;

    setSize(1);
    mutate();
  }, [q]);

  return (
    <Stack className={classes.stack} py="xl">
      <InstantAnswer />

      {data?.map((res, i) => {
        if (!res) return;
        return (
          <Stack gap="lg" key={i}>
            {i !== 0 && (
              <Divider label={`Page ${i + 1}`} labelPosition="left" />
            )}

            {res?.results.map((r, i) => (
              <SearchResultRow key={i} {...r} />
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

      {data?.[0]?.suggestions.length && !isLoading && !isValidating ? (
        <Suggestions suggestions={data?.[0]?.suggestions} />
      ) : null}

      {!isLoading && !isValidating && data && data?.length >= 1 && (
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

      <ScrollToTop />
    </Stack>
  );
};

export default TabGeneral;
