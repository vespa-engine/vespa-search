import React, { useRef } from 'react';
import { ScrollArea, Stack } from '@mantine/core';
import { Results } from 'App/pages/search/results';
import { Abstract } from 'App/pages/search/abstract';
import { Container } from 'App/components';
import { SearchSources } from 'App/pages/search/search-sources';
import { SearchInput } from 'App/pages/search/search-input';

const RESULTS_WIDTH = '67vw';
const ABSTRACT_WIDTH = '33vw';

function getHeight() {
  return `calc(100vh - var(--app-shell-header-height, 0px) - (2 * var(--mantine-spacing-md)))`;
}

export function Search() {
  const viewportRef = useRef(null);

  return (
    <Container
      style={{
        gridTemplateColumns: `minmax(0, ${RESULTS_WIDTH}) minmax(0, ${ABSTRACT_WIDTH})`,
        columnGap: 'var(--mantine-spacing-md)',
      }}
    >
      <ScrollArea h={getHeight()} viewportRef={viewportRef}>
        <Stack
          maw={`calc(${RESULTS_WIDTH} - (3 * var(--mantine-spacing-md)))`}
          w="100%"
          pt="md"
          pr="md"
          gap="lg"
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
      <ScrollArea h={getHeight()}>
        <Stack
          maw={`calc(${ABSTRACT_WIDTH} - (1 * var(--mantine-spacing-md)))`}
          w="100%"
        >
          <Abstract />
        </Stack>
      </ScrollArea>
    </Container>
  );
}
