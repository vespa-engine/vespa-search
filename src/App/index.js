import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import { ThemeProvider } from 'App/styles/theme';
import { ErrorBoundary, Router, CrashPage } from 'App/libs/router';
import { Layout } from 'App/libs/layout';
import { Home } from 'App/pages/home';
import { Search } from 'App/pages/search';
import { Md } from 'App/pages/md';
import { Testcomp } from 'App/pages/testcomp';
import { SearchContextProvider } from 'App/libs/provider';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary crashPage={CrashPage}>
          <Notifications />
          <SearchContextProvider>
            <Layout>
              <Router>
                <Home path="/" />
                <Search path="/search" />
                <Md path="/md" />
                <Testcomp path="/testcomp" />
              </Router>
            </Layout>
          </SearchContextProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
}
