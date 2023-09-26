import React from 'react';
import {
  Container,
  Group,
  List,
  Popover,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import classNames from './search.module.css';
import { useSearchContext } from 'App/libs/provider';
import { Icon } from 'App/components';
import { AbstractFeedback } from 'App/pages/search/abstract-feedback';
import { fontWeightBold, fontWeightLight } from 'App/styles/common';
import { Link } from 'App/libs/router';

export function Abstract() {
  const { typography } = classNames;
  return (
    <Stack className={typography}>
      <Group pt="md" position="apart">
        <Title order={4}>
          Abstract{' '}
          <Text weight={fontWeightLight} size="sm" span>
            (experimental)
          </Text>
        </Title>
        <Popover withinPortal>
          <Popover.Target>
            <Text style={{ cursor: 'pointer' }} c="blue">
              <Icon name="circle-question" type="regular" /> What is this?
            </Text>
          </Popover.Target>
          <Popover.Dropdown>
            <Container size="sm">
              <Text size="sm">
                The abstract&apos;s accuracy relies on your query and the search
                outcome. Irrelevant query context might influence results, and
                answers vary based on sources used. Abstracts aren&apos;t
                suitable for regulatory or legal purposes and shouldn&apos;t
                replace professional advice in medical, legal, or financial
                areas.
              </Text>
            </Container>
          </Popover.Dropdown>
        </Popover>
      </Group>
      <AbstractContent />
      <AbstractFeedback />
      <AbstractAbout />
      <AbstractQuestions />
    </Stack>
  );
}

function AbstractContent() {
  const summary = useSearchContext((ctx) => ctx.summary.element);
  return <Stack>{summary}</Stack>;
}

function AbstractQuestions() {
  const questions = useSearchContext((ctx) => ctx.summary.questions);
  if (!(questions?.length > 0)) return null;

  const { item } = classNames;

  return (
    <Stack>
      <Text fw={fontWeightBold}>Also try these questions</Text>
      <List
        classNames={{ item }}
        icon={<Icon name="magnifying-glass" color="blue" />}
        type="unordered"
        center
      >
        {questions.map(({ text, url }, i) => (
          <Link to={url} key={i}>
            <List.Item>
              <Text c="blue" inline>
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
  const hasFinished = useSearchContext(
    (ctx) => ctx.summary.feedbackUrl != null,
  );
  if (!hasFinished) return null;

  return (
    <Stack>
      <Text fw={fontWeightBold}>About the abstract</Text>
      <Text size="sm">
        This abstract is AI-generated, based on your query and search results.
        By submitting a query, you agree to share data with OpenAI, governed by
        theirs{' '}
        <Link to="https://openai.com/policies/terms-of-use">Terms of Use</Link>{' '}
        and{' '}
        <Link to="https://openai.com/policies/privacy-policy">
          Privacy Policy
        </Link>
        . Note that abstracts may contain inaccuracies or unintended biases and
        shouldn&apos;t serve as a substitute for professional advice in medical,
        legal, financial, or other domains.
      </Text>
    </Stack>
  );
}
