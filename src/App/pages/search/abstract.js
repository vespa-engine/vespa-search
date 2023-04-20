import React, { useEffect, useState } from 'react';
import { Text } from '@mantine/core';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { UrlBuilder } from 'App/utils';
import { Content } from 'App/components';
import { fontWeightBold } from 'App/styles/common.js';

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
      setSummary((prev) => prev + e.data)
    );
    source.addEventListener('error', source.close); // TODO: Display error somewhere?
    source.addEventListener('close', source.close);
    return () => source.close();
  }, [url]);

  return (
    <Content>
      <Text weight={fontWeightBold}>Abstract</Text>
      <div>{parseMarkdown(summary)}</div>
    </Content>
  );
}
