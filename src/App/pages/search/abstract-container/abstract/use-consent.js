import { useLocalStorage } from '@mantine/hooks';

export function useConsent() {
  const [value, setValue] = useLocalStorage({
    key: 'consent',
  });
  return {
    value: value === 'true',
    setValue: (value) => setValue(value.toString()),
  };
}
