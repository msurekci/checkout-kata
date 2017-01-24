const should = require('should');
const sinon = require('sinon');

const items = require('../../../src/items');
const priceCalculator = require('../../../src/price-calculator');

describe('Price calculator', () => {
  it('should add up the prices of all products', () => {
    const getPriceSpy = sinon.spy(items, 'getPrice');
    const itemList = ['A', 'B'];
    
    priceCalculator.calculate(itemList).should.eql(80);
    getPriceSpy.called.should.be.true();
  });

  it('should calculate the discount for a particular item', () => {
    const itemList = ['A', 'A', 'A'];

    priceCalculator.calculate(itemList).should.eql(130);
  });
});