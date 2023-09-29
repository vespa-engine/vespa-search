import React from 'react';
import { Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from './icon.module.css';

function resolveIconName(name, maybeType) {
  if (name.startsWith('fa') && name.charAt(3) === '-') {
    if (maybeType != null)
      throw new Error(
        `Invalid usage, cannot set both name with prefix (${name}) and type (${maybeType})`,
      );

    const shortType = name.charAt(2);
    name = name.substring(4);
    switch (shortType) {
      case 's':
        return `fa-${name} fa-solid`;
      case 'b':
        return `fa-${name} fa-brands`;
      case 'r':
        return `fa-${name} fa-regular`;
      case 'c':
        return `fa-${name} fa-custom`;
      default:
        throw new Error(`Unknown icon prefix: ${name}`);
    }
  }
  return `fa-${name} fa-${maybeType ?? 'solid'}`;
}

export function Icon({ name, type, color, disabled, size, ...rest }) {
  const icon = resolveIconName(name, type);
  const { box } = classNames;
  return (
    <Box
      className={box}
      mod={{ disabled }}
      c={color}
      renderRoot={(props) => (
        <FontAwesomeIcon icon={icon} size={size} {...props} />
      )}
      {...rest}
    />
  );
}
