export const Table = {
  defaultProps: {
    fontSize: 'md',
    verticalSpacing: 8,
  },
  styles: (theme) => ({
    root: {
      color: theme.cr.getLowContrastText(),

      '& thead tr th': {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.xs,
        color: theme.cr.getLowContrastText(),
      },
      '& thead tr th, & tbody tr td': {
        borderBottom: `1px solid ${theme.cr.getSubtleBorderAndSeparator()}`,
      },
    },
  }),
};
