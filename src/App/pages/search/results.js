import React from 'react';
import { Stack, Text } from '@mantine/core';
import { useGet } from 'App/libs/fetcher/index.js';
import { UrlBuilder } from 'App/utils/index.js';
import { Content, Error, Loading } from 'App/components/index.js';
import { fontWeightBold } from 'App/styles/common.js';

function Result({ refId, title, content }) {
  return (
    <Content>
      <Text id={`result-${refId}`} weight={fontWeightBold}>
        [{refId}] {title}
      </Text>
      <Text>{content}</Text>
    </Content>
  );
}

export function Results({ endpoint, query }) {
  const { loading, error, response } = useGet(
    new UrlBuilder(endpoint).add('search').queryParam('query', query)
  );

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const hits = response.root.children ?? [];

  return (
    <Stack>
      {hits.length === 0 ? (
        <Text>No matches</Text>
      ) : (
        hits.map((child, i) => (
          <Result key={i} refId={i + 1} {...child.fields} />
        ))
      )}
    </Stack>
  );
}
