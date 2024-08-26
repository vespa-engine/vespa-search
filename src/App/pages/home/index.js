import React from 'react';
import { Container, Group, Space } from '@mantine/core';
import { SearchInput } from 'App/pages/search/search-input/index.js';
import { Icon } from 'App/components/index.js';
import { Link } from 'App/libs/router/index.js';

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
      <Link to="https://docs.vespa.ai">
        <Group gap="xs" justify="center">
          <Icon name="external-link" />
          Browse documentation
        </Group>
      </Link>
    </div>
  );
}
