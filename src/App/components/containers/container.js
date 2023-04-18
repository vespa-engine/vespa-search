import React from 'react';
import { Box } from '@mantine/core';
import { maxWidth, mergeSx } from 'App/styles/common';

export function Container({ sx, withMaxWidth, ...props }) {
  return (
    <Box
      sx={mergeSx(
        {
          display: 'grid',
          width: '100%',
          ...(withMaxWidth && { maxWidth, margin: '0 auto' }),
        },
        sx
      )}
      {...props}
    />
  );
}
