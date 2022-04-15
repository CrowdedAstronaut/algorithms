function divisors(integer) {
  let array = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) array.push(i);
  }
  return array.length > 0 ? array : `${integer} is prime`;
}
