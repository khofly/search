import { MantineThemeOverride } from "@mantine/core";
import { IAppTheme } from "@ts/global.types";
import { THEME_CATPPUCCIN_MOCHA } from "./themes/catppuccin-mocha";
import { THEME_MANTINE_OLD } from "./themes/mantine-old";
import { THEME_MANTINE_NEW } from "./themes/mantine-new";
import { THEME_ROSE_PINE } from "./themes/rose-pine";
// import { THEME_MATERIAL } from './themes/material';

export const getMantineTheme = (
  appTheme: IAppTheme
  // colorScheme: MantineColorScheme
): MantineThemeOverride => {
  switch (appTheme) {
    case "Mantine-Old":
      return THEME_MANTINE_OLD;

    case "Mantine-New":
      return THEME_MANTINE_NEW;

    case "Catppuccin-Mocha":
      return THEME_CATPPUCCIN_MOCHA;

    case "Rose-Pine":
      return THEME_ROSE_PINE;

    case "Custom": {
      const customTheme = localStorage.getItem("custom_app_theme");

      return customTheme ? JSON.parse(customTheme) : THEME_MANTINE_OLD;
    }

    default:
      return THEME_MANTINE_OLD;
  }
};
