import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Global, MantineProvider } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { common } from 'App/styles/theme/common.js';
import { icons } from 'App/styles/icons';
import { Colors, useTheme } from 'App/styles/theme';
import * as components from 'App/styles/theme/default';
import { styles } from 'App/styles/theme/global';
import {
  mantineColors as darkMantineColors,
  radixColors as darkRadixColors,
} from 'App/styles/theme/colors/dark';
import {
  mantineColors as lightMantineColors,
  radixColors as lightRadixColors,
} from 'App/styles/theme/colors/light';

const stylesResolver = (theme) => {
  if (!theme.cr)
    theme.cr = new Colors(
      theme,
      theme.colorScheme === 'dark' ? darkRadixColors : lightRadixColors
    );
  return styles(theme);
};

export const themeResolver = (colorScheme) => {
  const colors =
    colorScheme === 'dark' ? darkMantineColors : lightMantineColors;
  return { ...common, components, colorScheme, colors };
};

export function ThemeProvider({ children }) {
  const { colorScheme, setColorScheme } = useTheme();
  const toggleColorScheme = () =>
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', toggleColorScheme]]);

  icons.forEach((icon) => library.add(icon));

  return (
    <MantineProvider theme={themeResolver(colorScheme)}>
      <Global styles={(theme) => stylesResolver(theme)} />
      {children}
    </MantineProvider>
  );
}
