import React, { forwardRef, useEffect, useRef, useState } from 'react';
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

export function SearchInput({
  endpoint,
  query = '',
  size = 'md',
  autofocus = false,
}) {
  const navigate = useNavigate();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState(query);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  // Update search input if we go back/forward in history
  useEffect(() => setValue(query), [query]);

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
    inputRef.current?.blur();
    url ? (location.href = url) : navigate(url ?? `/search?q=${value}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        inputRef.current?.blur();
        onSubmit({ value });
        return false;
      }}
    >
      <Autocomplete
        styles={(theme) => ({
          input: {
            ...(dropdownOpened &&
              suggestions.length > 0 && {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: theme.radius.lg,
                borderTopRightRadius: theme.radius.lg,
                '&:focus, &:focus-within': {
                  borderBottomColor: 'transparent',
                },
              }),
          },
          dropdown: {
            ...theme.focusRingStyles.inputStyles(theme),
            borderBottomLeftRadius: theme.radius.lg,
            borderBottomRightRadius: theme.radius.lg,
            borderTop: 'none',
            overflow: 'hidden',
            marginTop: -10,
          },
          item: { color: theme.cr.getLowContrastText() },
        })}
        ref={(ref) => {
          if (!ref) return;
          inputRef.current = ref;
          if (autofocus) ref.focus();
        }}
        onDropdownOpen={() => setDropdownOpened(true)}
        onDropdownClose={() => setDropdownOpened(false)}
        icon={<Icon name="magnifying-glass" />}
        itemComponent={AutoCompleteItem}
        rightSection={
          <ActionIcon
            type="submit"
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
    </form>
  );
}
