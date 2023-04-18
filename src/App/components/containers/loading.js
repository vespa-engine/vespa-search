import React from 'react';
import { Content, Message } from '..';

export function Loading({ message }) {
  return (
    <Message>
      <Content testid="loading">{message}</Content>
    </Message>
  );
}
