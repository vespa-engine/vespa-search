import React from 'react';
import { Header as MantineHeader } from '@mantine/core';
import { HeaderLogo } from 'App/libs/layout/header-logo';
import { HeaderLinks } from 'App/libs/layout/header-links';

export function Header() {
  return (
    <MantineHeader
      height={55}
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        background: theme.cr.getAppBackground(),
        borderBottom: 'none',
      })}
    >
      <HeaderLogo />
      <HeaderLinks />
    </MantineHeader>
  );
}
