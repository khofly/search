import {
  Divider,
  Flex,
  Paper,
  Space,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useTranslations } from "@store/global";
import { IITEngines, useSearchStore } from "@store/search";
import { IconCpu } from "@tabler/icons-react";
import React from "react";
import EngineComponent from "../EngineComponent";

const SettingsEnginesIT = () => {
  const translate = useTranslations();

  const { enginesIT, setEnginesIT } = useSearchStore((state) => ({
    enginesIT: state.enginesIT,
    setEnginesIT: state.setEnginesIT,
  }));

  const { colorScheme } = useMantineColorScheme();

  const handleChangeEngines = (e: IITEngines, next: boolean) => {
    let newEngines = [];

    if (next) {
      newEngines = [...enginesIT, e];
    } else {
      newEngines = enginesIT.filter((eng) => eng !== e);
    }

    setEnginesIT(newEngines);
  };

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconCpu size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.titleIT")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg" gap={6}>
        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleIT5")}
            </Text>
          }
          labelPosition="left"
          mb="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "dockerhub")}
          iconAlt="Docker logo"
          iconSrc="/assets/docker-icon.svg"
          label="pages.settings.engines.engineDockerHubIT"
          onChange={(next) => handleChangeEngines("dockerhub", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "npm")}
          iconAlt="NPM logo"
          iconSrc="/assets/npm-icon.svg"
          label="pages.settings.engines.engineNPMIT"
          onChange={(next) => handleChangeEngines("npm", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "pypi")}
          iconAlt="PyPI logo"
          iconSrc="/assets/pypi-icon.svg"
          label="pages.settings.engines.enginePypiIT"
          onChange={(next) => handleChangeEngines("pypi", next)}
        />

        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleIT2")}
            </Text>
          }
          labelPosition="left"
          my="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "askubuntu")}
          iconAlt="Ask Ubuntu logo"
          iconSrc="/assets/askubuntu-icon.svg"
          label="pages.settings.engines.engineAUIT"
          onChange={(next) => handleChangeEngines("askubuntu", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "stackoverflow")}
          iconAlt="StackOverflow logo"
          iconSrc="/assets/stackoverflow-icon.svg"
          label="pages.settings.engines.engineSOIT"
          onChange={(next) => handleChangeEngines("stackoverflow", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "superuser")}
          iconAlt="Superuser logo"
          iconSrc="/assets/superuser-icon.svg"
          label="pages.settings.engines.engineSUIT"
          onChange={(next) => handleChangeEngines("superuser", next)}
        />

        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleIT3")}
            </Text>
          }
          labelPosition="left"
          my="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "codeberg")}
          iconAlt="Codeberg logo"
          iconSrc="/assets/codeberg-icon.svg"
          label="pages.settings.engines.engineCodebergIT"
          onChange={(next) => handleChangeEngines("codeberg", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "github")}
          iconAlt="GitHub logo"
          iconSrc={
            colorScheme === "dark"
              ? "/assets/gh-light-icon.svg"
              : "/assets/gh-dark-icon.svg"
          }
          label="pages.settings.engines.engineGHIT"
          onChange={(next) => handleChangeEngines("github", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "gitlab")}
          iconAlt="GitLab logo"
          iconSrc="/assets/gitlab-icon.svg"
          label="pages.settings.engines.engineGLIT"
          onChange={(next) => handleChangeEngines("gitlab", next)}
        />

        <Divider
          label={
            <Text fw={500} c="teal">
              {translate("pages.settings.engines.titleIT4")}
            </Text>
          }
          labelPosition="left"
          my="sm"
          w="100%"
        />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "archwiki")}
          iconAlt="Arch Linux logo"
          iconSrc="/assets/arch-icon.svg"
          label="pages.settings.engines.engineArchIT"
          onChange={(next) => handleChangeEngines("archwiki", next)}
        />

        <Divider my="sm" w="100%" />

        <EngineComponent
          checked={!!enginesIT.find((e) => e === "gentoo")}
          iconAlt="Gentoo logo"
          iconSrc="/assets/gentoo-icon.svg"
          label="pages.settings.engines.engineGentooIT"
          onChange={(next) => handleChangeEngines("gentoo", next)}
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
          checked={!!enginesIT.find((e) => e === "mdn")}
          iconAlt="MDN logo"
          iconSrc="/assets/mdn-icon.svg"
          label="pages.settings.engines.engineMDNIT"
          onChange={(next) => handleChangeEngines("mdn", next)}
        />

        <Divider my="sm" w="100%" />
      </Stack>

      <Space h="xl" />
    </Paper>
  );
};

export default SettingsEnginesIT;
