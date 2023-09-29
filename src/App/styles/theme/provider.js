import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { common, resolver, variantColorResolver } from 'App/styles/theme';
import { icons } from 'App/styles/icons';
import * as components from 'App/styles/theme/default';

const theme = createTheme({
  ...common,
  components,
  variantColorResolver,
});

export function ThemeProvider({ children }) {
  icons.forEach((icon) => library.add(icon));
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider
        defaultColorScheme="auto"
        cssVariablesResolver={resolver}
        theme={theme}
      >
        {children}
      </MantineProvider>
    </>
  );
}
