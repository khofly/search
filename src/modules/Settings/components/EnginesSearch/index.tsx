import { Divider, Flex, Paper, Stack, Text } from "@mantine/core";
import { useTranslations } from "@store/global";
import { IGeneralEngines, useSearchStore } from "@store/search";
import { IconWorld } from "@tabler/icons-react";
import React from "react";
import EngineComponent from "../EngineComponent";

const SettingsEnginesSearch = () => {
  const translate = useTranslations();

  const { enginesGeneral, setEnginesGeneral } = useSearchStore((state) => ({
    enginesGeneral: state.enginesGeneral,
    setEnginesGeneral: state.setEnginesGeneral,
  }));

  const handleChangeEngines = (e: IGeneralEngines, next: boolean) => {
    let newEngines = [];

    if (next) {
      newEngines = [...enginesGeneral, e];
    } else {
      newEngines = enginesGeneral.filter((eng) => eng !== e);
    }

    setEnginesGeneral(newEngines);
  };

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconWorld size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.title1")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg">
        <EngineComponent
          checked={!!enginesGeneral.find((e) => e === "google")}
          iconAlt="Google logo"
          iconSrc="/assets/google-icon.svg"
          label="pages.settings.engines.engineGoogle"
          onChange={(next) => handleChangeEngines("google", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesGeneral.find((e) => e === "duckduckgo")}
          iconAlt="DuckDuckGo logo"
          iconSrc="/assets/ddg-icon.svg"
          label="pages.settings.engines.engineDDG"
          onChange={(next) => handleChangeEngines("duckduckgo", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesGeneral.find((e) => e === "bing")}
          iconAlt="Bing logo"
          iconSrc="/assets/bing-icon.svg"
          label="pages.settings.engines.engineBing"
          onChange={(next) => handleChangeEngines("bing", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesGeneral.find((e) => e === "brave")}
          iconAlt="Brave logo"
          iconSrc="/assets/brave-icon.svg"
          label="pages.settings.engines.engineBrave"
          onChange={(next) => handleChangeEngines("brave", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesGeneral.find((e) => e === "qwant")}
          iconAlt="Qwant logo"
          iconSrc="/assets/qwant-icon.svg"
          label="pages.settings.engines.engineQwant"
          onChange={(next) => handleChangeEngines("qwant", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesGeneral.find((e) => e === "yahoo")}
          iconAlt="Yahoo logo"
          iconSrc="/assets/yahoo-icon.svg"
          label="pages.settings.engines.engineYahoo"
          onChange={(next) => handleChangeEngines("yahoo", next)}
        />
      </Stack>

      <Text fz={26} fw={600} p="lg" my="md">
        {translate("pages.settings.engines.title2")}
      </Text>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg" mb="xl">
        <EngineComponent
          checked={!!enginesGeneral.find((e) => e === "wikipedia")}
          iconAlt="Wikipedia logo"
          iconSrc="/assets/wikipedia-icon.svg"
          label="pages.settings.engines.engineWikipedia"
          onChange={(next) => handleChangeEngines("wikipedia", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesGeneral.find((e) => e === "wikidata")}
          iconAlt="Wikidata logo"
          iconSrc="/assets/wikidata-icon.svg"
          label="pages.settings.engines.engineWikidata"
          onChange={(next) => handleChangeEngines("wikidata", next)}
        />
      </Stack>
    </Paper>
  );
};

export default SettingsEnginesSearch;
