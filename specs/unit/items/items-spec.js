const should = require('should');

const items = require('../../../src/items');

describe('Items', () => {
  it('should return the price of an item', () => {
    items.getPrice('A').should.eql(50);
  });
});