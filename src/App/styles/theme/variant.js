import { defaultVariantColorsResolver, parseThemeColor } from '@mantine/core';

export const variantColorResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  if (input.variant === 'light') {
    return {
      color: `var(--low-contrast-text-${parsedColor.color})`,
      background: `var(--ui-element-background-${parsedColor.color})`,
      hover: `var(--hovered-ui-element-background-${parsedColor.color})`,
    };
  }

  return defaultResolvedColors;
};
