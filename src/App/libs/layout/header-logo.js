import React from 'react';
import { Image, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { VespaLogoDark, VespaLogoWhite } from 'App/assets';

export function HeaderLogo() {
  const { cr } = useMantineTheme();
  return (
    <Link to="/">
      {cr.isDarkScheme ? (
        <Image height={34} width="auto" src={VespaLogoWhite} />
      ) : (
        <Image height={34} width="auto" src={VespaLogoDark} />
      )}
    </Link>
  );
}
