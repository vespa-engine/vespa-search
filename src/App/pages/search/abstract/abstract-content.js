import React from 'react';
import { Stack } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider/index.js';

export function AbstractContent() {
  const summary = useSearchContext((ctx) => ctx.summary.element);
  return <Stack>{summary}</Stack>;
}
