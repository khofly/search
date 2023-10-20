"use client";

import { ActionIcon, Flex, Group, Tabs, TextInput, rem } from "@mantine/core";
import React, { useEffect, useState } from "react";

import classes from "./styles.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "src/store/global";
import {
  IconMapPin,
  IconNews,
  IconPhoto,
  IconPlayerPlay,
  IconSearch,
  IconTriangleFilled,
  IconWind,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import { ISearchTabs, useSearchStore } from "src/store/search";
import Link from "next/link";

const SearchSection = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();

  const { selectedTab, setSelectedTab } = useSearchStore();

  const [q, setQ] = useState("");

  const iconSize = 16;

  const handleSearch = () => {
    // Prevent empty search
    if (!q.length) return;

    router.push(`/search?q=${q}`);
  };

  const handleChangeTab = (tab: ISearchTabs) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const query = searchParams.get("q");

    if (query) setQ(query);
  }, [searchParams]);

  return (
    <Group align="flex-start" h="100%" gap="md">
      <Link href="/">
        <IconTriangleFilled style={getIconStyle(42)} />
      </Link>

      <Flex
        className={classes.flex}
        w={rem(650)}
        direction="column"
        justify="space-between"
        h="100%"
      >
        <TextInput
          className={classes.search_bar}
          placeholder={t("pages.search.search_placeholder")}
          radius="md"
          size="md"
          autoFocus={true}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") handleSearch();
          }}
          // leftSection={<IconSearch style={getIconStyle(20)} stroke={1.5} />}
          rightSection={
            <>
              <ActionIcon
                size="lg"
                mr={6}
                radius="sm"
                // color={"blue"}
                variant="transparent"
                onClick={handleSearch}
              >
                <IconSearch
                  style={getIconStyle(22)}
                  stroke={1.5}
                  color="white"
                />
              </ActionIcon>
            </>
          }
        />
        <Tabs
          classNames={{
            list: classes.tab_list,
          }}
          defaultValue="general"
          value={selectedTab}
          onChange={(tab) => handleChangeTab(tab as ISearchTabs)}
          variant="default"
          w="fit-content"
        >
          <Tabs.List>
            <Tabs.Tab
              value="general"
              leftSection={<IconSearch style={getIconStyle(iconSize)} />}
            >
              General
            </Tabs.Tab>
            <Tabs.Tab
              value="images"
              leftSection={<IconPhoto style={getIconStyle(iconSize)} />}
            >
              Images
            </Tabs.Tab>
            <Tabs.Tab
              value="videos"
              leftSection={<IconPlayerPlay style={getIconStyle(iconSize)} />}
            >
              Videos
            </Tabs.Tab>
            <Tabs.Tab
              value="news"
              leftSection={<IconNews style={getIconStyle(iconSize)} />}
            >
              News
            </Tabs.Tab>
            <Tabs.Tab
              value="maps"
              leftSection={<IconMapPin style={getIconStyle(iconSize)} />}
            >
              Maps
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Flex>
    </Group>
  );
};

export default SearchSection;
