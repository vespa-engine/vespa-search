import '@fontsource/inter/latin-300.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';

export const styles = (theme) => ({
  '#root': {
    height: '100%',
    isolation: 'isolate',
  },

  '*': {
    margin: '0',
  },

  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  a: {
    color: theme.cr.getSolidBackground('blue'),
    cursor: 'pointer',
    textDecoration: 'none',
  },

  body: {
    WebkitFontSmoothing: 'antialiased',
    background: theme.cr.getAppBackground(),
    color: theme.cr.getHighContrastText(),
    height: '100%',
    ...theme.fn.fontStyles(),
  },

  html: {
    height: '100%',
  },

  'img, picture, video, canvas, svg': {
    display: 'block',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
});
