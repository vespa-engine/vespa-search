import { Badge as MantineBadge } from '@mantine/core';

export const Badge = MantineBadge.extend({
  vars: (theme, { variant, color }) => {
    const _color = color || theme.primaryColor;
    if (variant === 'light') {
      return {
        root: {
          color: `var(--low-contrast-text-${_color})`,
          background: `var(--ui-element-background-${_color})`,
          hover: `var(--hovered-ui-element-background-${_color})`,
        },
      };
    }
  },
  defaultProps: {},
  styles: {},
});
