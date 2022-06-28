function getTotalPrice(groceries) {
  let priceArray = [];
  for (let i = 0; i < groceries.length; i++) {
    const itemPrice = groceries[i].price;
    const itemQuantity = groceries[i].quantity;
    priceArray.push(itemPrice * itemQuantity);
  }

  return parseFloat(
    priceArray.reduce((a, b) => a + b).toFixed(1)
  );
}
