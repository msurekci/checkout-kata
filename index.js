const items = require('./src/items');

module.exports = (usersItems) => {
  const listOfItems = usersItems.split('');
  
  let cost = 0;

  listOfItems.forEach((item) => {
    let price = items.getPrice(item);
    cost += price;
  });

  return cost;
}