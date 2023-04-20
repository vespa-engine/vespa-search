import React from 'react';
import { useLocation } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { Redirect } from 'App/libs/router';
import { Results } from 'App/pages/search/results';
import { SearchInput } from 'App/pages/search/search-input.js';
import { Abstract } from 'App/pages/search/abstract.js';
import { Aside } from 'App/libs/layout';
import { Container } from 'App/components/index.js';

export const ENDPOINT = 'https://llmsearch.inference.workers.dev';

export function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  if (!query) return <Redirect to="/" replace />;

  return (
    <Container>
      <Stack>
        <SearchInput endpoint={ENDPOINT} query={query} />
        <Results endpoint={ENDPOINT} query={query} />
      </Stack>
      <Aside>
        <Abstract endpoint={ENDPOINT} query={query} />
      </Aside>
    </Container>
  );
}
