import { Divider, Flex, Paper, Stack, Text, Tooltip } from "@mantine/core";

import { IconInfoCircle, IconSettings } from "@tabler/icons-react";
import { useTranslations } from "@store/global";
import FaviconSwitch from "./FaviconSwitch";
import { getIconStyle } from "@utils/functions/iconStyle";
import AutocompleteSwitch from "./AutocompleteSwitch";
import NewTabSwitch from "./NewTabSwitch";
import classes from "./styles.module.scss";

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
        <Flex w="100%" className={classes.flex_row} justify="space-between">
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

        <Divider my="sm" w="100%" />

        <Flex w="100%" className={classes.flex_row} justify="space-between">
          <Text size="md" fw={400}>
            {translate("pages.settings.general.toggleAutocomplete")}
          </Text>

          <AutocompleteSwitch />
        </Flex>

        <Divider my="sm" w="100%" />

        <Flex w="100%" className={classes.flex_row} justify="space-between">
          <Text size="md" fw={400}>
            {translate("pages.settings.general.openInNewTabToggle")}
          </Text>

          <NewTabSwitch />
        </Flex>
      </Stack>
    </Paper>
  );
};

export default SettingsGeneral;
