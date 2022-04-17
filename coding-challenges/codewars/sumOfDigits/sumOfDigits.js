function digital_root(n) {
  let result = 0;
  String(n)
    .split("")
    .map((num) => {
      result += Number(num);
    });
  return result >= 10 ? digital_root(result) : result;
}

function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}

//Clean Loop solution
function digital_root(n) {
  if (n < 10) return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);

  return digital_root(sum);
}
