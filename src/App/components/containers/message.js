import React from 'react';
import { Box } from '@mantine/core';
import { mergeSx } from 'App/styles/common';

export function Message({ sx, ...props }) {
  return (
    <Box
      sx={mergeSx(
        {
          display: 'grid',
          placeContent: 'center',
          minHeight: '55px',
        },
        sx
      )}
      {...props}
    />
  );
}
