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
import { IGeneralEngines, useSearchStore } from "@store/search";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

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
        <IconSearch size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.title")}
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
              {translate("pages.settings.engines.engineGoogle")}
            </Text>
          </Flex>

          <Switch
            checked={!!enginesGeneral.find((e) => e === "google")}
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
              w={20}
              h={20}
              alt="DuckDuckGo logo"
            />

            <Text size="md" fw={400}>
              {translate("pages.settings.engines.engineDDG")}
            </Text>
          </Flex>

          <Switch
            checked={!!enginesGeneral.find((e) => e === "duckduckgo")}
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
              src={"/assets/bing-icon.svg"}
              w={20}
              h={20}
              alt="Bing logo"
            />

            <Text size="md" fw={400}>
              {translate("pages.settings.engines.engineBing")}
            </Text>
          </Flex>

          <Switch
            checked={!!enginesGeneral.find((e) => e === "bing")}
            onChange={(e) =>
              handleChangeEngines("bing", e.currentTarget.checked)
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
              src={"/assets/brave-icon.svg"}
              w={20}
              h={20}
              alt="Brave logo"
              fit="scale-down"
            />

            <Text size="md" fw={400}>
              {translate("pages.settings.engines.engineBrave")}
            </Text>
          </Flex>

          <Switch
            checked={!!enginesGeneral.find((e) => e === "brave")}
            onChange={(e) =>
              handleChangeEngines("brave", e.currentTarget.checked)
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
              {translate("pages.settings.engines.engineQwant")}
            </Text>
          </Flex>

          <Switch
            checked={!!enginesGeneral.find((e) => e === "qwant")}
            onChange={(e) =>
              handleChangeEngines("qwant", e.currentTarget.checked)
            }
          />
        </Flex>
      </Stack>
    </Paper>
  );
};

export default SettingsEnginesSearch;
