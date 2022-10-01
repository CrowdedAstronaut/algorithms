const profitMargin = (costPrice, salesPrice) =>
  `${(((salesPrice - costPrice) / salesPrice) * 100).toFixed(1)}%`;
