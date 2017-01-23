const items = [{ "name": "A", "price": 50 },
{ "name": "B", "price": 30 },
{ "name": "C", "price": 20 },
{ "name": "D", "price": 15 }];

const getPrice = (name) => {
  const item = items.find((item) => item.name === name); 
  return item.price;
};

module.exports = {
  getPrice,
}