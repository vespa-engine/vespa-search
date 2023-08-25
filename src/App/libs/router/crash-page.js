import React from 'react';
import { Anchor, Space, Stack, Text, Title } from '@mantine/core';
import { Icon } from 'App/components';

export function CrashPage({ error }) {
  return (
    <Stack
      sx={(theme) => ({ color: theme.cr.getSolidBackground('blue') })}
      align="center"
    >
      <Space h={55} />
      <Icon name="bug" size="4x" />
      <Title>You encountered a bug</Title>
      <Text color="blue">This is our fault.</Text>
      <Text color="blue">
        Not much you can do about it, but here are three suggestions anyway
      </Text>
      <Anchor color="blue" href={window.location.href}>
        Reload page - you never know
      </Anchor>
      <Anchor
        color="blue"
        href="mailto:support@vespa.ai?subject=Vespa Seach crash"
      >
        Email us a bug report, please include the information below
      </Anchor>
      <textarea
        rows={10}
        cols={80}
        onClick={(e) => e.target.select()}
        readOnly="readonly"
        value={JSON.stringify(error, null, 2)}
        style={{ backgroundColor: '#fff', color: '#000' }}
      />
    </Stack>
  );
}
