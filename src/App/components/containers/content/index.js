import React from 'react';
import { Box, Stack } from '@mantine/core';
import classNames from 'App/components/containers/content/index.module.css';

export function Content({ withBorder, selected, ...props }) {
  const { box } = classNames;
  return (
    <Box className={box} mod={[{ 'with-border': withBorder }, { selected }]}>
      <Stack p="md" {...props} />
    </Box>
  );
}
