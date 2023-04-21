import React from 'react';
import { Container, Space, Stack } from '@mantine/core';
import { SearchInput } from 'App/pages/search/search-input.js';
import { ENDPOINT } from 'App/pages/search/index.js';
import { SearchSources } from 'App/pages/home/search-sources.js';
import { SearchAutocomplete } from 'App/pages/search/search-autocomplete';

export function Home() {
  return (
    <Container size="sm">
      <Space h={55} />
      <Stack>
        <SearchInput endpoint={ENDPOINT} size="lg" />
        <SearchAutocomplete endpoint={ENDPOINT} size="lg" />
        <SearchSources />
      </Stack>
    </Container>
  );
}
