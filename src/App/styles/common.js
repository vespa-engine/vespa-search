import { em, rem } from '@mantine/core';

// maximum width for a content container
export const maxWidth = 1920;

// default border radius for all elements
export const borderRadius = rem(2);

// default opacity for disabled elements
export const opacity = 0.34;

// Default font weights for text with Lato font
export const fontWeightLight = 300;
export const fontWeightRegular = 400;
export const fontWeightBold = 700;

// default breakpoint for responsive design - same as theme.breakpoints
export const breakpoints = {
  xs: em(576),
  sm: em(768),
  md: em(992),
  lg: em(1200),
  xl: em(1400),
};

export const toggleEffect = Object.freeze({
  cursor: 'pointer',
  opacity,
  '&:hover': { opacity: 0.9 },
  '&.active': { opacity: 1 },
});

export const mergeSx = (a = {}, b = {}) => {
  if (typeof a !== 'function' && typeof b !== 'function') return { ...a, ...b };
  return (theme) => ({
    ...(typeof a === 'function' ? a(theme) : a),
    ...(typeof b === 'function' ? b(theme) : b),
  });
};

export const getInputLabelStyles = ({ cr, fontSizes }) => ({
  textTransform: 'uppercase',
  fontSize: fontSizes.xs,
  fontWeight: fontWeightBold,
  color: cr.getLowContrastText(),
});
