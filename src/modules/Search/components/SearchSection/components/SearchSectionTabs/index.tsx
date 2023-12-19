import { ActionIcon, Flex, Tabs } from "@mantine/core";
import React from "react";
import classes from "./styles.module.scss";
import {
  IconAdjustmentsHorizontal,
  IconCpu,
  IconMapPin,
  IconMusic,
  IconNews,
  IconPhoto,
  IconPlayerPlay,
  IconSearch,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import { useSearchStore } from "@store/search";
import { useRouter, useSearchParams } from "next/navigation";
import { ICategories, useGeneralStore } from "@store/general";

const SearchSectionTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { isSearchOptionsOpen, setIsSearchOptionsOpen, categories } =
    useGeneralStore((state) => ({
      setIsSearchOptionsOpen: state.setIsSearchOptionsOpen,
      isSearchOptionsOpen: state.isSearchOptionsOpen,
      categories: state.categories,
    }));

  const iconSize = 16;

  const handleChangeTab = (tab: ICategories) => {
    const query = searchParams.get("q") || "";

    router.push(`/search?q=${encodeURIComponent(query)}&tab=${tab}`);
  };

  return (
    <Flex align="center" justify="space-between">
      <Tabs
        classNames={{
          root: classes.tab_root,
          list: classes.tab_list,
        }}
        defaultValue="general"
        value={searchParams.get("tab") || "general"}
        onChange={(tab) => handleChangeTab(tab as ICategories)}
        variant="default"
        w="fit-content"
      >
        <Tabs.List className={classes.tabs_scroll}>
          {categories.includes("general") && (
            <Tabs.Tab
              value="general"
              leftSection={<IconSearch style={getIconStyle(iconSize)} />}
            >
              General
            </Tabs.Tab>
          )}
          {categories.includes("images") && (
            <Tabs.Tab
              value="images"
              leftSection={<IconPhoto style={getIconStyle(iconSize)} />}
            >
              Images
            </Tabs.Tab>
          )}
          {categories.includes("videos") && (
            <Tabs.Tab
              value="videos"
              leftSection={<IconPlayerPlay style={getIconStyle(iconSize)} />}
            >
              Videos
            </Tabs.Tab>
          )}
          {categories.includes("news") && (
            <Tabs.Tab
              value="news"
              leftSection={<IconNews style={getIconStyle(iconSize)} />}
            >
              News
            </Tabs.Tab>
          )}
          {categories.includes("maps") && (
            <Tabs.Tab
              value="maps"
              leftSection={<IconMapPin style={getIconStyle(iconSize)} />}
            >
              Maps
            </Tabs.Tab>
          )}
          {categories.includes("music") && (
            <Tabs.Tab
              value="maps"
              leftSection={<IconMusic style={getIconStyle(iconSize)} />}
            >
              Music
            </Tabs.Tab>
          )}

          {categories.includes("it") && (
            <Tabs.Tab
              value="maps"
              leftSection={<IconCpu style={getIconStyle(iconSize)} />}
            >
              IT
            </Tabs.Tab>
          )}
        </Tabs.List>
      </Tabs>

      <ActionIcon
        className={classes.search_options}
        size="md"
        variant="subtle"
        color="gray"
        onClick={() => setIsSearchOptionsOpen(!isSearchOptionsOpen)}
      >
        <IconAdjustmentsHorizontal style={getIconStyle(20)} stroke={1.5} />
      </ActionIcon>
    </Flex>
  );
};

export default SearchSectionTabs;
