import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { ActionIcon, Autocomplete, Group, rem, Text } from '@mantine/core';
import { useSearchContext } from 'App/libs/provider';
import { UrlBuilder } from 'App/utils';
import { Get } from 'App/libs/fetcher';
import { Icon } from 'App/components';
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

export function SearchInput({ size = 'md', autofocus = false }) {
  const [query, filters, setQuery] = useSearchContext((ctx) => [
    ctx.query,
    ctx.namespaces.map((n) => `+namespace:${n}`).join(' '),
    ctx.setQuery,
  ]);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState(query);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  // Update search input if we go back/forward in history
  useEffect(() => setValue(query), [query]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = '';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }

    let cancelled = false;
    if (value.length === 0) {
      setSuggestions([]);
      return;
    }

    Get(
      new UrlBuilder(import.meta.env.VITE_ENDPOINT)
        .add('suggest')
        .queryParam('query', value)
        .queryParam('filters', filters)
        .queryParam('queryProfile', 'suggest')
        .toString(true)
    )
      .then(
        (response) =>
          !cancelled &&
          setSuggestions(
            (response?.root?.children ?? []).map((item) => ({
              value: item.fields.term,
              type: item.fields.type,
              url: item.fields.url,
            }))
          )
      )
      .catch(() => !cancelled && setSuggestions([]));

    return () => (cancelled = false);
  }, [filters, value]);

  const onSubmit = ({ value, url }) => {
    inputRef.current?.blur();
    url ? window.open(url, '_blank').focus() : setQuery(value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ value });
        return false;
      }}
    >
      <Autocomplete
        styles={(theme) => ({
          input: {
            overflowY: 'hidden',
            lineHeight: theme.lineHeight,
            paddingTop: `calc(${theme.spacing.sm} + ${rem(
              size === 'md' ? 0 : 1.5
            )})`, // this is a hack to fix input alignment
            paddingBottom: theme.spacing.sm,
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
        component="textarea"
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return;
          e.preventDefault();
          onSubmit({ value });
        }}
      />
    </form>
  );
}
