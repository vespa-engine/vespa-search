import { useLayoutEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { create } from 'zustand';
import { useConsent } from 'App/pages/search/abstract-container/abstract/use-consent.js';
import { UrlBuilder } from 'App/utils';
import { Get } from 'App/libs/fetcher';
import { createStore } from 'App/libs/provider/reducer';
import { parseUrlParams, createUrlParams } from 'App/libs/provider/url-params';

export const useSearchContext = create(createStore);
const endpoint = import.meta.env.VITE_ENDPOINT;

export function SearchContext() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryRef = useRef(null);
  const { value: abstractConsent } = useConsent();
  const [
    query,
    namespaces,
    setFilters,
    setHits,
    summaryAppend,
    summaryComplete,
  ] = useSearchContext((ctx) => [
    ctx.query,
    ctx.namespaces,
    ctx.setFilters,
    ctx.setHits,
    ctx.summaryAppend,
    ctx.summaryComplete,
  ]);

  // Every time the URL changes, update the state
  useLayoutEffect(() => {
    if (location.search === queryRef.current) return;
    setFilters(parseUrlParams(location.search));
    queryRef.current = location.search;
  }, [setFilters, location.search]);

  // Every time the query/namespaces are changed, update the URL
  useLayoutEffect(() => {
    const queryParams = createUrlParams({ query, namespaces });
    if (queryRef.current == null || queryParams === queryRef.current) return;

    queryRef.current = queryParams;
    navigate(query ? '/search' + queryParams : '/');
  }, [navigate, query, namespaces]);

  useLayoutEffect(() => {
    if (query.length === 0) return;
    const filters = namespaces.map((n) => `+namespace:${n}`).join(' ');

    let cancelled = false;

    // If the user has not consented to the abstract yet, use regular search
    if (!abstractConsent) {
      const searchUrl = new UrlBuilder(endpoint)
        .add('search')
        .queryParam('query', query)
        .queryParam('filters', filters)
        .queryParam('queryProfile', 'llmsearch')
        .toString(true);
      Get(searchUrl)
        .then(
          (result) =>
            !cancelled && setHits({ hits: result.root.children ?? [] }),
        )
        .catch((error) => !cancelled && setHits({ error }));
      return () => {
        cancelled = true;
      };
    }

    // However, if the user has consented, use RAG search
    const streamUrl = new UrlBuilder(endpoint)
      .add('sse')
      .queryParam('query', query)
      .queryParam('filters', filters)
      .queryParam('queryProfile', 'ragsearch')
      .queryParam('llm.includeHits', 'true')
      .toString(true);
    const source = new EventSource(streamUrl);
    const onToken = (e) => summaryAppend(JSON.parse(e.data).token);
    const onHits = (e) => {
      if (!cancelled) {
        const result = JSON.parse(e.data);
        setHits({ hits: result.root.children ?? [] });
      }
    };
    const onError = () => summaryComplete() || source.close();
    source.addEventListener('token', onToken);
    source.addEventListener('hits', onHits);
    source.addEventListener('error', onError);
    return () => {
      cancelled = true;
      source.close();
      source.removeEventListener('token', onToken);
      source.removeEventListener('hits', onHits);
      source.removeEventListener('error', onError);
    };
  }, [
    query,
    namespaces,
    setHits,
    summaryAppend,
    summaryComplete,
    abstractConsent,
  ]);

  return null;
}
