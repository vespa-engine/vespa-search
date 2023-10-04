import React from 'react';
import { AppShell } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import classNames from 'App/libs/layout/index.module.css';
import { Container } from 'App/components';
import { HeaderLogo } from 'App/libs/layout/header-logo';
import { HeaderLinks } from 'App/libs/layout/header-links';

export function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === `/`;
  const withBorder = location.pathname !== `/`;
  const { root, header, container } = classNames;
  return (
    <AppShell
      classNames={{ root, header }}
      data-is-home={isHome}
      header={{ height: 55 }}
      padding="md"
    >
      <AppShell.Header withBorder={withBorder}>
        <Container className={container}>
          <HeaderLogo />
          <HeaderLinks />
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
