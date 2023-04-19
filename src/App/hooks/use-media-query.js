import { useMediaQuery as useMantineMediaQuery } from '@mantine/hooks';

export function useMediaQuery(query) {
  return useMantineMediaQuery(query, null, {
    getInitialValueInEffect: false,
  });
}
