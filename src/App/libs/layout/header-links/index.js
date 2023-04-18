import React from 'react';
import { Group } from '@mantine/core';
import { LinkTheme } from 'App/libs/layout/header-links/link-theme';

export function HeaderLinks() {
  return (
    <Group noWrap spacing="xl">
      <LinkTheme />
    </Group>
  );
}
