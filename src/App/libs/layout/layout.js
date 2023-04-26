import React from 'react';
import { AppShell } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { Header } from 'App/libs/layout/header';
import { Container } from 'App/components';

export function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === `/`;
  return (
    <AppShell
      styles={(theme) => ({
        root: {
          ...(isHome && {
            backgroundImage: theme.cr.isDarkScheme
              ? 'radial-gradient(circle at center center, transparent 0%, rgb(21, 23, 24) 99%),\n' +
                'repeating-linear-gradient(0deg, rgb(16, 36, 62) 0px, rgb(16, 36, 62) 1px, transparent 1px, transparent 6px),\n' +
                'repeating-linear-gradient(90deg, rgb(16, 36, 62) 0px, rgb(16, 36, 62) 1px, transparent 1px, transparent 6px),\n' +
                'linear-gradient(90deg, rgb(21, 23, 24), rgb(21, 23, 24));'
              : 'radial-gradient(circle at center center, transparent 0%, rgb(251, 252, 253) 99%),\n' +
                'repeating-linear-gradient(0deg, rgb(237, 246, 255) 0px, rgb(237, 246, 255) 1px, transparent 1px, transparent 6px),\n' +
                'repeating-linear-gradient(90deg, rgb(237, 246, 255) 0px, rgb(237, 246, 255) 1px, transparent 1px, transparent 6px),\n' +
                'linear-gradient(90deg, rgb(251, 252, 253), rgb(251, 252, 253));',
          }),
        },
      })}
      header={<Header />}
    >
      <Container>{children}</Container>
    </AppShell>
  );
}
