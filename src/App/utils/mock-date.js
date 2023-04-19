const RealDate = Date;

const MockDate = class Date extends RealDate {
  constructor() {
    super(...(arguments.length === 0 ? [MockDate.now()] : arguments));
  }
};

// MockDate.prototype = RealDate.prototype;
MockDate.UTC = RealDate.UTC;
MockDate.now = RealDate.now;
MockDate.parse = RealDate.parse;
MockDate.toString = RealDate.toString;

export function mockDate(timestamp, fixed = false) {
  if (fixed) MockDate.now = () => timestamp;
  else {
    const loadTime = RealDate.now();
    MockDate.now = () => timestamp + (RealDate.now() - loadTime);
  }

  // eslint-disable-next-line no-global-assign
  Date = MockDate;
}
