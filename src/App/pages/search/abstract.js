import React, { useEffect, useState } from 'react';
import { Stack, Title } from '@mantine/core';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { UrlBuilder } from 'App/utils';
import { typography } from 'App/styles/theme/typography';

export function Abstract({ endpoint, query }) {
  const [summary, setSummary] = useState('');
  const url = new UrlBuilder(endpoint)
    .add('stream')
    .queryParam('query', query)
    .toString();
  useEffect(() => {
    setSummary('');
    const source = new EventSource(url);
    source.addEventListener('message', (e) =>
      setSummary((prev) => (prev + e.data).replace('<br/>', '\n'))
    );
    source.addEventListener('error', source.close); // TODO: Display error somewhere?
    source.addEventListener('close', source.close);
    return () => source.close();
  }, [url]);

  return (
    <Stack sx={typography}>
      <Title
        sx={(theme) => ({
          color: theme.cr.getHighContrastText(),
          paddingTop: theme.spacing.md,
        })}
        order={4}
      >
        Abstract
      </Title>
      <Stack sx={(theme) => ({ color: theme.cr.getLowContrastText() })}>
        {parseMarkdown(summary)}
      </Stack>
    </Stack>
  );
}
