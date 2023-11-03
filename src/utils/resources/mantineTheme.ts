import { MantineThemeOverride } from '@mantine/core';
import { IAppTheme } from '@ts/global.types';
import { THEME_CATPPUCCIN_MOCHA } from './themes/catppuccin-mocha';
import { THEME_MANTINE } from './themes/mantine';
import { THEME_ROSE_PINE } from './themes/rose-pine';
// import { THEME_MATERIAL } from './themes/material';

export const getMantineTheme = (
  appTheme: IAppTheme
  // colorScheme: MantineColorScheme
): MantineThemeOverride => {
  switch (appTheme) {
    case 'Mantine':
      return THEME_MANTINE;

    case 'Catppuccin-Mocha':
      return THEME_CATPPUCCIN_MOCHA;

    case 'Rose-Pine':
      return THEME_ROSE_PINE;

    case 'Custom': {
      const customTheme = localStorage.getItem('custom_app_theme');

      return customTheme ? JSON.parse(customTheme) : THEME_MANTINE;
    }

    default:
      return THEME_MANTINE;
  }
};
