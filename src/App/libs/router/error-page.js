import React from 'react';
import { useLocation } from 'react-router-dom';
import { Text, Title } from '@mantine/core';
import { Message } from 'App/components';

const getMessage = (code, location) => {
  const numberCode =
    parseInt(code || new URLSearchParams(location?.search).get('code')) || 404;

  switch (numberCode) {
    case 403:
      return 'Sorry, you are not authorized to view this page.';
    case 404:
      return 'Sorry, the page you were looking for does not exist.';
    case 500:
      return 'Oops... something went wrong.';
    default:
      return `Unknown error (${code}) - really, I have no idea what is going on here.`;
  }
};

export function ErrorPage({ code }) {
  const location = useLocation();
  const message = getMessage(code, location);
  return (
    <Message style={{ height: '100%' }}>
      <Title>
        <Text
          sx={(theme) => ({ color: theme.cr.getSolidBackground() })}
          weight={400}
          color="blue"
          inherit
        >
          {message}
        </Text>
      </Title>
    </Message>
  );
}
