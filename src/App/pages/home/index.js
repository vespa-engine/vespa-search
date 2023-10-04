import React from 'react';
import { Container, Space } from '@mantine/core';
import { SearchInput } from 'App/pages/search/search-input/index.js';

export function Home() {
  return (
    <Container w="100%" size="sm">
      <Space h={144} />
      <SearchInput size="lg" autofocus />
    </Container>
  );
}
