function process(string, { regex, fn }) {
  if (typeof string !== 'string') return string;

  const result = [];
  let key = 0;
  let match = null;

  while ((match = regex.exec(string)) !== null) {
    result.push(string.substring(0, match.index));
    result.push(fn(key++, match));

    string = string.substring(match.index + match[0].length);
    regex.lastIndex = 0;
  }

  result.push(string);
  return result;
}

export function processString(input, processors) {
  if (typeof input === 'string') input = [input];
  else if (!Array.isArray(input) || !input.length) return input;

  for (const processor of processors)
    input = input.flatMap((i) => process(i, processor));
  return input;
}
