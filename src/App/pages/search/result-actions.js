import React from 'react';
import { useToggle } from '@mantine/hooks';
import { Button, Group } from '@mantine/core';
import { Icon } from 'App/components/index.js';

function Action({ icon, name, type }) {
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

export function ResultActions() {
  return (
    <Group spacing="xs">
      <Action name="Looks good" icon="thumbs-up" />
      <Action name="Looks not so good" icon="thumbs-down" />
      <Action name="Expand" icon="expand" />
      <Action name="Open in new tab" icon="external-link" />
    </Group>
  );
}
