const items = require('./src/items');
const priceCalculator = require('./src/price-calculator');
const yargs = require('yargs');

const checkout = (usersItems) => {
  const listOfItems = usersItems.split('');

  const price = priceCalculator.calculate(listOfItems);
  console.log(`The price of all items in the basket: ${price}`);
  return price;
}

const command = yargs.argv._[0];
const itemsInCheckout = yargs.argv._[1];

if (command === 'checkout') {
  checkout(itemsInCheckout);
}

module.exports = {
  checkout,
}