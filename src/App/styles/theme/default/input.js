export const Input = {
  defaultProps: {},
  styles: (theme) => ({
    input: {
      color: theme.cr.getHighContrastText(),
      '&::placeholder': { color: theme.cr.getSolidBackground('gray') },
    },
  }),
};
