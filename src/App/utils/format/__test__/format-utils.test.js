import { describe, expect, test } from 'vitest';
import dayjs from 'dayjs';
import dayjs_utc from 'dayjs/plugin/utc';
import { formatDate, formatAmount } from 'App/utils';
dayjs.extend(dayjs_utc);

describe('date', function () {
  test('Invalid dates', () => {
    expect(formatDate(null)).toBe('...');
    expect(formatDate()).toBe('...');
    expect(formatDate('dsdsdsdsds')).toBe('Invalid Date');
  });

  test('Valid dates', () => {
    expect(formatDate('2022-04-23')).toBe('2022-04-23');
    expect(formatDate('2022-04-23dsdskdlskdlsds')).toBe('Invalid Date');
  });
});

describe('amount', function () {
  test('Invalid arguments should $NaN', () => {
    expect(formatAmount()).toBe('$0.00');
    expect(formatAmount('INVALID AMOUNT')).toBe('$NaN');
    expect(formatAmount(1, 'en', 'INVALID CURRENCY')).toBe('...');
    expect(formatAmount(0, 'INVALID LOCALE', 'USD')).toBe('...');
  });

  test('USD us locale', () => {
    expect(formatAmount(23.344443, 'en-us', 'USD')).toBe('$23.34');
    expect(formatAmount('23.344443', 'en-us', 'USD')).toBe('$23.34');
  });

  test('NOK no locale', () => {
    expect(formatAmount(23.344443, 'no', 'NOK')).toBe('kr 23,34');
  });

  test('USD us locale', () => {
    expect(formatAmount(23.344443, 'us', 'USD')).toBe('$23.34');
  });
});
