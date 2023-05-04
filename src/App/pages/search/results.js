import React, { useContext } from 'react';
import { Badge, Group, Spoiler, Stack, Text, Title } from '@mantine/core';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { useGet } from 'App/libs/fetcher/index.js';
import { UrlBuilder } from 'App/utils/index.js';
import { Content, Error, Icon, LoadingResult } from 'App/components';
import { typography } from 'App/styles/theme/typography';
import { AppContext } from 'App/libs/provider';
import { Link } from 'App/libs/router';

const NAMESPACES = {
  'open-p': 'Documentation',
  'cloud-p': 'Vespa Cloud Documentation',
  'vespaapps-p': 'Vespa Sample Applications',
  'blog-p': 'Vespa Blog',
};

function Result({ refId, title, content, base_uri, path, namespace }) {
  const { reference } = useContext(AppContext);
  const scrollTo = reference === refId;
  const titleLink = `${base_uri}${path}`;

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
      <Spoiler
        styles={(theme) => ({
          control: {
            ...theme.fn.hover({ textDecoration: 'none' }),
            color: 'inherit',
          },
        })}
        maxHeight={233}
        showLabel="Show more"
        hideLabel="Show less"
      >
        <Stack sx={typography}>
          <Group position="apart" spacing="xs">
            <Title
              sx={(theme) => ({
                color: theme.cr.getHighContrastText(),
                lineHeight: 'inherit',
              })}
              className="title"
              id={`result-${refId}`}
              component={Link}
              to={titleLink}
            >
              [{refId}] {title}{' '}
              <Icon
                sx={{
                  display: 'none',
                  '.title:hover &': { display: 'revert' },
                }}
                name="external-link"
                color="gray"
                size="2xs"
              />
            </Title>
            {Object.keys(NAMESPACES).includes(namespace) && (
              <Badge size="xs">{NAMESPACES[namespace]}</Badge>
            )}
          </Group>
          <Stack sx={(theme) => ({ color: theme.cr.getLowContrastText() })}>
            {parseMarkdown(content, base_uri + path)}
          </Stack>
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
