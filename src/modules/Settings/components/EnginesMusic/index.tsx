import { Divider, Flex, Paper, Space, Stack, Text } from "@mantine/core";
import { useTranslations } from "@store/global";
import { IMusicEngines, useSearchStore } from "@store/search";
import { IconMusic } from "@tabler/icons-react";
import React from "react";
import EngineComponent from "../EngineComponent";

const SettingsEnginesMusic = () => {
  const translate = useTranslations();

  const { enginesMusic, setEnginesMusic } = useSearchStore((state) => ({
    enginesMusic: state.enginesMusic,
    setEnginesMusic: state.setEnginesMusic,
  }));

  const handleChangeEngines = (e: IMusicEngines, next: boolean) => {
    let newEngines = [];

    if (next) {
      newEngines = [...enginesMusic, e];
    } else {
      newEngines = enginesMusic.filter((eng) => eng !== e);
    }

    setEnginesMusic(newEngines);
  };

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconMusic size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.titleMusic")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg" gap={6}>
        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleMusic2")}
            </Text>
          }
          labelPosition="left"
          mb="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesMusic.find((e) => e === "genius")}
          iconAlt="Genius logo"
          iconSrc="/assets/genius-icon.svg"
          label="pages.settings.engines.engineGeniusMusic"
          onChange={(next) => handleChangeEngines("genius", next)}
        />

        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleMusic3")}
            </Text>
          }
          labelPosition="left"
          my="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesMusic.find((e) => e === "radiobrowser")}
          iconAlt="Radio Browser logo"
          iconSrc=""
          label="pages.settings.engines.engineRBMusic"
          onChange={(next) => handleChangeEngines("radiobrowser", next)}
        />

        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleWithout")}
            </Text>
          }
          labelPosition="left"
          my="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesMusic.find((e) => e === "bandcamp")}
          iconAlt="Bandcamp logo"
          iconSrc="/assets/bandcamp-icon.svg"
          label="pages.settings.engines.engineBandcampMusic"
          onChange={(next) => handleChangeEngines("bandcamp", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesMusic.find((e) => e === "mixcloud")}
          iconAlt="Mixcloud logo"
          iconSrc="/assets/mixcloud-icon.svg"
          label="pages.settings.engines.engineMixcloudMusic"
          onChange={(next) => handleChangeEngines("mixcloud", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesMusic.find((e) => e === "pipedmusic")}
          iconAlt="Piped logo"
          iconSrc="/assets/piped-icon.svg"
          label="pages.settings.engines.enginePipedMusic"
          onChange={(next) => handleChangeEngines("pipedmusic", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesMusic.find((e) => e === "soundcloud")}
          iconAlt="Soundcloud logo"
          iconSrc="/assets/soundcloud-icon.svg"
          label="pages.settings.engines.engineSCMusic"
          onChange={(next) => handleChangeEngines("soundcloud", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesMusic.find((e) => e === "youtube")}
          iconAlt="YouTube logo"
          iconSrc="/assets/youtube-icon.svg"
          label="pages.settings.engines.engineYTMusic"
          onChange={(next) => handleChangeEngines("youtube", next)}
        />

        <Divider my="sm" w="100%" />
      </Stack>

      <Space h="xl" />
    </Paper>
  );
};

export default SettingsEnginesMusic;
