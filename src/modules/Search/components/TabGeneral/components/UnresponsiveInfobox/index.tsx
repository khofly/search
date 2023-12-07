import { Paper } from "@mantine/core";
import React from "react";
import classes from "./styles.module.scss";

const UnresponsiveInfobox = () => {
  return (
    <Paper
      className={classes.search_infobox}
      mt="xl"
      ml={60}
      mr={60}
      withBorder
      radius="md"
    >
      Unresponsive
    </Paper>
  );
};

export default UnresponsiveInfobox;
