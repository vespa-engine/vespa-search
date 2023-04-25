import { getPrismTheme } from 'App/styles/theme/colors/prism';

export const Prism = {
  defaultProps: { getPrismTheme },
  styles: (theme) => ({
    code: {
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizes.xs,
      lineHeight: 1.7,
    },
    copy: {
      '&, &:hover': {
        backgroundColor: theme.cr.isDarkScheme
          ? theme.cr.getSubtleBackground()
          : theme.cr.getAppBackground('gray'),
      },
    },
  }),
};
