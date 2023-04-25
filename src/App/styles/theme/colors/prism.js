export const dark = (theme) => ({
  plain: {
    color: theme.cr.getLowContrastText('gray'),
    backgroundColor: theme.cr.getSubtleBackground(),
  },

  styles: [
    {
      types: ['comment'],
      style: { color: theme.cr.getSolidBackground('gray') },
    },
    {
      types: ['string', 'inserted', 'selector', 'atrule'],
      style: { color: theme.cr.getSolidBackground('teal') },
    },
    {
      types: ['number'],
      style: { color: theme.cr.getSolidBackground('blue') },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: { color: theme.cr.getLowContrastText('orange') },
    },
    {
      types: ['punctuation'],
      style: { color: theme.cr.getLowContrastText('gray') },
    },
    {
      types: ['variable'],
      style: { color: theme.cr.getLowContrastText('gray') },
    },
    {
      types: ['class-name', 'attr-name'],
      style: { color: theme.cr.getLowContrastText('yellow') },
    },
    {
      types: ['tag', 'deleted'],
      style: { color: theme.cr.getLowContrastText('red') },
    },
    {
      types: ['operator'],
      style: { color: theme.cr.getLowContrastText('gray') },
    },
    {
      types: ['boolean'],
      style: { color: theme.cr.getLowContrastText('red') },
    },
    {
      types: ['keyword'],
      style: { color: theme.cr.getSolidBackground('indigo') },
    },
    {
      types: ['doctype'],
      style: { color: theme.cr.getLowContrastText('gray') },
    },
    {
      types: ['url'],
      style: { color: theme.cr.getLowContrastText('gray') },
    },
  ],
});

export const light = (theme) => ({
  plain: {
    color: theme.cr.getLowContrastText('gray'),
    backgroundColor: theme.cr.getAppBackground('gray'),
  },

  styles: [
    {
      types: ['comment'],
      style: { color: theme.cr.getSolidBackground('gray') },
    },
    {
      types: ['string', 'inserted'],
      style: { color: theme.cr.getLowContrastText('indigo') },
    },
    {
      types: ['number'],
      style: { color: theme.cr.getSolidBackground('blue') },
    },
    {
      types: ['builtin', 'char', 'constant', 'function', 'selector', 'atrule'],
      style: { color: theme.cr.getLowContrastText('lime') },
    },
    {
      types: ['punctuation'],
      style: { color: theme.cr.getLowContrastText('gray') },
    },
    {
      types: ['variable'],
      style: { color: theme.cr.getLowContrastText('violet') },
    },
    {
      types: ['attr-name'],
      style: { color: theme.cr.getLowContrastText('green') },
    },
    {
      types: ['class-name'],
      style: { color: theme.cr.getLowContrastText('red') },
    },
    {
      types: ['tag', 'deleted'],
      style: { color: theme.cr.getLowContrastText('violet') },
    },
    {
      types: ['operator'],
      style: { color: theme.cr.getLowContrastText('red') },
    },
    {
      types: ['boolean'],
      style: { color: theme.cr.getLowContrastText('red') },
    },
    {
      types: ['keyword'],
      style: { color: theme.cr.getLowContrastText('red') },
    },
    {
      types: ['doctype'],
      style: { color: theme.cr.getSolidBackground('gray') },
    },
    {
      types: ['url'],
      style: { color: theme.cr.getSolidBackground('gray') },
    },
  ],
});

// TODO: Simplify
export const getPrismTheme = (theme, colorScheme) =>
  colorScheme === 'dark' ? dark(theme) : light(theme);
