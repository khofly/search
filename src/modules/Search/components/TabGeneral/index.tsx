import React, { useEffect } from "react";
import InstantAnswer from "../InstantAnswer";
import SearchResultRow from "./components/SearchResultRow";
import { Stack, Text } from "@mantine/core";

import classes from "./styles.module.scss";
import ScrollToTop from "../ScrollToTop";
import useSearXNGSWR from "src/api/searxng/use-searxng-query";
import { ISearXNGResultsGeneral } from "@ts/searxng.types";
import SearchResultSkeleton from "./components/SearchResultSkeleton";
import { useSearchParams } from "next/navigation";

const TabGeneral = () => {
  const searchParams = useSearchParams();

  const { data, isLoading, isValidating, error, mutate } =
    useSearXNGSWR<ISearXNGResultsGeneral>(
      searchParams.get("q") || "",
      "general"
    );

  // Trigger search when query changes
  useEffect(() => {
    mutate();
  }, [searchParams.get("q")]);

  return (
    <Stack className={classes.stack} py="xl">
      <InstantAnswer />

      {isLoading || isValidating ? (
        // Loading state
        Array.from(Array(10).keys()).map((e, i) => (
          <SearchResultSkeleton key={i} />
        ))
      ) : error ? (
        // Error state
        <Text>Oopsies daisies</Text>
      ) : (
        data?.results.map((r, i) => <SearchResultRow key={i} {...r} />)
      )}

      <ScrollToTop />
    </Stack>
  );
};

export default TabGeneral;
