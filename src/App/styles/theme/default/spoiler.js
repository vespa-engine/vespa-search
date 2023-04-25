export const Spoiler = {
  defaultProps: {},
  styles: (theme) => ({
    control: {
      color: theme.cr.getSolidBackground('blue'),
      backgroundColor: theme.cr.getUiElementBackground(),
      fontSize: theme.fontSizes.sm,
      marginTop: theme.spacing.sm,
      width: '100%',
    },
  }),
};
