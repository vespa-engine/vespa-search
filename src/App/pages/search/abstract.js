import React from 'react';
import { Group, HoverCard, Stack, Text, Title } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { typography } from 'App/styles/theme/typography';
import { Icon } from 'App/components';
import { AbstractFeedback } from 'App/pages/search/abstract-feedback';

export function Abstract() {
  const summary = useSearchContext('summary');

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
