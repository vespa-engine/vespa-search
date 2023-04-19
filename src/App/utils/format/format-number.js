const base2prefixes = [
  { value: 1e16, symbol: 'P' },
  { value: 1e12, symbol: 'T' },
  { value: 1e9, symbol: 'G' },
  { value: 1e6, symbol: 'M' },
  { value: 1e3, symbol: 'k' },
  { value: 1, symbol: '' },
];

const base10prefixes = [
  { value: 1e12, symbol: 'T' },
  { value: 1e9, symbol: 'B' },
  { value: 1e6, symbol: 'M' },
  { value: 1e3, symbol: 'k' },
  { value: 1, symbol: '' },
];

export function formatNumber2(num, unit = '', decimals = 1) {
  return formatNumber(num, unit, decimals, base2prefixes);
}

export function formatNumber10(num, unit = '', decimals = 1) {
  return formatNumber(num, unit, decimals, base10prefixes);
}

function formatNumber(num, unit, decimals, prefixes) {
  let i = 0;
  while (i < prefixes.length - 1 && Math.abs(num) < prefixes[i].value) i++;
  const { value, symbol } = prefixes[i];
  return (num / value).toFixed(decimals) + ' ' + symbol + unit;
}
