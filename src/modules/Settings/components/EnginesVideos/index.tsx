import {
  Divider,
  Flex,
  Image,
  Paper,
  Space,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { useTranslations } from "@store/global";
import { IVideosEngines, useSearchStore } from "@store/search";
import { IconPlayerPlay } from "@tabler/icons-react";
import React from "react";
import EngineComponent from "../EngineComponent";

const SettingsEnginesVideos = () => {
  const translate = useTranslations();

  const { enginesVideos, setEnginesVideos } = useSearchStore((state) => ({
    enginesVideos: state.enginesVideos,
    setEnginesVideos: state.setEnginesVideos,
  }));

  const handleChangeEngines = (e: IVideosEngines, next: boolean) => {
    let newEngines = [];

    if (next) {
      newEngines = [...enginesVideos, e];
    } else {
      newEngines = enginesVideos.filter((eng) => eng !== e);
    }

    setEnginesVideos(newEngines);
  };

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconPlayerPlay size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.titleVid")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg" gap={6}>
        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleVid1")}
            </Text>
          }
          labelPosition="left"
          mb="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesVideos.find((e) => e === "bing")}
          iconAlt="Bing logo"
          iconSrc="/assets/bing-icon.svg"
          label="pages.settings.engines.engineBingVid"
          onChange={(next) => handleChangeEngines("bing", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesVideos.find((e) => e === "brave")}
          iconAlt="Brave logo"
          iconSrc="/assets/brave-icon.svg"
          label="pages.settings.engines.engineBraveVid"
          onChange={(next) => handleChangeEngines("brave", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesVideos.find((e) => e === "duckduckgo")}
          iconAlt="DuckDuckGo logo"
          iconSrc="/assets/ddg-icon.svg"
          label="pages.settings.engines.engineDDGVid"
          onChange={(next) => handleChangeEngines("duckduckgo", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesVideos.find((e) => e === "google")}
          iconAlt="Google logo"
          iconSrc="/assets/google-icon.svg"
          label="pages.settings.engines.engineGoogleVid"
          onChange={(next) => handleChangeEngines("google", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesVideos.find((e) => e === "qwant")}
          iconAlt="Qwant logo"
          iconSrc="/assets/qwant-icon.svg"
          label="pages.settings.engines.engineQwantVid"
          onChange={(next) => handleChangeEngines("qwant", next)}
        />

        <Divider my="sm" w="100%" />
      </Stack>

      <Space h="xl" />
    </Paper>
  );
};

export default SettingsEnginesVideos;
