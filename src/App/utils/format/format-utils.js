import dayjs from 'dayjs';

export const formatAmount = (amount, locale, currency = 'USD') => {
  try {
    const formatter = new Intl.NumberFormat(locale || navigator.language, {
      style: 'currency',
      currency: currency,
    });
    return formatter.format(amount || 0);
  } catch {
    return '...';
  }
};

export const formatDate = (dateStr) => {
  if (dateStr) {
    const fromdayjs = dayjs.utc(dateStr, 'YYYY-MM-DD');
    return fromdayjs.format('YYYY-MM-DD');
  }
  return '...';
};

export const formatMetric = (value) => {
  if (value >= 1) return Math.round(value);
  else if (value === 0) return 0;
  else return '< 1';
};
