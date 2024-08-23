import React from 'react';
import { Image, useComputedColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { VespaLogoBlack, VespaLogoHeather } from 'App/assets';

export function HeaderLogo() {
  const computedColorScheme = useComputedColorScheme('light');
  const logo =
    computedColorScheme === 'dark' ? VespaLogoHeather : VespaLogoBlack;
  return (
    <Link to="https://vespa.ai/">
      <Image h={27} w="auto" src={logo} />
    </Link>
  );
}
