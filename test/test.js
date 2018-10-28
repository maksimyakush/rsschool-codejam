const { expect } = require('chai');
const make = require('../src/make');
const sumOfOther = require('../src/sumOfOther');
const recursion = require('../src/recursion');

describe('sumOfOther', () => {
  it('expected [8, 7, 6, 9]', () => expect(sumOfOther([2, 3, 4, 1])).to.deep.equal([8, 7, 6, 9]));
  it('expected [0]', () => expect(sumOfOther([1])).to.deep.equal([0]));
  it('expected [3, 3, 3, 3]', () => expect(sumOfOther([1, 1, 1, 1])).to.deep.equal([3, 3, 3, 3]));
});

describe('make', () => {
  const sum = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  const substr = (a, b) => a - b;
  it('expected 777', () => expect(make(15)(34, 21, 666)(41)(sum)).to.equal(777));
  it('expected 120', () => expect(make(1)(2, 3, 4)(5)(multiply)).to.equal(120));
  it('expected -5', () => expect(make(5)(4, 3, 2)(1)(substr)).to.equal(-5));
});

describe('recursion', () => {
  const tree = {
    value: 100,
    left: { value: 90, left: { value: 70 }, right: { value: 99 } },
    right: { value: 120, left: { value: 110 }, right: { value: 130 } },
  };
  it('expected [[100], [90, 120], [70,99,110,130]]', () => expect(recursion(tree)).to.deep.equal([[100], [90, 120], [70, 99, 110, 130]]));
});
