import { rem } from '@mantine/core';

const getVariantStyles = ({ theme, variant, color }) => {
  const colors = theme.other.variant({ theme, color, variant });

  if (variant === 'gradient') {
    return {
      border: 0,
      '&:hover': theme.fn.hover({ backgroundSize: '200%' }),
    };
  }

  return {
    border: `${rem(1)} solid ${colors.border}`,
    backgroundColor: colors.background,
    color: colors.color,
    ...theme.fn.hover({ backgroundColor: colors.hover }),
  };
};

export const ActionIcon = {
  defaultProps: {},
  styles: (theme, { color = 'blue' }, { variant = 'filled' }) => {
    return {
      root: {
        ...getVariantStyles({ theme, variant, color }),
      },
    };
  },
};
