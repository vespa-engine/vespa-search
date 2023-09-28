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
    result['--mantine-color-text'] = 'var(--high-contrast-text-gray)';
    result['--mantine-color-body'] = 'var(--app-background-gray)';
    result['--mantine-color-error'] = 'var(--solid-background-red)';
    result['--mantine-color-placeholder'] = 'var(--hovered-ui-element-border-gray)';
    result['--mantine-color-anchor'] = 'var(--solid-background-blue)';
    result['--mantine-color-default'] = 'var(--solid-background-gray)';
    result['--mantine-color-default-hover'] = 'var(--subtle-background-gray)';
    result['--mantine-color-default-color'] = 'var(--high-contrast-text-gray)';
    result['--mantine-color-default-border'] = 'var(--subtle-border-and-separator-gray)';
    result['--mantine-color-text'] = 'var(--high-contrast-text-gray)';
    result['--mantine-color-dimmed'] = 'var(--solid-background-gray)';
    result[`--mantine-color-${colorName}-filled`] = `var(--solid-background-${colorName})`;
    result[`--mantine-color-${colorName}-filled-hover`] = `var(--hovered-solid-background-${colorName})`;
    result[`--mantine-color-${colorName}-light`] = `var(--ui-element-background-${colorName})`;
    result[`--mantine-color-${colorName}-light-hover`] = `var(--hovered-ui-element-background-${colorName})`;
    result[`--mantine-color-${colorName}-light-color`] = `var(--low-contrast-text-${colorName})`;
    result[`--mantine-color-${colorName}-outline`] = `var(--solid-background-${colorName})`;
    result[`--mantine-color-${colorName}-outline-hover`] = `var(--hovered-solid-background-${colorName})`;
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
    // primary colors overrides
    '--mantine-primary-color-filled': `var(--solid-background-${theme.primaryColor})`,
    '--mantine-primary-color-filled-hover': `var(--hovered-solid-background-${theme.primaryColor})`,
    '--mantine-primary-color-light': `var(--ui-element-background-${theme.primaryColor})`,
    '--mantine-primary-color-light-hover': `var(--hovered-ui-element-background-${theme.primaryColor})`,
    '--mantine-primary-color-light-color': `var(--low-contrast-text-${theme.primaryColor})`,
  },
  light: {
    ...cssVariablesResolver(light),
    ...cssVariablesOverrides(light),
    ...cssVariablesDefaults('blue'),
  },
  dark: {
    ...cssVariablesResolver(dark),
    ...cssVariablesOverrides(dark),
    ...cssVariablesDefaults('mauve'),
  },
});
