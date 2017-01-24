const should = require('should');
const sinon = require('sinon');

const checkout = require('../index');
const priceCalculator = require('../src/price-calculator');

describe('Checkout', () => {
  it('should log the price to the console', () => {
    const consoleLogSpy = sinon.spy(console, 'log');

    checkout.checkout('AAA');
    consoleLogSpy.calledWith('The price of all items in the basket: 130').should.be.true();
  });

  it('should call price calculator with the list of items', () => {
    const calculateSpy = sinon.spy(priceCalculator, 'calculate');

    checkout.checkout('AABB');
    calculateSpy.calledWith(['A', 'A', 'B', 'B']).should.be.true();
  });
});