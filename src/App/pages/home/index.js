import React from 'react';
import { Container } from '@mantine/core';
import { Link } from 'App/libs/router';

export default function Home() {
  return (
    <Container>
      <Link to="draft01">draft-01</Link>
    </Container>
  );
}
