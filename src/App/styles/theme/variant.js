export function variant({ theme, variant, color }) {
  switch (variant) {
    case 'light': {
      return {
        border: 'transparent',
        background: theme.cr.getSubtleBackground(color),
        color: theme.cr.getSolidBackground(color),
        hover: theme.cr.getUiElementBackground(color),
      };
    }

    case 'subtle': {
      return {
        border: 'transparent',
        background: 'transparent',
        color: theme.cr.isDarkScheme
          ? theme.cr.getLowContrastText(color)
          : theme.cr.getSolidBackground(color),
        hover: theme.cr.getUiElementBackground(color),
      };
    }

    case 'outline': {
      return {
        border: theme.cr.getSolidBackground(color),
        background: 'transparent',
        color: theme.cr.getSolidBackground(color),
        hover: theme.cr.getSubtleBackground(color),
      };
    }

    case 'default': {
      return {
        border: theme.cr.getSubtleBorderAndSeparator('gray'),
        background: theme.cr.getAppBackground('gray'),
        color: theme.cr.getHighContrastText('gray'),
        hover: theme.cr.getSubtleBackground('gray'),
      };
    }

    case 'white': {
      return {
        border: 'transparent',
        background: theme.white,
        color: theme.cr.getSolidBackground(color),
        hover: null,
      };
    }

    case 'transparent': {
      return {
        border: 'transparent',
        color: theme.cr.getSolidBackground(color),
        background: 'transparent',
        hover: null,
      };
    }

    case 'gradient': {
      return {
        color: theme.white,
        border: 'transparent',
        hover: null,
      };
    }

    default: {
      return {
        border: 'transparent',
        background: theme.cr.getSolidBackground(color),
        color: theme.white,
        hover: theme.cr.getHoveredSolidBackground(color),
      };
    }
  }
}
