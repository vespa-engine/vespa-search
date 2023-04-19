import React from 'react';
import { Container } from '@mantine/core';
import { SearchInput } from 'App/pages/search/search-input.js';
import { ENDPOINT } from 'App/pages/search/index.js';

export function Home() {
  return (
    <Container>
      <SearchInput endpoint={ENDPOINT} />
    </Container>
  );
}
