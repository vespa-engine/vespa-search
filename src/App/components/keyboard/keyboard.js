import { Children, cloneElement } from 'react';

const KEYS = Object.freeze({
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
});

export function Keyboard({ children, ...restProps }) {
  const onKeyDownHandler = (event, ...rest) => {
    const key = event.keyCode ? event.keyCode : event.which;
    const callbackName = KEYS[key];
    if (callbackName && restProps[callbackName]) {
      restProps[callbackName](event, ...rest);
    }
  };

  return cloneElement(Children.only(children), {
    onKeyDown: onKeyDownHandler,
  });
}
