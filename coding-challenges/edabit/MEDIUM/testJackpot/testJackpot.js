const testJackpot = (result) =>
  result.every((val) => val === result[0]);

function testJackpot(result) {
  return new Set(result).size === 1;
}
