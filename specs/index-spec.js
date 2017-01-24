const should = require('should');
const sinon = require('sinon');

const checkout = require('../index');
const priceCalculator = require('../src/price-calculator');

describe('Checkout', () => {
  it('should call price calculator with the list of items', () => {
    const calculateSpy = sinon.spy(priceCalculator, 'calculate');

    checkout('AABB');
    calculateSpy.calledWith(['A', 'A', 'B', 'B']).should.be.true();
  });
});