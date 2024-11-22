import { isEqual, shuffle, sortedUniq } from 'lodash';
import { UrlBuilder } from 'App/utils';
import { createUrlParams } from 'App/libs/provider/url-params';
import { parseTokens } from 'App/pages/search/md-parser';
import { ALL_NAMESPACES } from 'App/libs/provider/namespaces';

const initialState = Object.freeze({ query: '', namespaces: [] });

export function createStore(set) {
  const reset = () => apply({}, setFilters({}, initialState));
  return {
    ...reset(),
    setFilters: fn(set, setFilters),
    setQuery: fn(set, setQuery),
    setNamespaces: fn(set, setNamespaces),
    toggleNamespace: fn(set, toggleNamespace),
    summaryAppend: fn(set, summaryAppend),
    summaryComplete: fn(set, summaryComplete),
    setHits: fn(set, setHits),
    selectHit: fn(set, selectHit),
    reset,
  };
}

function toggleOption(allOptions, current, item) {
  return allOptions
    .map(({ id }) => id)
    .filter((id) => (id === item) !== current.includes(id));
}

function setFilters(state, filters) {
  return Object.entries(filters).reduce((result, [key, value]) => {
    switch (key) {
      case 'query':
        return setQuery(result, value);
      case 'namespaces':
        return setNamespaces(result, value);
      default:
        throw new Error(`Unknown filter '${key}'`);
    }
  }, state);
}

function setQuery(state, query) {
  return isEqual(state.query, query) ? state : { ...state, query };
}

function setNamespaces(state, namespaces) {
  if (isEqual(state.namespaces, namespaces)) return state;
  return { ...state, namespaces };
}

function toggleNamespace(state, namespace) {
  if (namespace === 'all') {
    return setNamespaces(
      state,
      ALL_NAMESPACES.map(({ id }) => id),
    );
  }
  return setNamespaces(state, [namespace]);
  let namespaces = toggleOption(ALL_NAMESPACES, state.namespaces, namespace);
  console.log({ namespaces });
  if (namespaces.length === 0)
    namespaces = ALL_NAMESPACES.map(({ id }) => id).filter(
      (id) => id !== namespace,
    );
  return setNamespaces(state, namespaces);
}

function summaryAppend(state, summary) {
  const raw = (state.summary.raw + summary).replace('<br/>', '\n');
  return { ...state, summary: { raw } };
}

function summaryComplete(state) {
  const refs = parseTokens(state.summary.raw)
    .filter(({ type }) => type === 'ref')
    .map(({ text }) => state.hits.hits?.[parseInt(text) - 1])
    .filter((hit) => hit != null);
  const questions = shuffle(
    sortedUniq(refs.flatMap((hit) => hit.fields?.questions ?? []).sort()),
  )
    .filter((query) => query.toLowerCase() !== state.query.toLowerCase())
    .slice(0, 5)
    .map((query) => ({
      text: query,
      url: createUrlParams({ query, namespaces: state.namespaces }),
    }));
  const docIds = sortedUniq(refs.flatMap((hit) => hit.id).sort()).join(',');
  const feedbackUrl = new UrlBuilder(import.meta.env.VITE_ENDPOINT)
    .add('search')
    .queryParam('query', state.query)
    .queryParam('abstract', state.summary.raw)
    .queryParam('docids', docIds)
    .queryParam('queryProfile', 'llmsearch')
    .queryParam('reason', '')
    .toString(true);
  return {
    ...state,
    summary: { ...state.summary, questions, feedbackUrl },
  };
}

function setHits(state, hits) {
  return { ...state, hits };
}

function selectHit(state, selectedHit) {
  if (isEqual(state.selectedHit, selectedHit)) return state;
  return { ...state, selectedHit };
}

function fn(set, mapper) {
  return (input) => set((state) => apply(state, mapper(state, input)));
}

function apply(state, result) {
  // Reset hits and summary if the query has changed
  if (state.query !== result.query || state.namespaces !== result.namespaces) {
    result.hits = { loading: true };
    result.summary = { raw: '' };
  }

  // Unset selectedHit if the hits have changed
  if (state.hits !== result.hits) result.selectedHit = null;

  return Object.freeze(result);
}
