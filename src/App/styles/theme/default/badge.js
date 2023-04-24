import { rem } from '@mantine/core';

const getVariantStyles = ({ theme, variant, color }) => {
  if (variant === 'dot') {
    return {
      backgroundColor: 'transparent',
      color: theme.cr.getLowContrastText('gray'),
      border: `${rem(1)} solid ${theme.cr.getSubtleBorderAndSeparator('gray')}`,
      '&::before': {
        backgroundColor: theme.cr.getSolidBackground(color),
      },
    };
  }

  const colors = theme.other.variant({ theme, color, variant });

  return {
    border: `${rem(variant === 'gradient' ? 0 : 1)} solid ${colors.border}`,
    backgroundColor: colors.background,
    color: colors.color,
  };
};

export const Badge = {
  defaultProps: {},
  styles: (theme, { color = 'blue' }, { variant = 'light' }) => {
    return {
      root: {
        ...getVariantStyles({ theme, variant, color }),
      },
    };
  },
};
