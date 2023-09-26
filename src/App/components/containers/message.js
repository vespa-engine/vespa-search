import React from 'react';
import { Box } from '@mantine/core';
import { mergeStyles } from 'App/styles/common';

export function Message({ style, ...props }) {
  return (
    <Box
      style={mergeStyles(
        {
          display: 'grid',
          placeContent: 'center',
          minHeight: '55px',
        },
        style,
      )}
      {...props}
    />
  );
}
