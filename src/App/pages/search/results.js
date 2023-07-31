import React, { useEffect, useRef } from 'react';
import { Badge, Group, Spoiler, Stack, Text, Title } from '@mantine/core';
import { NAMESPACES_BY_ID, useSearchContext } from 'App/libs/provider';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { Content, Error, Icon, LoadingResult } from 'App/components';
import { typography } from 'App/styles/theme/typography';
import { Link } from 'App/libs/router';

function Result({
  refId,
  title,
  content,
  base_uri,
  path,
  namespace,
  scrollBy,
}) {
  const isSelected = useSearchContext((ctx) => ctx.selectedHit === refId);
  const ref = useRef();
  const titleLink = base_uri + path;
  const namespaceMeta = NAMESPACES_BY_ID[namespace];

  useEffect(() => {
    if (!isSelected || !ref.current) return;
    const position = ref.current.getBoundingClientRect().top - 80;
    scrollBy({ top: position, behavior: 'smooth' });
  }, [ref, isSelected, scrollBy]);

  return (
    <Content
      sxBox={(theme) => ({
        ...(isSelected && { borderColor: theme.cr.getSolidBackground('blue') }),
        '&:hover': {
          borderColor: isSelected
            ? theme.cr.getSolidBackground('blue')
            : theme.cr.getSolidBackground(),
        },
      })}
      withBorder
    >
      <Spoiler
        ref={ref}
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
            {namespaceMeta && (
              <Badge leftSection={<Icon name={namespaceMeta.icon} />} size="xs">
                {namespaceMeta.name}
              </Badge>
            )}
          </Group>
          <Stack sx={(theme) => ({ color: theme.cr.getLowContrastText() })}>
            {parseMarkdown(content, { baseUrl: titleLink })}
          </Stack>
        </Stack>
      </Spoiler>
    </Content>
  );
}

export function Results({ scrollBy }) {
  const { loading, error, hits } = useSearchContext((ctx) => ctx.hits);

  if (loading) return <LoadingResult />;
  if (error) return <Error message={error.message} />;

  return hits.length === 0 ? (
    <Text>No matches</Text>
  ) : (
    <Stack spacing="lg">
      {hits.map((child, i) => (
        <Result
          key={child.id}
          refId={i + 1}
          scrollBy={scrollBy}
          {...child.fields}
        />
      ))}
    </Stack>
  );
}
