function divCon(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      sum += x[i];
    } else {
      sum -= x[i];
    }
  }
  return sum;
}

console.log(divCon([9, 3, "7", "3"]));
