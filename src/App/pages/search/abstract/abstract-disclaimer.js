import React from 'react';
import { Button, Stack, Text } from '@mantine/core';
import { Link } from 'App/libs/router/index.js';
import { DisclaimerDetails } from 'App/pages/home/search-disclaimer.js';

export function AbstractDisclaimer() {
  return (
    <Stack>
      <Button>Show abstract</Button>
      <Stack>
        <Text size="sm" align="center">
          By showing, you consent to share data with OpenAI. The AI-generated
          abstract may have biases or inaccuracies. See <DisclaimerDetails />{' '}
          for more details. For the traditional search{' '}
          <Link to="https://docs.vespa.ai">docs.search.ai</Link>.
        </Text>
      </Stack>
    </Stack>
  );
}
