import { Divider, Flex, Paper, Stack, Text, Tooltip } from "@mantine/core";

import LanguageSelect from "./LanguageSelect/LanguageSelect";
import ThemeSelect from "./ThemeSelect/ThemeSelect";
import ColorSchemeSwitch from "./ColorThemeSwitch/ColorThemeSwitch";

import { IconInfoCircle, IconSettings } from "@tabler/icons-react";
import { useTranslations } from "@store/global";
import FaviconSwitch from "./FaviconSwitch";
import { getIconStyle } from "@utils/functions/iconStyle";

const SettingsGeneral = () => {
  const translate = useTranslations();

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconSettings size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.general.title")}
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
          <Text size="md" fw={400}>
            {translate("pages.settings.general.selectLang")}
          </Text>

          <LanguageSelect />
        </Flex>

        <Divider my="sm" w="100%" />

        <Flex
          w="100%"
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
        >
          <Text size="md" fw={400}>
            {translate("pages.settings.general.selectTheme")}
          </Text>
          <ThemeSelect />
        </Flex>

        <Divider my="sm" w="100%" />

        <Flex
          w="100%"
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
        >
          <Text size="md" fw={400}>
            {translate("pages.settings.general.selectColor")}
          </Text>
          <ColorSchemeSwitch />
        </Flex>

        <Divider my="sm" w="100%" />

        <Flex
          w="100%"
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
        >
          <Flex align="center" gap="sm">
            <Text size="md" fw={400}>
              {translate("pages.settings.general.toggleFavicon")}
            </Text>

            <Tooltip label="This will ping DuckDuckGo's favicon service, a lot">
              <IconInfoCircle style={getIconStyle(20)} />
            </Tooltip>
          </Flex>

          <FaviconSwitch />
        </Flex>
      </Stack>
    </Paper>
  );
};

export default SettingsGeneral;
