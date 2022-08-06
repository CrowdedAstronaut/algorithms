function viralAdvertising(int) {
  let cumulative = 0;

  for (let i = 0; i <= int; i++) {
    console.log((cumulative += Math.floor(int / 2) * i) + 3);
  }
}

console.log(viralAdvertising(5));
