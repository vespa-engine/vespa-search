import React, { useContext } from 'react';
import { Spoiler, Stack, Text, Title } from '@mantine/core';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { useGet } from 'App/libs/fetcher/index.js';
import { UrlBuilder } from 'App/utils/index.js';
import { Content, Error, LoadingResult } from 'App/components';
import { ResultActions } from 'App/pages/search/result-actions';
import { typography } from 'App/styles/theme/typography';
import { AppContext } from 'App/libs/provider';

function Result({ refId, title, content, base_uri, path }) {
  const { reference } = useContext(AppContext);
  const scrollTo = reference === refId;

  return (
    <Content
      sxBox={(theme) => ({
        ...(scrollTo && { borderColor: theme.cr.getSolidBackground('blue') }),
        '&:hover': {
          borderColor: scrollTo
            ? theme.cr.getSolidBackground('blue')
            : theme.cr.getSolidBackground(),
        },
      })}
      withBorder
    >
      <Spoiler maxHeight={233} showLabel="Show more" hideLabel="Show less">
        <Stack>
          <Stack sx={typography}>
            <Title
              sx={(theme) => ({ color: theme.cr.getHighContrastText() })}
              id={`result-${refId}`}
            >
              [{refId}] {title}
            </Title>
            <Stack sx={(theme) => ({ color: theme.cr.getLowContrastText() })}>
              {parseMarkdown(content, base_uri + path)}
            </Stack>
          </Stack>
          <ResultActions />
        </Stack>
      </Spoiler>
    </Content>
  );
}

export function Results({ endpoint, query }) {
  const { loading, error, response } = useGet(
    new UrlBuilder(endpoint).add('search').queryParam('query', query)
  );

  if (loading) return <LoadingResult />;
  if (error) return <Error message={error.message} />;

  const hits = response.root.children ?? [];

  return hits.length === 0 ? (
    <Text>No matches</Text>
  ) : (
    <Stack spacing="lg">
      {hits.map((child, i) => (
        <Result key={i} refId={i + 1} {...child.fields} />
      ))}
    </Stack>
  );
}
