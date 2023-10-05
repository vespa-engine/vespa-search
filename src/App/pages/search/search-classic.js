import React from 'react';
import { Anchor, Group } from '@mantine/core';
import { Icon } from 'App/components/index.js';

export function SearchClassic() {
  // TODO: get the correct link with query
  return (
    <Group justify="center">
      <Anchor
        href="https://docs.vespa.ai/search.html"
        target="_blank"
        size="sm"
      >
        <Group gap="xs">
          <Icon name="external-link" />
          classic search
        </Group>
      </Anchor>
    </Group>
  );
}
