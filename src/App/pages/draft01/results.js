import React from 'react';
import { Stack, Text } from '@mantine/core';
import { Content } from 'App/components/index.js';
import { fontWeightBold } from 'App/styles/common.js';

export function Results() {
  return (
    <Stack>
      <Content>
        <Text weight={fontWeightBold}>Abstract</Text>
        <Text>
          To feed data to Vespa, you can use the vespa-feed-client, which uses
          HTTP/2 for high throughput and is better for streaming feed files.
          Alternatively, you can use the Vespa document API directly or the
          Vespa CLI, which also uses the HTTP document API. The data fed to
          Vespa must match the schema for the document type. <a>[1]</a>{' '}
          <a>[3]</a> <a>[4]</a> <a>[5]</a> <a>[9]</a>
        </Text>
      </Content>
    </Stack>
  );
}
