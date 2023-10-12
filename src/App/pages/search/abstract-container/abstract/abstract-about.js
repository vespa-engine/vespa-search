import React from 'react';
import { Anchor, Stack, Text } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider/index.js';
import { fontWeightBold } from 'App/styles/common.js';
import { Link } from 'App/libs/router/index.js';
import { useConsent } from 'App/pages/search/abstract-container/abstract/use-consent.js';

export function AbstractAbout() {
  const { setValue } = useConsent();
  const hasFinished = useSearchContext(
    (ctx) => ctx.summary.feedbackUrl != null,
  );
  if (!hasFinished) return null;

  return (
    <Stack>
      <Text size="sm" c="var(--high-contrast-text)" fw={fontWeightBold}>
        About the abstract
      </Text>
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
        legal, financial, or other domains.{' '}
        <Text span>
          Click <Anchor onClick={() => setValue(false)}>here</Anchor> to revoke
          showing the abstract.
        </Text>
      </Text>
    </Stack>
  );
}
