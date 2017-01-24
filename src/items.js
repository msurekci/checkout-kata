const items = [{ "name": "A", "price": 50 , qualifiesForDiscount: true, quantityRequiredForDiscount: 3, discountValue: 20},
{ "name": "B", "price": 30, qualifiesForDiscount: true, quantityRequiredForDiscount: 2, discountValue: 15 },
{ "name": "C", "price": 20, qualifiesForDiscount: false },
{ "name": "D", "price": 15, qualifiesForDiscount: false }];

const getPrice = (name) => {
  const item = getItem(name);
  return item.price;
};

const getItem = (name) => {
  return items.find((item) => item.name === name);
}

module.exports = {
  getPrice,
  getItem,
}