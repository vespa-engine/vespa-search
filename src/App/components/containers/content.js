import React from 'react';
import { Stack, Box } from '@mantine/core';
import { mergeSx } from 'App/styles/common';

function resolveBackground(theme, background) {
  switch (background) {
    case 'paper':
      return theme.cr.isDarkScheme
        ? theme.cr.getSubtleBackground()
        : theme.white;
    case 'app':
      return theme.cr.getAppBackground();
    case 'subtle':
      return theme.cr.getSubtleBackground();
    case 'ui-element':
      return theme.cr.getUiElementBackground();
    default:
      throw new Error(`Unknown background: ${background}`);
  }
}

export function Content({
  withBorder,
  borderStyle = 'solid',
  monospace,
  background,
  padding = 'md',
  sx,
  sxBox,
  ...props
}) {
  return (
    <Box
      sx={mergeSx(
        (theme) => ({
          position: 'relative',
          border: withBorder
            ? `1px ${borderStyle} ${theme.cr.getSubtleBorderAndSeparator()}`
            : 0,
          borderRadius: withBorder ? theme.spacing.xs : 0,
          ...(background && {
            backgroundColor: resolveBackground(theme, background),
          }),
        }),
        sxBox
      )}
    >
      <Stack
        sx={mergeSx(
          (theme) => ({
            padding: theme.spacing[padding] ?? padding,
            ...(monospace && {
              fontFamily: theme.fontFamilyMonospace,
              fontSize: theme.fontSizes.sm,
            }),
          }),
          sx
        )}
        {...props}
      />
    </Box>
  );
}
