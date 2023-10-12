import React, { useEffect, useRef } from 'react';
import { Badge, Group, Spoiler, Stack, Text, Title } from '@mantine/core';
import { NAMESPACES_BY_ID, useSearchContext } from 'App/libs/provider/index.js';
import { parseMarkdown } from 'App/pages/search/md-parser.js';
import { Content, Error, Icon, LoadingResult } from 'App/components/index.js';
import { Typography } from 'App/pages/search/typography/index.js';
import { Link } from 'App/libs/router/index.js';
import classNames from 'App/pages/search/results-container/results/index.module.css';

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
  const { titleResult, iconExternal, spoilerControl } = classNames;

  useEffect(() => {
    if (!isSelected || !ref.current) return;
    const position = ref.current.getBoundingClientRect().top - 85;
    scrollBy({ top: position, behavior: 'smooth' });
  }, [ref, isSelected, scrollBy]);

  return (
    <Content selected={isSelected} withBorder>
      <Spoiler
        classNames={{ control: spoilerControl }}
        ref={ref}
        maxHeight={233}
        showLabel="Show more"
        hideLabel="Show less"
        pb="md"
      >
        <Typography>
          <Group justify="space-between" gap="xs">
            <Title
              lh={1.2}
              className={titleResult}
              id={`result-${refId}`}
              component={Link}
              to={titleLink}
            >
              [{refId}] {title}{' '}
              <Icon
                className={iconExternal}
                name="external-link"
                color="gray"
                size="2xs"
              />
            </Title>
            {namespaceMeta && (
              <Badge
                leftSection={<Icon name={namespaceMeta.icon} />}
                variant="light"
                size="xs"
              >
                {namespaceMeta.name}
              </Badge>
            )}
          </Group>
          <Stack style={{ color: 'var(--low-contrast-text)' }}>
            {parseMarkdown(content, { baseUrl: titleLink })}
          </Stack>
        </Typography>
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
    <Stack gap="lg">
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
