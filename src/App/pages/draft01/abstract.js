import React, { useEffect, useState } from 'react';
import { Text } from '@mantine/core';
import { Link } from 'App/libs/router';
import { processString, UrlBuilder } from 'App/utils';
import { Content } from 'App/components';
import { fontWeightBold } from 'App/styles/common.js';

const processors = [
  {
    regex: /\[([0-9]+)\]/g,
    fn: (key, [, refId]) => (
      <React.Fragment key={key}>
        [<Link onClick={() => scrollTo(`#result-${refId}`, 80)}>{refId}</Link>]
      </React.Fragment>
    ),
  },
];

function scrollTo(selector, offset) {
  const element = document.querySelector(selector);
  const position = element.getBoundingClientRect().top - offset;
  window.scrollBy({ top: position, behavior: 'smooth' });
}

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
      <Text>{processString(summary, processors)}</Text>
    </Content>
  );
}
