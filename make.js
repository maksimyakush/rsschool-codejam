const make = (a) => (...args) => (b) => (fn) => fn(args.reduce(fn, a), b);
