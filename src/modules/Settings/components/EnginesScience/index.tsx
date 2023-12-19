import { Divider, Flex, Paper, Space, Stack, Text } from "@mantine/core";
import { useTranslations } from "@store/global";
import { IScienceEngines, useSearchStore } from "@store/search";
import { IconSchool } from "@tabler/icons-react";
import React from "react";
import EngineComponent from "../EngineComponent";

const SettingsEnginesScience = () => {
  const translate = useTranslations();

  const { enginesScience, setEnginesScience } = useSearchStore((state) => ({
    enginesScience: state.enginesScience,
    setEnginesScience: state.setEnginesScience,
  }));

  const handleChangeEngines = (e: IScienceEngines, next: boolean) => {
    let newEngines = [];

    if (next) {
      newEngines = [...enginesScience, e];
    } else {
      newEngines = enginesScience.filter((eng) => eng !== e);
    }

    setEnginesScience(newEngines);
  };

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconSchool size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.titleScience")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg" gap={6}>
        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleScience2")}
            </Text>
          }
          labelPosition="left"
          mb="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "arxiv")}
          iconAlt="Arxiv logo"
          iconSrc="/assets/arxiv-icon.svg"
          label="pages.settings.engines.engineArxivScience"
          onChange={(next) => handleChangeEngines("arxiv", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "crossref")}
          iconAlt="Crossref logo"
          iconSrc="/assets/crossref-icon.svg"
          label="pages.settings.engines.engineCrossrefScience"
          onChange={(next) => handleChangeEngines("crossref", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "googlescholar")}
          iconAlt="Google Scholar logo"
          iconSrc="/assets/google-scholar-icon.svg"
          label="pages.settings.engines.engineGoogleScholarScience"
          onChange={(next) => handleChangeEngines("googlescholar", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "archive")}
          iconAlt="Internet Archive Scholar logo"
          iconSrc=""
          label="pages.settings.engines.engineIASScience"
          onChange={(next) => handleChangeEngines("archive", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "pubmed")}
          iconAlt="PubMed logo"
          iconSrc="/assets/pubmed-icon.svg"
          label="pages.settings.engines.enginePubMedScience"
          onChange={(next) => handleChangeEngines("pubmed", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "semanticscholar")}
          iconAlt="Semantic Scholar logo"
          iconSrc=""
          label="pages.settings.engines.engineSemanticScholarScience"
          onChange={(next) => handleChangeEngines("semanticscholar", next)}
        />

        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleScience3")}
            </Text>
          }
          labelPosition="left"
          my="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "wikispecies")}
          iconAlt="Wikispecies logo"
          iconSrc="/assets/wikispecies-icon.svg"
          label="pages.settings.engines.engineWikispeciesScience"
          onChange={(next) => handleChangeEngines("wikispecies", next)}
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
          checked={!!enginesScience.find((e) => e === "openairedatasets")}
          iconAlt="OpenAIRE logo"
          iconSrc=""
          label="pages.settings.engines.engineOADatasetsScience"
          onChange={(next) => handleChangeEngines("openairedatasets", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "openairepublications")}
          iconAlt="OpenAIRE logo"
          iconSrc=""
          label="pages.settings.engines.engineOAPublicationsScience"
          onChange={(next) => handleChangeEngines("openairepublications", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesScience.find((e) => e === "pdbe")}
          iconAlt="PDBe logo"
          iconSrc="/assets/pdbe-icon.svg"
          label="pages.settings.engines.enginePDBeScience"
          onChange={(next) => handleChangeEngines("pdbe", next)}
        />

        <Divider my="sm" w="100%" />
      </Stack>

      <Space h="xl" />
    </Paper>
  );
};

export default SettingsEnginesScience;
