const sum = (a, b) => a + b;
const make = (a) => (...args) => (b) => (fn) => args.reduce(fn, a) + b;
