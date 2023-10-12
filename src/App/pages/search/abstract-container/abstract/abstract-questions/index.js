import React from 'react';
import { List, Stack, Text } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider/index.js';
import { fontWeightBold } from 'App/styles/common.js';
import classNames from 'App/pages/search/abstract-container/abstract/abstract-questions/index.module.css';
import { Icon } from 'App/components/index.js';
import { Link } from 'App/libs/router/index.js';
import { useMobile } from 'App/hooks/index.js';

export function AbstractQuestions() {
  const isMobile = useMobile();
  const questions = useSearchContext((ctx) => ctx.summary.questions);
  if (!(questions?.length > 0)) return null;

  return (
    <Stack>
      <Text size="sm" c="var(--high-contrast-text)" fw={fontWeightBold}>
        Also try these questions
      </Text>
      <List
        classNames={classNames}
        icon={<Icon name="magnifying-glass" color="blue" />}
        type="unordered"
        center
      >
        {questions.map(({ text, url }, i) => (
          <Link className={classNames.link} to={url} key={i}>
            <List.Item>
              <Text size={isMobile ? 'xs' : 'sm'} c="blue" lh={1} span>
                {text}
              </Text>
            </List.Item>
          </Link>
        ))}
      </List>
    </Stack>
  );
}
