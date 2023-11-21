import {
  Divider,
  Flex,
  Image,
  Paper,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { useTranslations } from "@store/global";
import { IVideosEngines, useSearchStore } from "@store/search";
import { IconPlayerPlay } from "@tabler/icons-react";
import React from "react";

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
    <Paper radius="md" mt={60} withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconPlayerPlay size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.titleVid")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg" mb="xl">
        <Flex
          w="100%"
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
        >
          <Flex align="center" gap="sm">
            <Image
              src={"/assets/google-icon.svg"}
              w={20}
              h={20}
              alt="Google logo"
            />

            <Text size="md" fw={400}>
              {translate("pages.settings.engines.engineGoogleVid")}
            </Text>
          </Flex>

          <Switch
            checked={!!enginesVideos.find((e) => e === "google")}
            onChange={(e) =>
              handleChangeEngines("google", e.currentTarget.checked)
            }
          />
        </Flex>

        <Divider my="sm" w="100%" />

        <Flex
          w="100%"
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
        >
          <Flex align="center" gap="sm">
            <Image
              src={"/assets/ddg-icon.svg"}
              w={22}
              h={22}
              alt="DuckDuckGo logo"
            />

            <Text size="md" fw={400}>
              {translate("pages.settings.engines.engineDDGVid")}
            </Text>
          </Flex>

          <Switch
            checked={!!enginesVideos.find((e) => e === "duckduckgo")}
            onChange={(e) =>
              handleChangeEngines("duckduckgo", e.currentTarget.checked)
            }
          />
        </Flex>

        <Divider my="sm" w="100%" />

        <Flex
          w="100%"
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
        >
          <Flex align="center" gap="sm">
            <Image
              src={"/assets/qwant-icon.svg"}
              w={20}
              h={20}
              alt="Qwant logo"
            />

            <Text size="md" fw={400}>
              {translate("pages.settings.engines.engineQwantVid")}
            </Text>
          </Flex>

          <Switch
            checked={!!enginesVideos.find((e) => e === "qwant")}
            onChange={(e) =>
              handleChangeEngines("qwant", e.currentTarget.checked)
            }
          />
        </Flex>
      </Stack>
    </Paper>
  );
};

export default SettingsEnginesVideos;
