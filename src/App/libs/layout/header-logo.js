import React from 'react';
import { Image, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { VespaLogoDarkNoColor, VespaLogoWhiteNoColor } from 'App/assets';

export function HeaderLogo() {
  const { cr } = useMantineTheme();
  return (
    <Link to="/">
      {cr.isDarkScheme ? (
        <Image height={34} width="auto" src={VespaLogoWhiteNoColor} />
      ) : (
        <Image height={34} width="auto" src={VespaLogoDarkNoColor} />
      )}
    </Link>
  );
}
