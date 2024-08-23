import React from 'react';
import { Anchor, Container, Group, Space } from '@mantine/core';
import { SearchInput } from 'App/pages/search/search-input/index.js';
import { Icon } from 'App/components/index.js';

export function Home() {
  return (
    <div>
      <Container w="100%" size="sm">
        <Space h={144} />
        <SearchInput size="lg" autofocus />
      </Container>
      <Container>
        <Space h={50} />
      </Container>
      {/* eslint-disable-next-line no-undef */}
      <div style={{ margin: 'auto', width: '50%' }}>
        <Anchor
          href={'https://docs.vespa.ai/'}
          //size={isMobile ? 'xs' : 'sm'} we should fix this, too
          target="_blank"
        >
          <Group gap="xs">
            <Icon name="external-link" />
            Browse documentation
          </Group>
        </Anchor>
      </div>
    </div>
  );
}
