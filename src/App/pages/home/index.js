import React from 'react';
import { Container, Space, Stack } from '@mantine/core';
import { SearchInput } from 'App/pages/search/search-input.js';

export function Home() {
  return (
    <Container sx={{ width: '100%' }} size="sm">
      <Space h={89} />
      <Stack>
        <SearchInput size="lg" autofocus />
      </Stack>
    </Container>
  );
}
