import React from 'react';
import { Button, Group } from '@mantine/core';
import {
  ACTION,
  ALL_NAMESPACES,
  dispatch,
  useSearchContext,
} from 'App/libs/provider';
import { Icon } from 'App/components';

function Source({ id, icon, name }) {
  const selected = useSearchContext((ctx) => ctx.namespaces.includes(id));

  return (
    <Button
      leftIcon={<Icon name={icon} />}
      color={selected ? 'blue' : 'gray'}
      variant={selected ? 'filled' : 'subtle'}
      onClick={() => dispatch(ACTION.TOGGLE_NAMESPACE, id)}
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
