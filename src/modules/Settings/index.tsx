"use client";

import React from "react";
import SettingsSearXNG from "./components/SearXNG";
import { Container, Tabs } from "@mantine/core";
import classes from "./styles.module.scss";
import { IconLink, IconSearch, IconSettings } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import SettingsGeneral from "./components/General";
import SettingsTheme from "./components/Theme";

const PageSettings = () => {
  return (
    <Container className={classes.settings_page} size="lg" py={80}>
      <Tabs variant="default" defaultValue="general">
        <Tabs.List mb="lg">
          <Tabs.Tab
            value="general"
            leftSection={<IconSettings style={getIconStyle(20)} />}
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
            leftSection={<IconSearch style={getIconStyle(20)} />}
          >
            Engines
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="general">
          <>
            <SettingsGeneral />
            <SettingsTheme />
          </>
        </Tabs.Panel>

        <Tabs.Panel value="instance">
          <>
            <SettingsSearXNG />
          </>
        </Tabs.Panel>

        <Tabs.Panel value="engines">
          <>
            <SettingsSearXNG />
          </>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default PageSettings;
