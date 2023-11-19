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
import { IconPhoto, IconSearch } from "@tabler/icons-react";
import React from "react";

const SettingsEnginesImages = () => {
  const translate = useTranslations();

  return (
    <Paper radius="md" mt={60} withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconPhoto size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.engines.titleImg")}
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
              {translate("pages.settings.engines.engineGoogleImg")}
            </Text>
          </Flex>

          <Switch />
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
              {translate("pages.settings.engines.engineDDGImg")}
            </Text>
          </Flex>

          <Switch />
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
              {translate("pages.settings.engines.engineQwantImg")}
            </Text>
          </Flex>

          <Switch />
        </Flex>
      </Stack>
    </Paper>
  );
};

export default SettingsEnginesImages;
