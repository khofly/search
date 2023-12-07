import {
  Anchor,
  Button,
  Collapse,
  DEFAULT_THEME,
  Flex,
  Group,
  JsonInput,
  Paper,
  Text,
} from "@mantine/core";

import { IconMinus, IconPalette, IconPlus } from "@tabler/icons-react";
import { useGlobalStore, useTranslations } from "@store/global";

import classes from "../../styles.module.scss";

import { useEffect, useState } from "react";
import { getIconStyle } from "@utils/functions/iconStyle";

const SettingsTheme = () => {
  const translate = useTranslations();

  const { setAppTheme } = useGlobalStore((state) => ({
    setAppTheme: state.setAppTheme,
  }));

  const [themeJson, setThemeJson] = useState("");
  const [visible, setVisible] = useState(false);

  const handleApply = () => {
    localStorage.setItem("custom_app_theme", themeJson);
    setAppTheme("Custom");
  };

  useEffect(() => {
    const customTheme = localStorage.getItem("custom_app_theme");
    if (customTheme) setThemeJson(customTheme);
  }, []);

  return (
    <Paper className={classes.hide_mobile} radius="md" mt={60} withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconPalette size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.theme.title")}
        </Text>
      </Flex>

      {/* Settings content */}
      <Group w="100%" px="lg" mb="xl">
        <Flex w="100%" align="center">
          <Button
            leftSection={<IconPlus style={getIconStyle(16)} />}
            onClick={() => setThemeJson(JSON.stringify(DEFAULT_THEME, null, 4))}
            size="xs"
            variant="light"
            mr="md"
          >
            Default theme
          </Button>

          <Button
            leftSection={<IconMinus style={getIconStyle(16)} />}
            onClick={() => setThemeJson("")}
            size="xs"
            variant="light"
            mr="md"
          >
            Clear
          </Button>

          <Anchor
            href="https://mantine.dev/theming/theme-object/"
            target="_blank"
          >
            Learn more
          </Anchor>

          <div style={{ flexGrow: 1 }}></div>

          <Button
            leftSection={<IconMinus style={getIconStyle(16)} />}
            onClick={() => setVisible(!visible)}
            size="xs"
            variant="light"
          >
            Toggle JSON input
          </Button>
        </Flex>

        <Collapse w="100%" in={visible}>
          <JsonInput
            w="100%"
            serialize={(val) => {
              return JSON.stringify(val, null, 4);
            }}
            spellCheck="false"
            placeholder="Textarea will autosize to fit the content"
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={4}
            value={themeJson}
            onChange={setThemeJson}
          />
        </Collapse>
      </Group>

      <Flex
        align="center"
        justify="space-between"
        p="lg"
        className={classes.settings_footer}
      >
        <Text c="dimmed">{translate("pages.settings.theme.description")}</Text>

        <Button onClick={handleApply}>
          {translate("pages.settings.theme.button")}
        </Button>
      </Flex>
    </Paper>
  );
};

export default SettingsTheme;
