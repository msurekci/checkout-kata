const items = require('./src/items');
const priceCalculator = require('./src/price-calculator');

module.exports = (usersItems) => {
  const listOfItems = usersItems.split('');
  
  return priceCalculator.calculate(listOfItems);
}