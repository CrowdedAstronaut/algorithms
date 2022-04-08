function multiSum(num, ten = 10) {
  if (ten === 1) {
    return num;
  }
  return num * ten + multiSum(num, ten - 1);
}

function multiSum(num, ten = 10) {
  let sum = 0;
  for (let i = 1; i <= ten; i++) {
    sum = sum + num * i;
  }
  return sum;
}
