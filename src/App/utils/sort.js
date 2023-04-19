import { get } from 'lodash';

function strictAscendingComparator(a, b, property) {
  const v1 = get(a, property);
  const v2 = get(b, property);

  if (v1 === v2) return 0;
  if (v1 == null) return -1;
  if (v2 == null) return 1;
  if (typeof v1 === typeof v2) return v1 < v2 ? -1 : 1;
  throw new Error(
    `Cannot sort by "${property}": values are of different types "${v1}" (${typeof v1}) with "${v2}" (${typeof b})`
  );
}

/**
 * Sorts array of objects by given property, throws if property has values of different types.
 * @param data Data to sort
 * @param columns list of {property, ascending} objects to sort by
 * @returns data instance passed to the method (sorted in-place)
 */
export function strictSort(data, columns) {
  if (!Array.isArray(columns)) columns = [columns];
  if (columns.length === 0) return data;
  return data.sort((a, b) => {
    for (const { property, ascending } of columns) {
      const result = strictAscendingComparator(a, b, property);
      if (result !== 0) return ascending ? result : -result;
    }
    return 0;
  });
}
