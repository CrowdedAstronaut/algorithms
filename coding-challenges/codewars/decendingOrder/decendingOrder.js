const descendingOrder = (n) =>
  n === 0
    ? 0
    : parseInt(
        n
          .toString()
          .split("")
          .sort((a, b) => a - b)
          .reverse()
          .join("")
      );

console.log(descendingOrder(1021));
