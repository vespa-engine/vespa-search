export const Code = {
  defaultProps: {},
  styles: (theme) => ({
    root: {
      color: theme.cr.getLowContrastText('gray'),
      backgroundColor: theme.cr.isDarkScheme
        ? theme.cr.getSubtleBackground()
        : theme.cr.getAppBackground('gray'),
    },
  }),
};
