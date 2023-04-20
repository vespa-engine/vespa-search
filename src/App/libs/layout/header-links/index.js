import React from 'react';
import { Group } from '@mantine/core';
import { LinkTheme } from 'App/libs/layout/header-links/link-theme';
import { Icon } from 'App/components/index.js';
import { Link } from 'App/libs/router/index.js';

export function HeaderLinks() {
  return (
    <Group noWrap spacing="lg">
      <Link to="https://github.com/vespa-engine/vespa">
        <Icon name="github" type="brands" size="lg" color="gray" />
      </Link>
      <LinkTheme />
    </Group>
  );
}
