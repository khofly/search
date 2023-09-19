import React from "react";
import InstantAnswer from "../InstantAnswer";
import SearchResultRow from "./components/SearchResultRow";
import { Stack } from "@mantine/core";

import classes from "./styles.module.scss";

const TabSearchResults = () => {
  return (
    <Stack className={classes.stack} w={650}>
      <InstantAnswer />

      <SearchResultRow />
    </Stack>
  );
};

export default TabSearchResults;
