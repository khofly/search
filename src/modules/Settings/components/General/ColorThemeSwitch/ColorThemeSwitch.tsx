import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
  useMantineTheme,
} from "@mantine/core";
import { useTranslations } from "@store/global";

import { IconSun, IconMoon } from "@tabler/icons-react";

const ColorSchemeSwitch = () => {
  const translate = useTranslations();
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Group align="center">
      <SegmentedControl
        value={colorScheme}
        onChange={(value) => setColorScheme(value as "light" | "dark")}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <IconSun size={20} color={theme.colors.yellow[6]} />
                <Box ml={10}>
                  {translate("pages.settings.general.selectColorOptions.light")}
                </Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <IconMoon size={20} color={theme.colors.gray[4]} />
                <Box ml={10}>
                  {translate("pages.settings.general.selectColorOptions.dark")}
                </Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
};

export default ColorSchemeSwitch;
