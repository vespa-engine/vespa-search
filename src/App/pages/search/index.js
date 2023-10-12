import React, { useRef } from 'react';
import { Group, Stack } from '@mantine/core';
import { Results } from 'App/pages/search/results-container/results/index.js';
import { Abstract } from 'App/pages/search/abstract-container/abstract/index.js';
import { SearchSources } from 'App/pages/search/search-sources';
import { SearchInput } from 'App/pages/search/search-input/index.js';
import { SearchClassic } from 'App/pages/search/search-classic.js';
import { SearchContainer } from 'App/pages/search/search-container/index.js';
import { ResultsContainer } from 'App/pages/search/results-container/index.js';
import { AbstractContainer } from 'App/pages/search/abstract-container/index.js';
import { useMobile } from 'App/hooks/index.js';

export function Search() {
  const viewportRef = useRef(null);
  const isMobile = useMobile();

  return (
    <SearchContainer>
      <ResultsContainer viewportRef={viewportRef}>
        <Stack>
          <SearchInput />
          <Group justify={isMobile ? 'center' : 'space-between'} gap="xs">
            <SearchSources />
            <SearchClassic />
          </Group>
        </Stack>
        <Results
          scrollBy={(options) => viewportRef.current.scrollBy(options)}
        />
      </ResultsContainer>
      <AbstractContainer>
        <Abstract />
      </AbstractContainer>
    </SearchContainer>
  );
}
