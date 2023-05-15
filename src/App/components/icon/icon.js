import React from 'react';
import { Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeSx, opacity } from 'App/styles/common';

function resolveIconName(name, maybeType) {
  if (name.startsWith('fa') && name.charAt(3) === '-') {
    if (maybeType != null)
      throw new Error(
        `Invalid usage, cannot set both name with prefix (${name}) and type (${maybeType})`
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

export function Icon({ name, type, color, disabled, sx, ...rest }) {
  const icon = resolveIconName(name, type);
  return (
    <Box
      sx={mergeSx(
        (theme) => ({
          ...(color && { color: theme.cr.getSolidBackground(color) }),
          ...(disabled && { pointerEvents: 'none', opacity }),
        }),
        sx
      )}
      component={FontAwesomeIcon}
      icon={icon}
      {...rest}
    />
  );
}
