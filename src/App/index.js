import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import { ThemeProvider } from 'App/styles/theme';
import { ErrorBoundary, Router, CrashPage } from 'App/libs/router';
import { Layout } from 'App/libs/layout';
import { Home } from 'App/pages/home';
import { Search } from 'App/pages/search';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary crashPage={CrashPage}>
          <Notifications />
          <Layout>
            <Router>
              <Home path="/" />
              <Search path="/search" />
            </Router>
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
}
