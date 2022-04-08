function mostExpensive(obj) {
  let sortedJewel = Object.entries(obj).sort(
    (a, b) => b[1] - a[1]
  );
  return `The most expensive one is the ${sortedJewel[0][0]}`;
}

//Edabit solution
function mostExpensive(obj) {
  const max = Math.max(...Object.values(obj));
  for (const key in obj)
    if (obj[key] === max)
      return "The most expensive one is the " + key;
}

const mostExpensive = (obj) => {
  const pricey = Object.entries(obj).sort(
    ([, a], [, b]) => b - a
  )[0][0];
  return `The most expensive one is the ${pricey}`;
};
