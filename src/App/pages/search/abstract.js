import React from 'react';
import { Group, HoverCard, Stack, List, Text, Title } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider';
import { typography } from 'App/styles/theme/typography';
import { Icon } from 'App/components';
import { AbstractFeedback } from 'App/pages/search/abstract-feedback';
import { breakpoints, fontWeightBold } from 'App/styles/common';
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
        <HoverCard withinPortal>
          <HoverCard.Target>
            <Text color="blue">
              <Icon name="circle-question" type="regular" /> What is this?
            </Text>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Stack sx={{ maxWidth: breakpoints.sm }}>
              <Text size="sm">
                This abstract is dependent on the quality of your initial query
                and output of the resulting search. The algorithm may have been
                distracted by irrelevant context retrieved from the query, and
                the answer may change depending on which sources are included.
                Abstracts are not designed for, or intended to meet regulatory,
                legal, or other obligations, or to be used, or relied upon, as a
                substitute for medical, legal, financial, or other professional
                advice.
              </Text>
            </Stack>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
      <AbstractContent />
      <AbstractFeedback />
      <AbstractQuestions />
      <AbstractAbout />
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
      <Text fw={fontWeightBold}>Also try these questions</Text>
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

function AbstractAbout() {
  return (
    <Stack>
      <Text fw={fontWeightBold}>About the abstract</Text>
      <Text size="sm">
        This abstract was created by a generative AI model using your query and
        the search results as input. By entering a query, you agree to share any
        information provided with Open AI, which is subject to its Terms of
        Service and Privacy Policy. There may be inaccuracies or unintended bias
        in any abstract provided. Abstracts should not be used as a substitute
        for medical, legal, financial or other professional advice.
      </Text>
    </Stack>
  );
}
