import { Tabs, Text } from "@mantine/core";
import {
  IconNews,
  IconPhoto,
  IconPlayerPlay,
  IconSearch,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import React from "react";
import SettingsEnginesSearch from "../EnginesSearch";
import SettingsEnginesImages from "../EnginesImages";
import SettingsEnginesVideos from "../EnginesVideos";
import SettingsEnginesNews from "../EnginesNews";

const EnginesTabs = () => {
  return (
    <>
      <Text my="lg">Currently used search engines</Text>

      <Tabs variant="default" defaultValue="general">
        <Tabs.List mb="lg">
          <Tabs.Tab
            value="general"
            leftSection={<IconSearch style={getIconStyle(20)} />}
          >
            General
          </Tabs.Tab>
          <Tabs.Tab
            value="images"
            leftSection={<IconPhoto style={getIconStyle(20)} />}
          >
            Images
          </Tabs.Tab>
          <Tabs.Tab
            value="videos"
            leftSection={<IconPlayerPlay style={getIconStyle(20)} />}
          >
            Videos
          </Tabs.Tab>
          <Tabs.Tab
            value="news"
            leftSection={<IconNews style={getIconStyle(20)} />}
          >
            News
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="general">
          <SettingsEnginesSearch />
        </Tabs.Panel>

        <Tabs.Panel value="images">
          <SettingsEnginesImages />
        </Tabs.Panel>

        <Tabs.Panel value="videos">
          <SettingsEnginesVideos />
        </Tabs.Panel>

        <Tabs.Panel value="news">
          <SettingsEnginesNews />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default EnginesTabs;
