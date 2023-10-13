import React from 'react';
import { Image, useComputedColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { VespaLogoDark, VespaLogoWhite } from 'App/assets';

export function HeaderLogo() {
  const computedColorScheme = useComputedColorScheme('light');
  const logo = computedColorScheme === 'dark' ? VespaLogoWhite : VespaLogoDark;
  return (
    <Link to="/">
      <Image h={34} w="auto" src={logo} />
    </Link>
  );
}
