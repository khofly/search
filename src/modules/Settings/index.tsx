"use client";

import React from "react";
import SettingsSearXNG from "./components/SearXNG";
import { Container, Tabs } from "@mantine/core";
import classes from "./styles.module.scss";
import {
  IconBrush,
  IconEngine,
  IconLink,
  IconRadar,
  IconSearch,
  IconSettings2,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import SettingsGeneral from "./components/General";
import SettingsTheme from "./components/Theme";
import SettingsInterface from "./components/Interface";
import EnginesTabs from "./components/EnginesTabs";
import SettingsCategories from "./components/Categories";
import { useGlobalStore } from "@store/global";

const PageSettings = () => {
  const { appTheme } = useGlobalStore((state) => ({
    appTheme: state.appTheme,
  }));

  return (
    <Container className={classes.settings_page} size="lg" py={80}>
      <Tabs variant="default" defaultValue="interface" keepMounted={false}>
        <Tabs.List mb="lg" className={classes.tabs_scroll}>
          <Tabs.Tab
            value="interface"
            leftSection={<IconBrush style={getIconStyle(20)} />}
          >
            Interface
          </Tabs.Tab>
          <Tabs.Tab
            value="general"
            leftSection={<IconSettings2 style={getIconStyle(20)} />}
          >
            General
          </Tabs.Tab>
          <Tabs.Tab
            value="instance"
            leftSection={<IconLink style={getIconStyle(20)} />}
          >
            Instance
          </Tabs.Tab>
          <Tabs.Tab
            value="engines"
            leftSection={<IconRadar style={getIconStyle(20)} />}
          >
            Engines
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="interface">
          <>
            <SettingsInterface />
            {appTheme === "Custom" && <SettingsTheme />}
          </>
        </Tabs.Panel>

        <Tabs.Panel value="general">
          <>
            <SettingsCategories />
            <SettingsGeneral />
          </>
        </Tabs.Panel>

        <Tabs.Panel value="instance">
          <>
            <SettingsSearXNG />
          </>
        </Tabs.Panel>

        <Tabs.Panel value="engines">
          <EnginesTabs />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default PageSettings;
