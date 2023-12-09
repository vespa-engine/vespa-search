import React from 'react';
import { Group } from '@mantine/core';
import { LinkTheme } from 'App/libs/layout/header-links/link-theme';
import { Icon } from 'App/components';
import { Link } from 'App/libs/router';

export function HeaderLinks() {
  return (
    <Group wrap="nowrap" gap="lg">
      <Link to="https://github.com/vespa-engine/vespa">
        <Icon
          color="var(--header-links)"
          name="github"
          type="brands"
          size="lg"
        />
      </Link>
      <Link to="http://slack.vespa.ai">
        <Icon
          color="var(--header-links)"
          name="slack"
          type="brands"
          size="lg"
        />
      </Link>
      <LinkTheme />
    </Group>
  );
}
