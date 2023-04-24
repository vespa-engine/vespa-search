import React from 'react';
import { Stack, Text, Title } from '@mantine/core';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { useGet } from 'App/libs/fetcher/index.js';
import { UrlBuilder } from 'App/utils/index.js';
import { Content, Error, Loading } from 'App/components/index.js';
import { ResultActions } from 'App/pages/search/result-actions';
import { typography } from 'App/styles/theme/typography';

function Result({ refId, title, content, base_uri, path }) {
  return (
    <Content
      sxBox={(theme) => ({
        '&:hover': { borderColor: theme.cr.getUiElementBorderAndFocus() },
      })}
      borderStyle="dashed"
      withBorder
    >
      <Stack sx={typography()}>
        <Title
          sx={(theme) => ({ color: theme.cr.getHighContrastText() })}
          id={`result-${refId}`}
          order={2}
        >
          [{refId}] {title}
        </Title>
        <Stack sx={(theme) => ({ color: theme.cr.getLowContrastText() })}>
          {parseMarkdown(content, base_uri + path)}
        </Stack>
      </Stack>
      <ResultActions />
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
