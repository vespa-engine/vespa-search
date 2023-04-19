import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  useMantineTheme,
  Text,
  MediaQuery,
  Aside,
  Footer,
  Header,
  Burger,
  Container,
} from '@mantine/core';
import { HeaderLogo } from 'App/libs/layout/header-logo.js';
import { SearchInput } from 'App/pages/draft01/search-input.js';
import { Abstract } from 'App/pages/draft01/abstract.js';

export function Draft01() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      sx={(theme) => ({
        backgroundColor: theme.cr.isDarkScheme
          ? theme.cr.getSubtleBackground()
          : theme.white,
      })}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <Header
          sx={(theme) => ({
            backgroundColor: theme.cr.isDarkScheme
              ? theme.cr.getSubtleBackground()
              : theme.white,
          })}
          height={{ base: 50, md: 70 }}
          p="md"
        >
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <HeaderLogo />
          </div>
        </Header>
      }
      navbar={
        <Navbar
          sx={(theme) => ({
            backgroundColor: theme.cr.isDarkScheme
              ? theme.cr.getSubtleBackground()
              : theme.white,
          })}
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Filters</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside
            sx={(theme) => ({
              backgroundColor: theme.cr.isDarkScheme
                ? theme.cr.getSubtleBackground()
                : theme.white,
            })}
            p="md"
            hiddenBreakpoint="sm"
            width={{ sm: 200, lg: 300 }}
          >
            <Abstract />
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer
          sx={(theme) => ({
            backgroundColor: theme.cr.isDarkScheme
              ? theme.cr.getSubtleBackground()
              : theme.white,
          })}
          height={60}
          p="md"
        >
          Footer
        </Footer>
      }
    >
      <Container>
        <SearchInput />
      </Container>
    </AppShell>
  );
}
