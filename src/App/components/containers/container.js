import React from 'react';
import { Box } from '@mantine/core';
import { mergeStyles } from 'App/styles/common';

export function Container({ style, ...props }) {
  return (
    <Box
      style={mergeStyles({ display: 'grid', width: '100%' }, style)}
      {...props}
    />
  );
}
