import React from 'react';
import { AppShell } from '@mantine/core';
import { Header } from 'App/libs/layout/header';
import { Container } from 'App/components';

export function Layout({ children }) {
  return (
    <AppShell header={<Header />}>
      <Container withMaxWidth>{children}</Container>
    </AppShell>
  );
}
