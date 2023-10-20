import React from "react";
import SettingsSearXNGDomain from "./components/SettingsSearXNGDomain";
import { Container } from "@mantine/core";
import classes from "./styles.module.scss";

const PageSettings = () => {
  return (
    <Container className={classes.settings_page} size="lg" py={80}>
      <SettingsSearXNGDomain />
    </Container>
  );
};

export default PageSettings;
