const should = require('should');

const checkout = require('../../index');

describe('Shopping cart', () => {
  testCases = [
    { input: 'DABA', expected: 145 },
    { input: 'A', expected: 50 },
    { input: 'AB', expected: 80 },
    { input: 'AAA', expected: 130 },
    { input: 'AAABBDCC', expected: 230 }]

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} when items purchased are ${testCase.input}`, () => {
      checkout(testCase.input).should.eql(testCase.expected);
    });
  });
});