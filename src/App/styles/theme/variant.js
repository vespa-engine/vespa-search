import { defaultVariantColorsResolver, parseThemeColor } from '@mantine/core';

export const variantColorResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  if (parsedColor.isThemeColor && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--vespa-color-rock)',
      hoverColor: 'var(--vespa-color-rock)',
    };
  }

  return defaultResolvedColors;
};
