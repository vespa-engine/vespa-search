import { isEqual, shuffle, sortedUniq } from 'lodash';
import { UrlBuilder } from 'App/utils';
import { createUrlParams } from 'App/libs/provider/url-params';
import { parseMarkdown, parseTokens } from 'App/pages/search/md-parser';
import { ALL_NAMESPACES } from 'App/libs/provider/namespaces';

function toggleOption(allOptions, current, item) {
  return allOptions
    .map(({ id }) => id)
    .filter((id) => (id === item) !== current.includes(id));
}

function setFilters(state, filters) {
  return Object.entries(filters).reduce((result, [key, value]) => {
    switch (key) {
      case 'query':
        return _preReducer(result, ACTION.SET_QUERY, value);
      case 'namespaces':
        return _preReducer(result, ACTION.SET_NAMESPACES, value);
      default:
        throw new Error(`Unknown filter '${key}'`);
    }
  }, state);
}

export const ACTION = Object.freeze({
  SET_FILTERS: 0,
  SET_QUERY: 1,
  SET_NAMESPACES: 2,

  TOGGLE_NAMESPACE: 12,
  SUMMARY_APPEND: 20,
  SUMMARY_COMPLETE: 21,

  SET_HITS: 50,
  SELECT_HIT: 51,
});

export function reducer(state, { action, data }) {
  const result = _preReducer(state, action, data);
  return Object.freeze(_postReducer(state, result));
}

function _preReducer(state, action, data) {
  switch (action) {
    case ACTION.SET_FILTERS:
      return setFilters(state, data);
    case ACTION.SET_QUERY:
      if (isEqual(state.query, data)) return state;
      return { ...state, query: data };
    case ACTION.SET_NAMESPACES: {
      if (isEqual(state.namespaces, data)) return state;
      return { ...state, namespaces: data };
    }

    case ACTION.TOGGLE_NAMESPACE: {
      let namespaces = toggleOption(ALL_NAMESPACES, state.namespaces, data);
      if (namespaces.length === 0)
        namespaces = ALL_NAMESPACES.map(({ id }) => id).filter(
          (id) => id !== data
        );
      return _preReducer(state, ACTION.SET_NAMESPACES, namespaces);
    }

    case ACTION.SUMMARY_APPEND: {
      const raw = (state.summary.raw + data).replace('<br/>', '\n');
      const element = parseMarkdown(raw);
      return { ...state, summary: { raw, element } };
    }
    case ACTION.SUMMARY_COMPLETE: {
      const refs = parseTokens(state.summary.raw)
        .filter(({ type }) => type === 'ref')
        .map(({ text }) => state.hits.hits?.[parseInt(text) - 1])
        .filter((hit) => hit != null);
      const questions = shuffle(
        sortedUniq(refs.flatMap((hit) => hit.fields?.questions ?? []).sort())
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
        .toString();
      return {
        ...state,
        summary: { ...state.summary, questions, feedbackUrl },
      };
    }

    case ACTION.SET_HITS:
      return { ...state, hits: data };
    case ACTION.SELECT_HIT: {
      if (isEqual(state.selectedHit, data)) return state;
      return { ...state, selectedHit: data };
    }

    default:
      throw new Error(`Unknown action ${action}`);
  }
}

function _postReducer(state, result) {
  // Unset selectedHit if the hits have changed
  if (state.hits !== result.hits) delete result.selectedHit;

  // Reset hits and summary if the query has changed
  if (state.query !== result.query || state.namespaces !== result.namespaces) {
    result.hits = { loading: true };
    result.summary = { raw: '' };
  }

  return result;
}
