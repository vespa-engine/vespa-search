// import '@fontsource/lato/latin-300.css';
// import '@fontsource/lato/latin-300-italic.css';
// import '@fontsource/lato/latin-400.css';
// import '@fontsource/lato/latin-400-italic.css';
// import '@fontsource/lato/latin-700.css';
// import '@fontsource/lato/latin-700-italic.css';

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
