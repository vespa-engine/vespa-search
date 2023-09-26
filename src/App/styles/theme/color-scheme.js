import { useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

export function ColorScheme() {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+J', toggleColorScheme]]);
}
