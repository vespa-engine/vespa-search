import React from 'react';
import { Paper } from '@mantine/core';
import { mergeSx } from 'App/styles/common';

export function Topbar({ sx, ...props }) {
  return (
    <Paper
      sx={mergeSx(
        (theme) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '54px',
          paddingTop: '2px',
          paddingBottom: '2px',
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md,
          background: theme.cr.isDarkScheme
            ? theme.cr.getSubtleBackground()
            : theme.white,
          borderBottom: `1px solid ${
            theme.cr.isDarkScheme
              ? theme.fn.darken(theme.cr.getSubtleBorderAndSeparator(), 0.13)
              : theme.fn.lighten(theme.cr.getSubtleBorderAndSeparator(), 0.13)
          }`,
        }),
        sx
      )}
      {...props}
    />
  );
}
