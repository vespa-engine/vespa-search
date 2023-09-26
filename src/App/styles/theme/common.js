import { rem } from '@mantine/core';

export const common = {
  black: '#151718',
  defaultRadius: 'xs',
  cursorType: 'pointer',
  fontFamily: 'Inter, sans-serif',
  spacing: {
    xs: rem(5),
    sm: rem(8),
    md: rem(13),
    lg: rem(21),
    xl: rem(34),
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '1.3333rem', lineHeight: 1, fontWeight: 600 },
      h2: { fontSize: '1.1875rem', lineHeight: 1, fontWeight: 400 },
      h3: { fontSize: '1.1042rem', lineHeight: 1, fontWeight: 400 },
      h4: { fontSize: '1.0417rem', lineHeight: 1, fontWeight: 600 },
      h5: { fontSize: '1rem', lineHeight: 1, fontWeight: 600 },
      h6: { fontSize: '0.9375rem', lineHeight: 1, fontWeight: 600 },
    },
  },
};
