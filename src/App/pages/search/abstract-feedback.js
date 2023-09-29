import React, { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { Get } from 'App/libs/fetcher';
import { useSearchContext } from 'App/libs/provider';
import { Icon } from 'App/components/index.js';

function Action({ icon, name, type, ...props }) {
  return (
    <Button
      leftSection={<Icon name={icon} type={type} />}
      color="gray"
      variant="outline"
      onClick={() => {}}
      radius="xl"
      size="xs"
      {...props}
    >
      {name}
    </Button>
  );
}

export function AbstractFeedback() {
  const feedbackUrl = useSearchContext((ctx) => ctx.summary.feedbackUrl);
  const [state, setState] = useState(0);
  if (!feedbackUrl || feedbackUrl === state) return null;

  const onClick = (url) => {
    setState(1);
    Get(url).finally(() => setState(feedbackUrl));
  };

  return (
    <Group gap="xs" grow>
      <Action
        name="Looks good"
        icon="thumbs-up"
        loading={state === 1}
        onClick={() => onClick(feedbackUrl + 'good')}
      />
      <Action
        name="Not useful"
        icon="thumbs-down"
        loading={state === 1}
        onClick={() => onClick(feedbackUrl + 'bad')}
      />
    </Group>
  );
}
