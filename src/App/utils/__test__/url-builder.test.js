import { expect, test } from 'vitest';
import { UrlBuilder } from '..';

test('constructor', () => {
  expect(new UrlBuilder('https://domain.tld/my/path/here').toString()).toBe(
    'https://domain.tld/my/path/here'
  );

  expect(new UrlBuilder('/my/path/here').toString()).toBe('/my/path/here');

  expect(new UrlBuilder('my/path/here/').toString()).toBe('/my/path/here');

  expect(
    new UrlBuilder(
      new UrlBuilder('my/path/here/')
        .add('test')
        .queryParam('key1', 'val1')
        .queryParam('key2', 'val2')
    ).toString()
  ).toBe('/my/path/here/test?key1=val1&key2=val2');
});

test('add', () => {
  expect(
    new UrlBuilder('/path/').add('/test/').add('/multiple/sub/').toString()
  ).toBe('/path/test/multiple/sub');

  expect(new UrlBuilder('path').add(15).toString()).toBe('/path/15');
});

test('trailing slash', () => {
  expect(new UrlBuilder('/path').add('test').toString(true)).toBe(
    '/path/test/'
  );

  expect(
    new UrlBuilder('/path').add('test').queryParam('key', 'val').toString(true)
  ).toBe('/path/test/?key=val');
});

test('correctly parses query component', () => {
  expect(new UrlBuilder('/path/?a=b&c=123').query).toBe('?a=b&c=123');

  expect(
    new UrlBuilder('/path/').queryParam('a', 'b').queryParam('c', 123).query
  ).toBe('?a=b&c=123');

  expect(new UrlBuilder('path').query).toBe('');
});
