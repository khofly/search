import { Divider, Flex, Paper, Stack, Text } from "@mantine/core";

import LanguageSelect from "./LanguageSelect/LanguageSelect";
import ThemeSelect from "./ThemeSelect/ThemeSelect";
import ColorSchemeSwitch from "./ColorThemeSwitch/ColorThemeSwitch";

import { IconBrush, IconSettings } from "@tabler/icons-react";
import { useTranslations } from "@store/global";

import classes from "./styles.module.scss";

const SettingsInterface = () => {
  const translate = useTranslations();

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconBrush size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.interface.title")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Stack w="100%" align="start" px="lg" mb="xl">
        <Flex w="100%" className={classes.flex_row} justify="space-between">
          <Text size="md" fw={400}>
            {translate("pages.settings.interface.selectLang")}
          </Text>

          <LanguageSelect />
        </Flex>

        <Divider my="sm" w="100%" />

        <Flex w="100%" className={classes.flex_row} justify="space-between">
          <Text size="md" fw={400}>
            {translate("pages.settings.interface.selectTheme")}
          </Text>
          <ThemeSelect />
        </Flex>

        <Divider my="sm" w="100%" />

        <Flex w="100%" className={classes.flex_row} justify="space-between">
          <Text size="md" fw={400}>
            {translate("pages.settings.interface.selectColor")}
          </Text>
          <ColorSchemeSwitch />
        </Flex>
      </Stack>
    </Paper>
  );
};

export default SettingsInterface;
