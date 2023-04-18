import React from 'react';
import { AppShell } from '@mantine/core';
import { Header } from 'App/libs/layout/header';

export function Layout({ children }) {
  return <AppShell header={<Header />}>{children}</AppShell>;
}
