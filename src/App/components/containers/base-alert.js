import React from 'react';
import { Alert } from '@mantine/core';
import { Icon, Container } from '..';

function BaseAlert({ message, icon, color, ...props }) {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Alert icon={icon && <Icon name={icon} />} color={color} {...props}>
        {message}
      </Alert>
    </Container>
  );
}

export const Warning = (props) => <BaseAlert color="yellow" {...props} />;
export const Error = (props) => <BaseAlert color="red" {...props} />;
