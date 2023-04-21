import React, { forwardRef, useEffect, useState } from 'react';
import { ActionIcon, Autocomplete, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { UrlBuilder } from 'App/utils';
import { Get } from 'App/libs/fetcher';
import { Icon } from 'App/components/index.js';
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

export function SearchInput({ endpoint, query, size = 'md' }) {
  const navigate = useNavigate();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState(query ?? '');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const alive = { current: true };
    if (value.length === 0) {
      setSuggestions([]);
      return;
    }

    Get(new UrlBuilder(endpoint).add('suggest').queryParam('query', value))
      .then((response) =>
        setSuggestions(
          (response?.root?.children ?? []).map((item) => ({
            value: item.fields.term,
            type: item.fields.type,
            url: item.fields.url,
          }))
        )
      )
      .catch(() => setSuggestions([]));

    return () => {
      alive.current = false;
    };
  }, [endpoint, value]);

  const onSubmit = ({ value, url }) => {
    url ? (location.href = url) : navigate(url ?? `/search?q=${value}`);
  };

  return (
    <Autocomplete
      styles={(theme) => ({
        input: {
          ...(dropdownOpened &&
            suggestions.length > 0 && {
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
          onClick={() => onSubmit({ value })}
          variant="filled"
          color="blue"
          radius="xl"
          size="lg"
        >
          <Icon name="arrow-right" />
        </ActionIcon>
      }
      placeholder="Ask a question about Vespa"
      data={suggestions}
      onChange={setValue}
      onItemSubmit={onSubmit}
      value={value}
      size={size}
      filter={() => true}
      radius="xl"
    />
  );
}
