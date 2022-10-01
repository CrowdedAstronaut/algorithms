function arithmeticProgression(start, diff, n) {
  return Array(n)
    .fill(start)
    .map((_, i) => start + i * diff)
    .join(", ");
}

function arithmeticProgression(start, diff, n) {
  let result = [start];
  for (let i = 0; i < n - 1; i++)
    result.push(result[i] + diff);
  return result.join(", ");
}
