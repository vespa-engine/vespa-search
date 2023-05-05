import React from 'react';
import { Stack } from '@mantine/core';
import { Results } from 'App/pages/search/results';
import { SearchInput } from 'App/pages/search/search-input';
import { Abstract } from 'App/pages/search/abstract';
import { Container } from 'App/components/index.js';
import { SearchSources } from 'App/pages/search/search-sources';
import { Aside } from 'App/libs/layout';

export function Search() {
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
          <SearchInput />
          <SearchSources />
        </Stack>
        <Results />
      </Stack>
      <Aside>
        <Abstract />
      </Aside>
    </Container>
  );
}
