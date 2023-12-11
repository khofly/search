"use client";

import { Flex, Group, Image } from "@mantine/core";
import React from "react";

import classes from "./styles.module.scss";
import { useSearchParams } from "next/navigation";

import { IconTriangleFilled } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";

import NextLink from "@components/NextLink";

import SearchSectionTabs from "./components/SearchSectionTabs";
import SearchSectionInput from "./components/SearchSectionInput";

const SearchSection = () => {
  const searchParams = useSearchParams();

  return (
    <Group
      className={classes.search_section}
      align="flex-start"
      h="100%"
      gap="md"
    >
      <NextLink className={classes.app_logo} href="/">
        {searchParams.get("q")?.includes("doge") ? (
          <Image
            w={42}
            h={42}
            src={"/assets/doge.svg"}
            alt="Doge image"
            fit="contain"
          />
        ) : (
          <IconTriangleFilled style={getIconStyle(42)} />
        )}
      </NextLink>

      <Flex
        className={classes.flex}
        direction="column"
        justify="space-between"
        h="100%"
      >
        {/* Search Input */}
        <SearchSectionInput />

        {/* Search Tabs */}
        <SearchSectionTabs />
      </Flex>
    </Group>
  );
};

export default SearchSection;
