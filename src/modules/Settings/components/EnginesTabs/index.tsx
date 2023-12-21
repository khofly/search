import { Tabs, Text } from "@mantine/core";
import {
  IconCpu,
  IconFiles,
  IconMusic,
  IconNews,
  IconPhoto,
  IconPlayerPlay,
  IconSchool,
  IconSearch,
  IconUsers,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import React from "react";
import SettingsEnginesSearch from "../EnginesSearch";
import SettingsEnginesImages from "../EnginesImages";
import SettingsEnginesVideos from "../EnginesVideos";
import SettingsEnginesNews from "../EnginesNews";
import classes from "../../styles.module.scss";
import SettingsEnginesMusic from "../EnginesMusic";
import SettingsEnginesIT from "../EnginesIT";
import SettingsEnginesScience from "../EnginesScience";
import SettingsEnginesFiles from "../EnginesFiles";
import SettingsEnginesSocialMedia from "../EnginesSocialMedia";

const EnginesTabs = () => {
  return (
    <>
      <Text my="lg">Currently used search engines</Text>

      <Tabs variant="default" defaultValue="general" keepMounted={false}>
        <Tabs.List mb="lg" className={classes.tabs_scroll}>
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
          <Tabs.Tab
            value="music"
            leftSection={<IconMusic style={getIconStyle(20)} />}
          >
            Music
          </Tabs.Tab>
          <Tabs.Tab
            value="it"
            leftSection={<IconCpu style={getIconStyle(20)} />}
          >
            IT
          </Tabs.Tab>
          <Tabs.Tab
            value="science"
            leftSection={<IconSchool style={getIconStyle(20)} />}
          >
            Science
          </Tabs.Tab>
          <Tabs.Tab
            value="files"
            leftSection={<IconFiles style={getIconStyle(20)} />}
          >
            Files
          </Tabs.Tab>
          <Tabs.Tab
            value="social-media"
            leftSection={<IconUsers style={getIconStyle(20)} />}
          >
            Social Media
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

        <Tabs.Panel value="music">
          <SettingsEnginesMusic />
        </Tabs.Panel>

        <Tabs.Panel value="it">
          <SettingsEnginesIT />
        </Tabs.Panel>

        <Tabs.Panel value="science">
          <SettingsEnginesScience />
        </Tabs.Panel>

        <Tabs.Panel value="files">
          <SettingsEnginesFiles />
        </Tabs.Panel>

        <Tabs.Panel value="social-media">
          <SettingsEnginesSocialMedia />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default EnginesTabs;
