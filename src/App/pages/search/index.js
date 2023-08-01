import React, { useRef } from 'react';
import { ScrollArea, Stack } from '@mantine/core';
import { Results } from 'App/pages/search/results';
import { SearchInput } from 'App/pages/search/search-input';
import { Abstract } from 'App/pages/search/abstract';
import { Container } from 'App/components';
import { SearchSources } from 'App/pages/search/search-sources';

const RESULTS_WIDTH = '67vw';
const ABSTRACT_WIDTH = '33vw';

function getHeight(theme) {
  return `calc(100vh - var(--mantine-header-height, 0px) - (2 * ${theme.spacing.md}))`;
}

export function Search() {
  const viewportRef = useRef(null);

  return (
    <Container
      sx={(theme) => ({
        gridTemplateColumns: `minmax(0, ${RESULTS_WIDTH}) minmax(0, ${ABSTRACT_WIDTH})`,
        columnGap: theme.spacing.md,
      })}
    >
      <ScrollArea
        sx={(theme) => ({ height: getHeight(theme) })}
        viewportRef={viewportRef}
      >
        <Stack
          sx={(theme) => ({
            maxWidth: `calc(${RESULTS_WIDTH} - (3 * ${theme.spacing.md}))`,
            paddingTop: theme.spacing.md,
            width: '100%',
          })}
          spacing="lg"
        >
          <Stack>
            <SearchInput />
            <SearchSources />
          </Stack>
          <Results
            scrollBy={(options) => viewportRef.current.scrollBy(options)}
          />
        </Stack>
      </ScrollArea>
      <ScrollArea sx={(theme) => ({ height: getHeight(theme) })}>
        <Stack
          sx={(theme) => ({
            maxWidth: `calc(${ABSTRACT_WIDTH} - (1 * ${theme.spacing.md}))`,
            width: '100%',
          })}
        >
          <Abstract />
        </Stack>
      </ScrollArea>
    </Container>
  );
}
