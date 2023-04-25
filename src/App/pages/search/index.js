import React from 'react';
import { useLocation } from 'react-router-dom';
import { Space, Stack } from '@mantine/core';
import { Redirect } from 'App/libs/router';
import { Results } from 'App/pages/search/results';
import { SearchInput } from 'App/pages/search/search-input.js';
import { Abstract } from 'App/pages/search/abstract.js';
import { Container } from 'App/components/index.js';
import { SearchSources } from 'App/pages/home/search-sources';

export const ENDPOINT = 'https://llmsearch.inference.workers.dev';

export function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  if (!query) return <Redirect to="/" replace />;

  return (
    <Container
      sx={(theme) => ({
        gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
        gap: theme.spacing.md,
      })}
    >
      <Stack spacing="lg">
        <Stack>
          <Space h={1} />
          <SearchInput endpoint={ENDPOINT} query={query} />
          <SearchSources />
        </Stack>
        <Results endpoint={ENDPOINT} query={query} />
      </Stack>
      <Abstract endpoint={ENDPOINT} query={query} />
    </Container>
  );
}
