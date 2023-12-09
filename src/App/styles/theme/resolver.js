import { opacity } from 'App/styles/common';
import { dark, light } from 'App/styles/theme/colors';

const properties = [
  '--app-background-',
  '--subtle-background-',
  '--ui-element-background-',
  '--hovered-ui-element-background-',
  '--selected-ui-element-background-',
  '--subtle-border-and-separator-',
  '--ui-element-border-and-focus-',
  '--hovered-ui-element-border-',
  '--solid-background-',
  '--hovered-solid-background-',
  '--low-contrast-text-',
  '--high-contrast-text-',
];

// prettier-ignore
const cssVariablesOverrides = (colors) => {
  const result = {};
  for (let colorName in colors) {
    result['--mantine-color-text'] = 'var(--high-contrast-text-sage)';
    result['--mantine-color-body'] = 'var(--app-background-sage)';
    result['--mantine-color-error'] = 'var(--solid-background-red)';
    result['--mantine-color-placeholder'] = 'var(--hovered-ui-element-border-sage)';
    result['--mantine-color-anchor'] = 'var(--vespa-color-anchor)';
    result['--mantine-color-dimmed'] = 'var(--solid-background-gray)';
    result[`--mantine-color-${colorName}-filled`] = `var(--solid-background-${colorName})`;
    result[`--mantine-color-${colorName}-filled-hover`] = `var(--hovered-solid-background-${colorName})`;
    result[`--mantine-color-${colorName}-light`] = `var(--ui-element-background-${colorName})`;
    result[`--mantine-color-${colorName}-light-hover`] = `var(--hovered-ui-element-background-${colorName})`;
    result[`--mantine-color-${colorName}-light-color`] = `var(--solid-background-${colorName})`;
    result[`--mantine-color-${colorName}-outline`] = `var(--solid-background-${colorName})`;
    result[`--mantine-color-${colorName}-outline-hover`] = `var(--subtle-background-${colorName})`;
  }
  return result;
};

const cssVariablesResolver = (color) => {
  const result = {};
  Object.keys(color).forEach((key) => {
    color[key].forEach((value, index) => {
      result[properties[index] + key] = value;
    });
  });
  return result;
};

const cssVariablesDefaults = (color) => {
  const result = {};
  properties.forEach((property) => {
    const trimmedProperty = property.slice(0, -1);
    result[trimmedProperty] = `var(${property}${color})`;
  });
  return result;
};

export const resolver = (theme) => ({
  variables: {
    '--common-opacity': opacity,
    '--search-result-width': '67vw',
    '--search-abstract-width': '33vw',
    '--search-scrollarea-height':
      'calc(100vh - var(--app-shell-header-height, 0px) - (2 * var(--mantine-spacing-md)))',
    // primary colors overrides
    '--mantine-primary-color-filled': `var(--solid-background-${theme.primaryColor})`,
    '--mantine-primary-color-filled-hover': `var(--hovered-solid-background-${theme.primaryColor})`,
    '--mantine-primary-color-light': `var(--ui-element-background-${theme.primaryColor})`,
    '--mantine-primary-color-light-hover': `var(--hovered-ui-element-background-${theme.primaryColor})`,
    '--mantine-primary-color-light-color': `var(--low-contrast-text-${theme.primaryColor})`,
    // brand colors
    '--vespa-color-rock': '#2E2F27',
    '--vespa-color-heather': '#61D790',
  },
  light: {
    ...cssVariablesResolver(light),
    ...cssVariablesOverrides(light),
    ...cssVariablesDefaults('sage'),
    '--vespa-color-anchor': '#0246C9',
    '--header-links': 'var(--mantine-color-black)',
  },
  dark: {
    ...cssVariablesResolver(dark),
    ...cssVariablesOverrides(dark),
    ...cssVariablesDefaults('sage'),
    '--vespa-color-anchor': '#5E93FB',
    '--header-links': 'var(--vespa-color-heather)',
  },
});
