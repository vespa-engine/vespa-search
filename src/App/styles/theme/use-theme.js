import { useLocalStorage } from '@mantine/hooks';

export function useTheme() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  });
  return { colorScheme, setColorScheme };
}
