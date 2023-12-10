import React from 'react';
import { Button, Group } from '@mantine/core';
import { ALL_NAMESPACES, useSearchContext } from 'App/libs/provider';
import { Icon } from 'App/components';
import { useMobile } from 'App/hooks';

function Source({ id, icon, name }) {
  const toggleNamespace = useSearchContext((ctx) => ctx.toggleNamespace);
  const selected = useSearchContext((ctx) => ctx.namespaces.includes(id));
  const isMobile = useMobile();
  return (
    <Button
      leftSection={<Icon name={icon} />}
      color={selected ? 'green' : 'gray'}
      variant={selected ? 'filled' : 'subtle'}
      onClick={() => toggleNamespace(id)}
      size={isMobile ? 'compact-xs' : 'xs'}
      radius="xl"
    >
      {name}
    </Button>
  );
}

export function SearchSources() {
  const isMobile = useMobile();
  return (
    <Group justify="center" gap={isMobile ? 'xs' : 'md'}>
      {ALL_NAMESPACES.map(({ id, name, icon }) => (
        <Source key={id} id={id} name={name} icon={icon} />
      ))}
    </Group>
  );
}
