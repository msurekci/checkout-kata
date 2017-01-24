const should = require('should');

const items = require('../../../src/items');

describe('Items', () => {
  it('should return the price of an item', () => {
    items.getPrice('A').should.eql(50);
  });

  it('getItem should return the item', () => {
    items.getItem('D').should.eql({name: 'D', price: 15, qualifiesForDiscount: false});
  });
});