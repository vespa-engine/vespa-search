import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import { ThemeProvider } from 'App/styles/theme';
import { ErrorBoundary, Router, CrashPage } from 'App/libs/router';
import Home from 'App/pages/home';
import Search from 'App/pages/search';
import { Draft01 } from 'App/pages/draft01/index.js';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary crashPage={CrashPage}>
          <Notifications />
          <Router>
            <Home path="/" />
            <Search path="/search" />
            <Draft01 path="/draft01" />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
}
