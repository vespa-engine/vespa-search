import React, { useEffect, useRef, useState } from 'react';
import {
  ActionIcon,
  Combobox,
  Group,
  Text,
  Textarea,
  useCombobox,
} from '@mantine/core';
import classNames from 'App/pages/search/search-input/index.module.css';
import { useSearchContext } from 'App/libs/provider';
import { UrlBuilder } from 'App/utils';
import { Get } from 'App/libs/fetcher';
import { Icon } from 'App/components';
import { Link } from 'App/libs/router';
import { useMobile } from 'App/hooks';

export function SearchInput({ size = 'md', autofocus = false }) {
  const [query, filters, setQuery] = useSearchContext((ctx) => [
    ctx.query,
    ctx.namespaces.map((n) => `+namespace:${n}`).join(' '),
    ctx.setQuery,
  ]);
  const [value, setValue] = useState(query);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const combobox = useCombobox();
  const isMobile = useMobile();
  const { input, dropdown } = classNames;

  // Update search input if we go back/forward in history
  useEffect(() => setValue(query), [query]);

  useEffect(() => {
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
        .toString(true),
    )
      .then(
        (response) =>
          !cancelled &&
          setSuggestions(
            (response?.root?.children ?? []).map((item) => ({
              value: item.fields.term,
              type: item.fields.type,
              url: item.fields.url,
            })),
          ),
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
      <Combobox
        classNames={{ dropdown }}
        onOptionSubmit={(value) => {
          onSubmit(value);
          combobox.closeDropdown();
        }}
        store={combobox}
      >
        <Combobox.Target>
          <Textarea
            autosize
            classNames={{ input }}
            data-suggestions={suggestions.length > 0}
            ref={(ref) => {
              if (!ref) return;
              inputRef.current = ref;
              if (autofocus) ref.focus();
            }}
            leftSection={<Icon name="magnifying-glass" />}
            rightSection={
              <ActionIcon
                type="submit"
                variant="filled"
                color="blue"
                radius="xl"
                size={isMobile ? 'md' : 'lg'}
              >
                <Icon name="arrow-right" />
              </ActionIcon>
            }
            placeholder="Ask a question about Vespa"
            value={value}
            onChange={(event) => {
              combobox.openDropdown();
              combobox.updateSelectedOptionIndex();
              setValue(event.currentTarget.value);
            }}
            onClick={() => combobox.openDropdown()}
            onFocus={() => combobox.openDropdown()}
            onBlur={() => combobox.closeDropdown()}
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return;
              e.preventDefault();
              onSubmit({ value });
            }}
            size={isMobile ? 'sm' : size}
            radius="xl"
          />
        </Combobox.Target>

        {suggestions.length > 0 && (
          <Combobox.Dropdown>
            <Combobox.Options>
              {suggestions.map(({ value, type, url }) => (
                <Combobox.Option value={{ value, url, type }} key={value}>
                  <Group justify="space-between" wrap="nowrap">
                    <Text>{value}</Text>
                    {type && <Link to={url}>{type}</Link>}
                  </Group>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox.Dropdown>
        )}
      </Combobox>
    </form>
  );
}
