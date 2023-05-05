import React from 'react';
import { Button, Group } from '@mantine/core';
import { Icon } from 'App/components/index.js';

function Action({ icon, name, type }) {
  return (
    <Button
      leftIcon={<Icon name={icon} type={type} />}
      color="gray"
      variant="outline"
      onClick={() => {}}
      radius="xl"
      size="xs"
    >
      {name}
    </Button>
  );
}

export function AbstractFeedback() {
  return (
    <Group spacing="xs">
      <Action name="Looks good" icon="thumbs-up" />
      <Action name="Looks not so good" icon="thumbs-down" />
    </Group>
  );
}
