"use client";

import {
  ActionIcon,
  Autocomplete,
  Flex,
  Group,
  Image,
  Tabs,
} from "@mantine/core";
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
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import { ISearchTabs, useSearchStore } from "src/store/search";
import Link from "next/link";
import useAutocompleteSWR from "src/api/autocomplete/use-autocomplete-query";
import { useDebouncedValue } from "@mantine/hooks";

const SearchSection = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();

  const { selectedTab, setSelectedTab, useAutocomplete } = useSearchStore(
    (state) => ({
      selectedTab: state.selectedTab,
      setSelectedTab: state.setSelectedTab,
      useAutocomplete: state.useAutocomplete,
    })
  );

  const [q, setQ] = useState(searchParams.get("q") || "");
  const [debouncedQ] = useDebouncedValue(q, 400);

  // Autocomplete API
  const { data, trigger, reset } = useAutocompleteSWR();

  const iconSize = 16;

  const handleSearch = (query: string) => {
    // Prevent empty search
    if (!query.length) return;

    router.push(`/search?q=${query}`);
  };

  const handleChangeTab = (tab: ISearchTabs) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const query = searchParams.get("q");

    if (query) setQ(query);
  }, [searchParams]);

  useEffect(() => {
    if (!useAutocomplete || !debouncedQ) return;

    trigger(debouncedQ);
  }, [debouncedQ]);

  return (
    <Group
      className={classes.search_section}
      align="flex-start"
      h="100%"
      gap="md"
    >
      <Link className={classes.app_logo} href="/">
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
      </Link>

      <Flex
        className={classes.flex}
        direction="column"
        justify="space-between"
        h="100%"
      >
        <Autocomplete
          className={classes.search_bar}
          placeholder={t("pages.search.search_placeholder")}
          radius="md"
          size="md"
          autoFocus={true}
          value={q}
          onChange={(val) => {
            setQ(val);
            if (!val.length) reset();
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") handleSearch(q);
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
                onClick={() => handleSearch(q)}
              >
                <IconSearch
                  style={getIconStyle(22)}
                  stroke={1.5}
                  color="white"
                />
              </ActionIcon>
            </>
          }
          // Autocomplete props
          data={data?.map((str) => ({ label: str, value: str }))}
          comboboxProps={{
            onOptionSubmit: (val) => handleSearch(val),
          }}
        />
        <Tabs
          classNames={{
            root: classes.tab_root,
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
