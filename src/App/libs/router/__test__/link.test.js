import { expect, test } from 'vitest';
import { isInternalLink } from '../link';

test('external links', () => {
  expect(isInternalLink('http://www.vg.no')).toBeFalsy();
  expect(isInternalLink('gopher://gopher.floodgap.com/1/world')).toBeFalsy();
  expect(
    isInternalLink('slack://channel?team=T025DU6HX&id=C6KT1FC9L')
  ).toBeFalsy();
});

test('invalid links', () => {
  expect(isInternalLink()).toBeFalsy();
  expect(isInternalLink(null)).toBeFalsy();
  expect(isInternalLink('')).toBeFalsy();
});

test('internal links', () => {
  expect(isInternalLink('/search')).toBeTruthy();
  expect(isInternalLink('/')).toBeTruthy();
});
