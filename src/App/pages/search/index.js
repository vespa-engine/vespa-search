import React from 'react';
import { useLocation } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { Redirect } from 'App/libs/router';
import { Results } from 'App/pages/search/results';
import { SearchInput } from 'App/pages/search/search-input';
import { Abstract } from 'App/pages/search/abstract';
import { Container } from 'App/components/index.js';
import { SearchSources } from 'App/pages/home/search-sources';
import { Aside } from 'App/libs/layout';

export const ENDPOINT = 'https://llmsearch.inference.workers.dev';

export function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  if (!query) return <Redirect to="/" replace />;

  return (
    <Container>
      <Stack
        sx={(theme) => ({
          maxWidth: `calc(100vw - calc(var(--mantine-aside-width, 0px) + (3 * ${theme.spacing.md})))`,
          paddingTop: theme.spacing.md,
          width: '100%',
        })}
        spacing="lg"
      >
        <Stack>
          <SearchInput endpoint={ENDPOINT} query={query} />
          <SearchSources />
        </Stack>
        <Results endpoint={ENDPOINT} query={query} />
      </Stack>
      <Aside>
        <Abstract endpoint={ENDPOINT} query={query} />
      </Aside>
    </Container>
  );
}
