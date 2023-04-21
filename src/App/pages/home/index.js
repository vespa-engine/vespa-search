import React from 'react';
import { Container, Space, Stack } from '@mantine/core';
import { SearchInput } from 'App/pages/search/search-input.js';
import { ENDPOINT } from 'App/pages/search/index.js';
import { SearchSources } from 'App/pages/home/search-sources.js';

export function Home() {
  return (
    <Container size="sm">
      <Space h={55} />
      <Stack>
        <SearchInput endpoint={ENDPOINT} size="lg" autofocus />
        <SearchSources />
      </Stack>
    </Container>
  );
}
