import 'App/styles/reset.css';

import '@fontsource/inter/latin-300.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';

import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/notifications/styles.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import { ColorScheme, ThemeProvider } from 'App/styles/theme';
import { ErrorBoundary, Router, CrashPage } from 'App/libs/router';
import { Layout } from 'App/libs/layout';
import { Home } from 'App/pages/home';
import { Search } from 'App/pages/search';
import { Md } from 'App/pages/md';
import { Testcomp } from 'App/pages/testcomp';
import { SearchContext } from 'App/libs/provider';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary crashPage={CrashPage}>
          <ColorScheme />
          <Notifications />
          <SearchContext />
          <Layout>
            <Router>
              <Home path="/" />
              <Search path="/search" />
              <Md path="/md" />
              <Testcomp path="/testcomp" />
            </Router>
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
}
