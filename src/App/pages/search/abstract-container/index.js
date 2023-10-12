import React from 'react';
import { ScrollArea, Stack } from '@mantine/core';
import classNames from 'App/pages/search/abstract-container/index.module.css';

export function AbstractContainer(props) {
  return (
    <ScrollArea className={classNames.scrollArea}>
      <Stack className={classNames.stack} w="100%" {...props} />
    </ScrollArea>
  );
}
