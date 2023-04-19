import React, { useState } from 'react';
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Icon, Keyboard } from 'App/components/index.js';

export function SearchInput({ query }) {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState(query ?? '');
  const doSearch = () => navigate(`?q=${value}`);

  return (
    <Keyboard onEnter={doSearch}>
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
            onClick={doSearch}
          >
            <Icon name="arrow-right" />
          </ActionIcon>
        }
        placeholder="Search questions"
        rightSectionWidth={42}
        onChange={(event) => setValue(event.currentTarget.value)}
        value={value}
      />
    </Keyboard>
  );
}
