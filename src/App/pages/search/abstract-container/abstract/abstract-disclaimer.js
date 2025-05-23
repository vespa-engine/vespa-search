import React from 'react';
import { Button, Container, HoverCard, Stack, Text } from '@mantine/core';
import { Link } from 'App/libs/router/index.js';
import { useConsent } from 'App/pages/search/abstract-container/abstract/use-consent.js';
import { fontWeightBold } from 'App/styles/common.js';

function DisclaimerDetails() {
  return (
    <HoverCard>
      <HoverCard.Target>
        <Text size="sm" td="underline" span>
          privacy notice
        </Text>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Container size="sm">
          <Stack>
            <Text size="sm" align="left" fw={fontWeightBold}>
              Privacy notice
            </Text>
            <Text size="sm" align="left">
              By entering a query, you consent to sharing it with OpenAI. The
              answer you see is generated by an AI model, using your query and
              search results. Please be aware there might be potential
              inaccuracies or unintended bias in the answers. The answers are
              not a substitute for medical, legal, financial, or other
              professional advice. Familiarize yourself with OpenAI&apos;s{' '}
              <Link to="https://openai.com/policies/terms-of-use">
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link to="https://openai.com/policies/privacy-policy">
                Privacy Policy
              </Link>
              . Prefer a traditional search? Please check{' '}
              <Link to="https://docs.vespa.ai">docs.search.ai</Link>.
            </Text>
          </Stack>
        </Container>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export function AbstractDisclaimer() {
  const { setValue } = useConsent();
  return (
    <Stack>
      <Button onClick={() => setValue(true)}>Show abstract</Button>
      <Stack>
        <Text size="sm" align="center">
          By showing, you consent to share data with OpenAI. The AI-generated
          answer may have biases or inaccuracies. See <DisclaimerDetails /> for
          more details. For the traditional search{' '}
          <Link to="https://docs.vespa.ai">docs.vespa.ai</Link>.
        </Text>
      </Stack>
    </Stack>
  );
}
