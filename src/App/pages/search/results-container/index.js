import React from 'react';
import { ScrollArea, Stack } from '@mantine/core';
import classNames from 'App/pages/search/results-container/index.module.css';
import { useMobile } from 'App/hooks';

export function ResultsContainer({ viewportRef, ...props }) {
  const isMobile = useMobile();

  return (
    <ScrollArea className={classNames.scrollArea} viewportRef={viewportRef}>
      <Stack
        className={classNames.stack}
        pt={isMobile ? 0 : 'md'}
        gap={isMobile ? 'md' : 'lg'}
        w="100%"
        {...props}
      />
    </ScrollArea>
  );
}
