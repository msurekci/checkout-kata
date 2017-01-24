const items = require('./items');
const _ = require('lodash');

const getItemsInCheckout = (itemList) => {
  const listOfItems = itemList.map((item) => {
    return items.getItem(item);
  });

  return _.uniqBy(listOfItems, 'name');
};

const calculateDiscount = (itemList) => {
  const items = getItemsInCheckout(itemList);

  let discount = 0;

  items.forEach((item) => {
    if (!item.qualifiesForDiscount)
      return;
    const countOfItem = itemList.filter((singleItem) => singleItem === item.name).length;
    const totalDiscount = Math.floor(countOfItem / item.quantityRequiredForDiscount) * item.discountValue;

    discount += totalDiscount;
  });

  return discount;
};

const calculate = (itemList) => {
  let cost = 0;

  itemList.forEach((item) => {
    let price = items.getPrice(item);
    cost += price;
  });

  const discount = calculateDiscount(itemList);
  return cost - discount;
};

module.exports = {
  calculate,
}