function findFactors(num) {
  let factorArray = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factorArray.push(i);
    }
  }
  return factorArray;
}
