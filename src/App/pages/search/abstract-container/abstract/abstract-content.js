import React from 'react';
import { Stack } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider/index.js';
import { parseMarkdown } from 'App/pages/search/md-parser.js';

export function AbstractContent() {
  const summary = useSearchContext((ctx) => ctx.summary.raw);
  return <Stack>{parseMarkdown(summary)}</Stack>;
}
