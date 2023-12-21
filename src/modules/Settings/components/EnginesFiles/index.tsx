import { Divider, Flex, Paper, Space, Stack, Text } from "@mantine/core";
import { useTranslations } from "@store/global";
import { IFilesEngines, useSearchStore } from "@store/search";
import { IconFiles } from "@tabler/icons-react";
import React from "react";
import EngineComponent from "../EngineComponent";

const SettingsEnginesFiles = () => {
  const translate = useTranslations();

  const { enginesFiles, setEnginesFiles } = useSearchStore((state) => ({
    enginesFiles: state.enginesFiles,
    setEnginesFiles: state.setEnginesFiles,
  }));

  const handleChangeEngines = (e: IFilesEngines, next: boolean) => {
    let newEngines = [];

    if (next) {
      newEngines = [...enginesFiles, e];
    } else {
      newEngines = enginesFiles.filter((eng) => eng !== e);
    }

    setEnginesFiles(newEngines);
  };

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconFiles size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.titleFiles")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg" gap={6}>
        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleFiles2")}
            </Text>
          }
          labelPosition="left"
          mb="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesFiles.find((e) => e === "apkmirror")}
          iconAlt="APKMirror logo"
          iconSrc=""
          label="pages.settings.engines.engineAPKMirrorFiles"
          onChange={(next) => handleChangeEngines("apkmirror", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesFiles.find((e) => e === "fdroid")}
          iconAlt="Fdroid logo"
          iconSrc="/assets/fdroid-icon.svg"
          label="pages.settings.engines.engineFdriodFiles"
          onChange={(next) => handleChangeEngines("fdroid", next)}
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
          checked={!!enginesFiles.find((e) => e === "1337x")}
          iconAlt="1337x logo"
          iconSrc="/assets/1337x-icon.svg"
          label="pages.settings.engines.engine1337xFiles"
          onChange={(next) => handleChangeEngines("1337x", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesFiles.find((e) => e === "annas")}
          iconAlt="Anna's Archive logo"
          iconSrc=""
          label="pages.settings.engines.engineAnnasFiles"
          onChange={(next) => handleChangeEngines("annas", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesFiles.find((e) => e === "bt4g")}
          iconAlt="bt4g logo"
          iconSrc=""
          label="pages.settings.engines.engineBt4gFiles"
          onChange={(next) => handleChangeEngines("bt4g", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesFiles.find((e) => e === "nyaa")}
          iconAlt="nyaa logo"
          iconSrc=""
          label="pages.settings.engines.engineNyaaFiles"
          onChange={(next) => handleChangeEngines("nyaa", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesFiles.find((e) => e === "piratebay")}
          iconAlt="Pirate Bay logo"
          iconSrc="/assets/piratebay-icon.svg"
          label="pages.settings.engines.enginePiratebayFiles"
          onChange={(next) => handleChangeEngines("piratebay", next)}
        />

        <Divider my="sm" w="100%" />
      </Stack>

      <Space h="xl" />
    </Paper>
  );
};

export default SettingsEnginesFiles;
