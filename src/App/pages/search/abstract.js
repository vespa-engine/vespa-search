import React, { useEffect, useState } from 'react';
import { Group, HoverCard, Stack, Text, Title } from '@mantine/core';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { UrlBuilder } from 'App/utils';
import { typography } from 'App/styles/theme/typography';
import { Icon } from 'App/components';
import { AbstractFeedback } from 'App/pages/search/abstract-feedback';

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
      <Group
        sx={(theme) => ({ paddingTop: theme.spacing.md })}
        position="apart"
      >
        <Title
          sx={(theme) => ({ color: theme.cr.getHighContrastText() })}
          order={4}
        >
          Abstract
        </Title>
        <HoverCard>
          <HoverCard.Target>
            <Text color="blue">
              <Icon name="circle-question" type="regular" /> What is this?
            </Text>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Stack>
              <Text>This is something cool...</Text>
            </Stack>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
      <Stack sx={(theme) => ({ color: theme.cr.getLowContrastText() })}>
        {parseMarkdown(summary)}
      </Stack>
      <AbstractFeedback />
    </Stack>
  );
}
