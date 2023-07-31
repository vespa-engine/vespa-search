import React from 'react';
import { ScrollArea, Stack } from '@mantine/core';
import { Results } from 'App/pages/search/results';
import { SearchInput } from 'App/pages/search/search-input';
import { Abstract } from 'App/pages/search/abstract';
import { Container } from 'App/components/index.js';
import { SearchSources } from 'App/pages/search/search-sources';
import { Aside } from 'App/libs/layout';

export function Search() {
  return (
    <Container>
      <ScrollArea
        sx={(theme) => ({
          height: `calc(100vh - var(--mantine-header-height, 0px) - (2 * ${theme.spacing.md}))`,
        })}
      >
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
      </ScrollArea>
      <Aside>
        <Abstract />
      </Aside>
    </Container>
  );
}
