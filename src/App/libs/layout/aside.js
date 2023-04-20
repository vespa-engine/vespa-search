import React from 'react';
import { Aside as MantineAside } from '@mantine/core';

export function Aside({ children, ...props }) {
  return (
    <MantineAside
      sx={(theme) => ({
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        backgroundColor: theme.cr.getAppBackground(),
      })}
      width={{ base: '50%' }}
      {...props}
    >
      {children}
    </MantineAside>
  );
}
