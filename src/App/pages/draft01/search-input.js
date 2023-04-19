import React from 'react';
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { Icon } from 'App/components/index.js';

export function SearchInput(props) {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<Icon name="magnifying-glass" />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <Icon name="arrow-right" />
        </ActionIcon>
      }
      placeholder="Search questions"
      rightSectionWidth={42}
      {...props}
    />
  );
}
