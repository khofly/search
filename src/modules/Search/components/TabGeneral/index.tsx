import React, { useEffect, useState } from "react";
import InstantAnswer from "../InstantAnswer";
import SearchResultRow from "./components/SearchResultRow";
import { Button, Divider, Stack, Text } from "@mantine/core";

import classes from "./styles.module.scss";
import ScrollToTop from "../ScrollToTop";
import useSearXNGSWR from "src/api/searxng/use-searxng-query";
import { ISearXNGResultsGeneral } from "@ts/searxng.types";
import SearchResultSkeleton from "./components/SearchResultSkeleton";
import { useSearchParams } from "next/navigation";
import { useNonInitialEffect } from "@hooks/use-non-initial-effect";

const TabGeneral = () => {
  const searchParams = useSearchParams();

  const { data, error, reset, trigger } = useSearXNGSWR();

  // const [isLoading, setLoading] = useState(false);
  // const [shouldFetch, setShouldFetch] = useState(false);
  // const [page, setPage] = useState(1);
  // const [results, setResults] = useState<ISearXNGResultsGeneral[]>([]);

  const [state, setState] = useState({
    results: [] as ISearXNGResultsGeneral[],
    page: 1,
    isLoading: false,
    shouldFetch: true,
  });

  const fetchResults = async () => {
    setState({ ...state, isLoading: true });

    const resData: ISearXNGResultsGeneral = await trigger({
      q: searchParams.get("q") || "",
      tab: "general",
      page: state.page,
    });

    setState({
      ...state,
      isLoading: false,
      results: [...state.results, resData],
      shouldFetch: false,
    });
  };

  // Trigger fetch results
  useEffect(() => {
    if (!state.shouldFetch) return;

    fetchResults();
  }, [state.shouldFetch]);

  useNonInitialEffect(() => {
    reset();
    setState({
      ...state,
      page: 1,
      isLoading: true,
      results: [],
      shouldFetch: true,
    });
  }, [searchParams.get("q")]);

  return (
    <Stack className={classes.stack} py="xl">
      <InstantAnswer />

      {state.results?.map((res, i) => {
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

      {state.isLoading &&
        // Loading state
        Array.from(Array(10).keys()).map((e, i) => (
          <SearchResultSkeleton key={i} />
        ))}

      {error && (
        // Error state
        <Text>Oopsies daisies</Text>
      )}

      {!state.isLoading && (
        <Button
          variant="default"
          onClick={() => {
            setState({ ...state, page: state.page + 1, shouldFetch: true });
          }}
        >
          Load more
        </Button>
      )}

      <ScrollToTop />
    </Stack>
  );
};

export default TabGeneral;
