import React from "react";
import InstantAnswer from "../InstantAnswer";
import SearchResultRow from "./components/SearchResultRow";
import { Stack } from "@mantine/core";

import classes from "./styles.module.scss";
import ScrollToTop from "../ScrollToTop";

const TabSearchResults = () => {
  return (
    <Stack className={classes.stack} py="xl">
      <InstantAnswer />

      <SearchResultRow />

      <SearchResultRow />

      <SearchResultRow />

      <SearchResultRow />

      <SearchResultRow />

      <SearchResultRow />

      <SearchResultRow />

      <ScrollToTop />
    </Stack>
  );
};

export default TabSearchResults;
