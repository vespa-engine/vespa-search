import React from 'react';
import { Aside as MantineAside, ScrollArea } from '@mantine/core';

export function Aside({ children, ...props }) {
  return (
    <MantineAside
      sx={(theme) => ({
        backgroundColor: theme.cr.getAppBackground(),
        padding: theme.spacing.md,
        maxWidth: '33vw',
      })}
      width={{ base: '33vw' }}
      withBorder={false}
      {...props}
    >
      <MantineAside.Section grow component={ScrollArea}>
        {children}
      </MantineAside.Section>
    </MantineAside>
  );
}
