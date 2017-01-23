const should = require('should');

const checkout = require('../index');

describe('Shopping cart', () => {
  it('should return 145 when items purchased are \'DABA\'', () => {
    checkout('DABA').should.eql(145);
  });

  it('should return 50 when item purchased is \'A\'', () => {
    checkout('A').should.eql(50);
  });
});