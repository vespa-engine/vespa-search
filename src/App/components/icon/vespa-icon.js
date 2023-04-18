import React from 'react';
import { Box, Group } from '@mantine/core';
import { VespaIcon as VespaIconSvg } from 'App/assets';
import { opacity } from 'App/styles/common';

const Icon = ({ disabled, ...props }) => {
  return (
    <Box
      sx={{
        ':before': { content: `url(${VespaIconSvg})` },
        lineHeight: 0,
        ...(disabled && { pointerEvents: 'none', opacity }),
      }}
      className="fa-fw"
      component="i"
      {...props}
    />
  );
};

export function VespaIcon({ text, ...iconProps }) {
  return (
    <Group sx={{ lineHeight: 1 }} noWrap>
      <Icon {...iconProps} />
      {text}
    </Group>
  );
}
