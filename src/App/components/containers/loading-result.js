import React from 'react';
import { Skeleton, Stack } from '@mantine/core';
import { Content } from 'App/components';

export function LoadingResult() {
  return (
    <Content withBorder>
      <Skeleton height={21} radius="xl" />
      <Stack gap="xs">
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} radius="xl" />
      </Stack>
      <Skeleton height={8} radius="xl" width="55%" />
    </Content>
  );
}
