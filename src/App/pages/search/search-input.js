import React, { useState } from 'react';
import { TextInput, ActionIcon } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Icon, Keyboard } from 'App/components/index.js';

export function SearchInput({ query, size = 'md' }) {
  const navigate = useNavigate();
  const [value, setValue] = useState(query ?? '');
  const doSearch = () => navigate(`/search?q=${value}`);

  return (
    <Keyboard onEnter={doSearch}>
      <TextInput
        icon={<Icon name="magnifying-glass" />}
        rightSection={
          <ActionIcon
            onClick={doSearch}
            variant="filled"
            color="blue"
            radius="xl"
            size="lg"
          >
            <Icon name="arrow-right" />
          </ActionIcon>
        }
        placeholder="Search questions"
        onChange={(event) => setValue(event.currentTarget.value)}
        value={value}
        size={size}
        radius="xl"
      />
    </Keyboard>
  );
}
