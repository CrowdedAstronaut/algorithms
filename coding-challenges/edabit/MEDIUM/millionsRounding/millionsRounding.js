function millionsRounding(arr) {
  return arr.map((x) => [
    x[0],
    Math.round(x[1] / 1000000) * 1000000,
  ]);
}

function millionsRounding(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] < 500000) arr[i][1] = 0;
    else
      arr[i][1] = Math.round(arr[i][1] / 1000000) * 1000000;
  }
  return arr;
}
