import React from 'react';
import { Group, HoverCard, Stack, List, Text, Title } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider';
import { typography } from 'App/styles/theme/typography';
import { Icon } from 'App/components';
import { AbstractFeedback } from 'App/pages/search/abstract-feedback';
import { fontWeightBold } from 'App/styles/common';
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
      <AbstractQuestions />
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

function AbstractQuestions() {
  const questions = useSearchContext((ctx) => ctx.summary.questions);
  if (!(questions?.length > 0)) return null;

  return (
    <Stack>
      <Text fw={fontWeightBold}>Also try these questions:</Text>
      <List
        styles={(theme) => ({
          item: {
            border: `1px solid ${theme.cr.getSubtleBorderAndSeparator('blue')}`,
            backgroundColor: theme.cr.getAppBackground(),
            borderRadius: theme.spacing.xl,
            padding: theme.spacing.sm,
            marginBottom: theme.spacing.xs,
            '&:hover': {
              borderColor: theme.cr.getSolidBackground('blue'),
            },
          },
        })}
        icon={<Icon name="magnifying-glass" color="blue" />}
        type="unordered"
        center
      >
        {questions.map(({ text, url }, i) => (
          <Link to={url} key={i}>
            <List.Item>
              <Text color="blue" inline>
                {text}
              </Text>
            </List.Item>
          </Link>
        ))}
      </List>
    </Stack>
  );
}
