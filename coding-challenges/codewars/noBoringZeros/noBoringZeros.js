function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/, ""));
}

console.log(noBoringZeros(1450));
