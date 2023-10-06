import React from 'react';
import { Anchor, Group } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider/index.js';
import { Icon } from 'App/components/index.js';

export function SearchClassic() {
  const query = useSearchContext((ctx) => ctx.query);

  return (
    <Group justify="center">
      <Anchor
        href={`https://docs.vespa.ai/search.html?q=${encodeURIComponent(
          query,
        )}`}
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
