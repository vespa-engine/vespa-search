import React from 'react';
import { Stack, Text } from '@mantine/core';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { useGet } from 'App/libs/fetcher/index.js';
import { UrlBuilder } from 'App/utils/index.js';
import { Content, Error, Loading } from 'App/components/index.js';
import { fontWeightBold } from 'App/styles/common.js';

function Result({ refId, title, content }) {
  return (
    <Content
      sx={(theme) => ({
        '&:hover': { backgroundColor: theme.cr.getUiElementBackground() },
      })}
      borderStyle="dashed"
      withBorder
    >
      <Text id={`result-${refId}`} weight={fontWeightBold}>
        [{refId}] {title}
      </Text>
      <div>{parseMarkdown(content)}</div>
    </Content>
  );
}

export function Results({ endpoint, query }) {
  const { loading, error, response } = useGet(
    new UrlBuilder(endpoint).add('search').queryParam('query', query)
  );

  if (loading) return <Loading message="Loading..." />;
  if (error) return <Error message={error.message} />;

  const hits = response.root.children ?? [];

  return hits.length === 0 ? (
    <Text>No matches</Text>
  ) : (
    <Stack>
      {hits.map((child, i) => (
        <Result key={i} refId={i + 1} {...child.fields} />
      ))}
    </Stack>
  );
}
