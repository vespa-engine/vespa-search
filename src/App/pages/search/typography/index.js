import React from 'react';
import { Stack } from '@mantine/core';
import Classnames from 'App/pages/search/typography/index.module.css';

export function Typography(props) {
  const { typography } = Classnames;
  return <Stack className={typography} {...props} />;
}
