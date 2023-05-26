import React, { useLayoutEffect, useReducer, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createContext, useContextSelector } from 'use-context-selector';
import { UrlBuilder } from 'App/utils';
import { Get } from 'App/libs/fetcher';
import { ACTION, reducer } from 'App/libs/provider/reducer';
import { parseUrlParams, createUrlParams } from 'App/libs/provider/url-params';

const context = createContext(null);
const endpoint = import.meta.env.VITE_ENDPOINT;

export function SearchContextProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryRef = useRef(location.search);

  const [value, searchContextDispatch] = useReducer(
    reducer,
    {
      query: '',
      namespaces: [],
    },
    (s) =>
      reducer(s, {
        action: ACTION.SET_FILTERS,
        data: parseUrlParams(location.search),
      })
  );

  useLayoutEffect(() => {
    window.searchContextDispatch = searchContextDispatch;
    return () => delete window.searchContextDispatch;
  }, []);

  // Every time the URL changes, update the state
  useLayoutEffect(() => {
    if (location.search === queryRef.current) return;
    dispatch(ACTION.SET_FILTERS, parseUrlParams(location.search));
    queryRef.current = location.search;
  }, [location.search]);

  // Every time the query/namespaces are changed, update the URL
  useLayoutEffect(() => {
    const queryParams = createUrlParams({
      query: value.query,
      namespaces: value.namespaces,
    });
    if (queryParams === window.location.search) return;

    queryRef.current = queryParams;
    navigate((value.query ? '/search' : '/') + queryParams);
  }, [navigate, value.query, value.namespaces]);

  useLayoutEffect(() => {
    if (value.query.length === 0) return;
    const filters = value.namespaces.map((n) => `+namespace:${n}`).join(' ');

    const streamUrl = new UrlBuilder(endpoint)
      .add('stream')
      .queryParam('query', value.query)
      .queryParam('filters', filters)
      .toString(true);
    const source = new EventSource(streamUrl);
    source.addEventListener('message', (e) =>
      dispatch(ACTION.SUMMARY_APPEND, e.data)
    );
    source.addEventListener(
      'error',
      () => dispatch(ACTION.SUMMARY_COMPLETE) || source.close()
    );

    let cancelled = false;
    const searchUrl = new UrlBuilder(endpoint)
      .add('search')
      .queryParam('query', value.query)
      .queryParam('filters', filters)
      .toString(true);
    Get(searchUrl)
      .then(
        (result) =>
          !cancelled &&
          dispatch(ACTION.SET_HITS, { hits: result.root.children ?? [] })
      )
      .catch((error) => !cancelled && dispatch(ACTION.SET_HITS, { error }));
    return () => {
      cancelled = true;
      source.close();
    };
  }, [value.query, value.namespaces]);

  return <context.Provider value={value}>{children}</context.Provider>;
}

export function useSearchContext(selector) {
  const func = typeof selector === 'string' ? (c) => c[selector] : selector;
  return useContextSelector(context, func);
}

export function dispatch(action, data) {
  window.searchContextDispatch({ action, data });
}
