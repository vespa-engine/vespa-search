import React from 'react';
import { Container, Group, Popover, Text, Title } from '@mantine/core';
import { fontWeightLight } from 'App/styles/common.js';
import { Icon } from 'App/components/index.js';
import { useMobile } from 'App/hooks';

export function AbstractTitle() {
  const isMobile = useMobile();

  return (
    <Group pt={isMobile ? 0 : 'md'} justify="space-between">
      <Title order={4} c="var(--high-contrast-text)">
        Answer{' '}
        <Text fw={fontWeightLight} size="sm" span>
          (experimental)
        </Text>
      </Title>
      <Popover withinPortal>
        <Popover.Target>
          <Text
            style={{ cursor: 'pointer' }}
            size={isMobile ? 'xs' : 'sm'}
            c="var(--vespa-color-anchor)"
          >
            <Icon name="circle-question" type="regular" /> What is this?
          </Text>
        </Popover.Target>
        <Popover.Dropdown>
          <Container size={isMobile ? '55vw' : 'xs'}>
            <Text size={isMobile ? 'xs' : 'sm'}>
              The answer&apos;s accuracy relies on your query and the search
              outcome. Irrelevant query context might influence results, and
              answers vary based on sources used. Answers aren&apos;t suitable
              for regulatory or legal purposes and shouldn&apos;t replace
              professional advice in medical, legal, or financial areas.
            </Text>
          </Container>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
