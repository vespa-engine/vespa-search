import React from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { Icon } from 'App/components';
import { useTheme } from 'App/styles/theme';

export function LinkTheme() {
  const { colorScheme, setColorScheme } = useTheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Tooltip label="Change appearance" position="bottom">
      <ActionIcon
        variant="transparent"
        color={isDarkMode ? 'yellow' : 'gray'}
        onClick={() => setColorScheme(isDarkMode ? 'light' : 'dark')}
      >
        <Icon size="lg" name={isDarkMode ? 'sun' : 'moon'} />
      </ActionIcon>
    </Tooltip>
  );
}
