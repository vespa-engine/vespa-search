import React from 'react';
import { Group, HoverCard, Stack, List, Text, Title } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider';
import { typography } from 'App/styles/theme/typography';
import { Icon } from 'App/components';
import { AbstractFeedback } from 'App/pages/search/abstract-feedback';
import { fontWeightBold } from 'App/styles/common';
import { createUrlParams } from 'App/libs/provider/url-params';
import { Link } from 'App/libs/router';

export function Abstract() {
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
      <AbstractContent />
      <AbstractFeedback />
      <Questions />
    </Stack>
  );
}

function AbstractContent() {
  const summary = useSearchContext((ctx) => ctx.summary.element);
  return (
    <Stack sx={(theme) => ({ color: theme.cr.getLowContrastText() })}>
      {summary}
    </Stack>
  );
}

function Questions() {
  const namespaces = useSearchContext('namespaces');
  const questions = useSearchContext('questions');
  if (!(questions?.length > 0)) return null;

  return (
    <>
      <Text fw={fontWeightBold}>Also try these questions:</Text>
      <List type="unordered">
        {questions.map((query, i) => {
          const to = createUrlParams({ query, namespaces });
          return (
            <List.Item key={i}>
              <Link to={to}>{query}</Link>
            </List.Item>
          );
        })}
      </List>
    </>
  );
}
