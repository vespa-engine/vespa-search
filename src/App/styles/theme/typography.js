import { rem } from '@mantine/core';
import {
  fontWeightBold,
  fontWeightLight,
  fontWeightRegular,
} from 'App/styles/common';

export const typography = () => (theme) => ({
  ...theme.fn.fontStyles(),
  color: theme.cr.getHighContrastText(),
  fontSize: theme.fontSizes.sm,

  h1: {
    fontSize: '2.0625rem',
    fontWeight: fontWeightBold,
    wordBreak: 'break-word',
  },

  h2: {
    fontSize: '1.5417rem',
    fontWeight: fontWeightLight,
    wordBreak: 'break-word',
  },

  h3: {
    fontSize: '1.2917rem',
    fontWeight: fontWeightRegular,
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
  },

  h4: {
    fontSize: '1.1458rem',
    fontWeight: fontWeightBold,
    textTransform: 'capitalize',
  },

  h5: {
    fontSize: '1.0625rem',
    fontWeight: fontWeightLight,
    textTransform: 'uppercase',
    letterSpacing: '.15rem',
  },

  h6: {
    fontSize: '1rem',
    fontWeight: fontWeightRegular,
    fontStyle: 'italic',
    letterSpacing: '0!important',
  },

  '& ul, & ol': {
    '& li': {
      fontSize: theme.fontSizes.sm,
      color: theme.cr.getHighContrastText(),
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
