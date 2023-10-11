import React from 'react';
import { Anchor, Group } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider/index.js';
import { Icon } from 'App/components/index.js';
import { useMobile } from 'App/hooks';

export function SearchClassic() {
  const query = useSearchContext((ctx) => ctx.query);
  const isMobile = useMobile();

  return (
    <Group justify="center">
      <Anchor
        href={`https://docs.vespa.ai/search.html?q=${encodeURIComponent(
          query,
        )}`}
        size={isMobile ? 'xs' : 'sm'}
        target="_blank"
      >
        <Group gap="xs">
          <Icon name="external-link" />
          classic search
        </Group>
      </Anchor>
    </Group>
  );
}
