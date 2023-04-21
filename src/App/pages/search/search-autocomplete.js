import React, { forwardRef, useState } from 'react';
import { ActionIcon, Autocomplete, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Icon, Keyboard } from 'App/components/index.js';
import { Link } from 'App/libs/router';

const AutoCompleteItem = forwardRef(({ value, type, url, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <Group position="apart" noWrap>
        <Text>{value}</Text>
        {type && <Link to={url}>{type}</Link>}
      </Group>
    </div>
  );
});

export function SearchAutocomplete({ query, size = 'md' }) {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const navigate = useNavigate();
  const [value, setValue] = useState(query ?? '');
  const doSearch = () => navigate(`/search?q=${value}`);

  const fromApi = [
    { term: 'hnsw', type: 'reference', url: '/reference/hnsw.html' },
    { term: 'hnsw operations', type: '', url: '' },
    { term: 'multi-vector hnsw indexing', type: '', url: '' },
  ];

  const data = fromApi.map((item) => ({ ...item, value: item.term }));

  return (
    <Keyboard onEnter={doSearch}>
      <Autocomplete
        styles={(theme) => ({
          input: {
            ...(dropdownOpened && {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              '&:focus, &:focus-within': {
                borderBottomColor: 'transparent',
              },
            }),
          },
          dropdown: {
            ...theme.focusRingStyles.inputStyles(theme),
            borderBottomLeftRadius: theme.radius.xl,
            borderBottomRightRadius: theme.radius.xl,
            borderTop: 'none',
            marginTop: -10,
          },
        })}
        onDropdownOpen={() => setDropdownOpened(true)}
        onDropdownClose={() => setDropdownOpened(false)}
        icon={<Icon name="magnifying-glass" />}
        itemComponent={AutoCompleteItem}
        rightSection={
          <ActionIcon
            onClick={doSearch}
            variant="filled"
            color="blue"
            radius="xl"
            size="lg"
          >
            <Icon name="arrow-right" />
          </ActionIcon>
        }
        placeholder="Ask a question about Vespa"
        data={data}
        onChange={setValue}
        value={value}
        size={size}
        radius="xl"
      />
    </Keyboard>
  );
}
