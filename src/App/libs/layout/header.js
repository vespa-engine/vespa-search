import React from 'react';
import { Header as MantineHeader } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { HeaderLogo } from 'App/libs/layout/header-logo';
import { HeaderLinks } from 'App/libs/layout/header-links';
import { Container } from 'App/components';

export function Header() {
  const location = useLocation();
  const withBorder = location.pathname !== `/`;
  return (
    <MantineHeader
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        background: withBorder ? theme.cr.getAppBackground() : 'transparent',
      })}
      withBorder={withBorder}
      height={55}
    >
      <Container
        sx={{ gridAutoFlow: 'column', justifyContent: 'space-between' }}
      >
        <HeaderLogo />
        <HeaderLinks />
      </Container>
    </MantineHeader>
  );
}
