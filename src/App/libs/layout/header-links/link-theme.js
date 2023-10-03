import React from 'react';
import {
  ActionIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { Icon } from 'App/components';

export function LinkTheme() {
  const { toggleColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const isDarkMode = computedColorScheme === 'dark';
  const color = isDarkMode ? 'yellow' : 'var(--low-contrast-text)';
  const iconName = isDarkMode ? 'sun' : 'moon';

  return (
    <Tooltip label="Change appearance" position="bottom">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        variant="transparent"
        color={color}
      >
        <Icon size="lg" name={iconName} />
      </ActionIcon>
    </Tooltip>
  );
}
