import React, { useEffect, useRef } from 'react';
import { ScrollArea, Tabs } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { ALL_NAMESPACES, useSearchContext } from 'App/libs/provider';
import { Icon } from 'App/components';
import { parseUrlParams } from 'App/libs/provider/url-params';

function Source({ id, icon, name, selectedTab }) {
  const toggleNamespace = useSearchContext((ctx) => ctx.toggleNamespace);
  const tabRef = useRef(null);

  useEffect(() => {
    if (selectedTab === id) {
      tabRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [id, selectedTab]);

  return (
    <Tabs.Tab
      value={id}
      onClick={() => toggleNamespace(id)}
      leftSection={<Icon name={icon} />}
      ref={tabRef}
    >
      {name}
    </Tabs.Tab>
  );
}

export function SearchSources() {
  const location = useLocation();
  const { namespaces } = parseUrlParams(location.search);
  const defaultValue = namespaces?.length === 1 ? namespaces[0] : 'all';
  return (
    <ScrollArea h="40">
      <Tabs defaultValue={defaultValue}>
        <Tabs.List style={{ flexWrap: 'nowrap' }}>
          {ALL_NAMESPACES.map(({ id, name, icon }) => (
            <Source
              key={id}
              id={id}
              name={name}
              icon={icon}
              selectedTab={defaultValue}
            />
          ))}
        </Tabs.List>
      </Tabs>
    </ScrollArea>
  );
}
