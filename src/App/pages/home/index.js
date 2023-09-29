import React from 'react';
import { Container, Space, Stack } from '@mantine/core';
import { SearchDisclaimer } from 'App/pages/home/search-disclaimer';
import { SearchInput } from 'App/pages/search/search-input';

export function Home() {
  return (
    <Container w="100%" size="sm">
      <Space h={89} />
      <Stack pt="md">
        <SearchInput size="lg" autofocus />
        <SearchDisclaimer />
      </Stack>
    </Container>
  );
}
