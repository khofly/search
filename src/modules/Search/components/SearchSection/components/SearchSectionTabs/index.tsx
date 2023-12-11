import { ActionIcon, Flex, Tabs } from "@mantine/core";
import React from "react";
import classes from "./styles.module.scss";
import {
  IconAdjustmentsHorizontal,
  IconMapPin,
  IconNews,
  IconPhoto,
  IconPlayerPlay,
  IconSearch,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import { ISearchTabs, useSearchStore } from "@store/search";
import { useRouter, useSearchParams } from "next/navigation";

const SearchSectionTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { isSearchOptionsOpen, setIsSearchOptionsOpen } = useSearchStore(
    (state) => ({
      setIsSearchOptionsOpen: state.setIsSearchOptionsOpen,
      isSearchOptionsOpen: state.isSearchOptionsOpen,
    })
  );

  const iconSize = 16;

  const handleChangeTab = (tab: ISearchTabs) => {
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
