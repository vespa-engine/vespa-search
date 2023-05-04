import React from 'react';
import { useToggle } from '@mantine/hooks';
import { Button, Group } from '@mantine/core';
import { Icon } from 'App/components/index.js';

function Source({ icon, name, type }) {
  const [value, toggle] = useToggle();

  return (
    <Button
      leftIcon={<Icon name={icon} type={type} />}
      color={value ? 'blue' : 'gray'}
      variant={value ? 'filled' : 'subtle'}
      onClick={() => toggle()}
      radius="xl"
      size="xs"
    >
      {name}
    </Button>
  );
}

export function SearchSources() {
  return (
    <Group position="center">
      <Source name="Documentation" icon="book" />
      <Source name="Blogs" icon="blog" />
    </Group>
  );
}
