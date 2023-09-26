import React from 'react';
import { Button, Group } from '@mantine/core';
import { ALL_NAMESPACES, useSearchContext } from 'App/libs/provider';
import { Icon } from 'App/components';

function Source({ id, icon, name }) {
  const toggleNamespace = useSearchContext((ctx) => ctx.toggleNamespace);
  const selected = useSearchContext((ctx) => ctx.namespaces.includes(id));

  return (
    <Button
      leftSection={<Icon name={icon} />}
      color={selected ? 'blue' : 'gray'}
      variant={selected ? 'filled' : 'subtle'}
      onClick={() => toggleNamespace(id)}
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
      {ALL_NAMESPACES.map(({ id, name, icon }) => (
        <Source key={id} id={id} name={name} icon={icon} />
      ))}
    </Group>
  );
}
