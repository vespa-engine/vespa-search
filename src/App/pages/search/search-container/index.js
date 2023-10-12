import React from 'react';
import { Container } from 'App/components/index.js';
import classNames from 'App/pages/search/search-container/index.module.css';

export function SearchContainer(props) {
  return <Container className={classNames.container} {...props} />;
}
