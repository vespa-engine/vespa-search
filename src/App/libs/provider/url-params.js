import { isEqual } from 'lodash';
import { NAMESPACES_BY_ID } from 'App/libs/provider/namespaces';

const DEFAULT_NAMESPACES = Object.freeze(Object.keys(NAMESPACES_BY_ID)).filter(
  (id) => id !== 'all',
);

const qpQuery = 'query';
const qpNamespace = 'namespace';

export function parseUrlParams(search) {
  const urlParams = new URLSearchParams(search);
  const query = urlParams.get(qpQuery) ?? '';
  const namespaces =
    urlParams.get(qpNamespace)?.split(',') ?? DEFAULT_NAMESPACES;
  return { query, namespaces };
}

export function createUrlParams({ query, namespaces }) {
  const queryParts = [];
  if (query.length > 0)
    queryParts.push(`${qpQuery}=${encodeURIComponent(query)}`);
  if (namespaces.length > 0 && !isEqual(namespaces, DEFAULT_NAMESPACES)) {
    if (namespaces.includes('all')) {
      namespaces = namespaces.filter((id) => id !== 'all');
    }
    queryParts.push(`${qpNamespace}=` + namespaces.join(','));
  }
  return queryParts.length > 0 ? '?' + queryParts.join('&') : '';
}
