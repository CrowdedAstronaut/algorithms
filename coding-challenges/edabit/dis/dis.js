const dis = (price, discount) =>
  Number((price - price * discount * 0.01).toFixed(2));
