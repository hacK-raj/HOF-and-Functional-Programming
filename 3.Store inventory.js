const storeInventory = {
  item1: 10,
  item2: 20,
  item3: 30,
};

const exchangeRate = 80; 

const inventoryInINR = Object.fromEntries(
  Object.entries(storeInventory).map(([item, price]) => [
    item,
    price * exchangeRate,
  ])
);

console.log(inventoryInINR);
