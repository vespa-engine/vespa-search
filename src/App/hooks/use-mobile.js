import { useMediaQuery } from '@mantine/hooks';
import { breakpoints } from 'App/styles/common.js';

export function useMobile() {
  return useMediaQuery(`(max-width: ${breakpoints.sm})`, null, {
    getInitialValueInEffect: false,
  });
}
