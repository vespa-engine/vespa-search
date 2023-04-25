import { rem } from '@mantine/core';

export const typography = (theme) => ({
  ...theme.fn.fontStyles(),
  color: theme.cr.getLowContrastText(),
  fontSize: theme.fontSizes.sm,

  '& ul, & ol': {
    '& li': {
      fontSize: theme.fontSizes.sm,
      color: theme.cr.getLowContrastText(),
    },
  },

  '& blockquote': {
    fontSize: theme.fontSizes.sm,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    color: theme.cr.getLowContrastText(),
    borderLeft: `${rem(5)} solid ${theme.cr.getSubtleBorderAndSeparator()}`,

    '& cite': {
      display: 'block',
      fontSize: theme.fontSizes.sm,
      marginTop: theme.spacing.xs,
      color: theme.cr.getSolidBackground(),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});
