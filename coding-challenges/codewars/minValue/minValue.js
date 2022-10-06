function minValue(values) {
  return Number(
    Array.from(new Set(values)).sort().join("")
  );
}

console.log(minValue([1, 3, 1]));
