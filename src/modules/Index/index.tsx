"use client";

import { Center, Container, Flex, Title } from "@mantine/core";
import React from "react";
import SearchBar from "./components/SearchBar";

import classes from "./styles.module.scss";
import { useTranslations } from "src/store/global";

const PageIndex = () => {
  const t = useTranslations();

  return (
    <Container className={classes.index_page} size="lg" py={80}>
      <Center className={classes.center}>
        <Flex
          className={classes.flex}
          align="center"
          direction="column"
          pb={150}
        >
          <Title size="5.5rem" mb="xl">
            {t("_common.app_name")}
          </Title>

          <SearchBar />
        </Flex>
      </Center>
    </Container>
  );
};

export default PageIndex;
